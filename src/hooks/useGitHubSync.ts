import { useState, useEffect, useCallback } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { de } from 'date-fns/locale';
import { GITHUB_CONFIG, getGitHubApiUrl } from '@/lib/githubConfig';
import { BUILD_ID } from '@/lib/buildInfo';
import { GITHUB_SYNC_CACHE_KEY } from '@/lib/constants';

export interface GitHubCommit {
  sha: string;
  shortSha: string;
  message: string;
  date: Date;
  relativeTime: string;
  htmlUrl: string;
  author: string;
}

export type SyncStatus = 'loading' | 'synced' | 'behind' | 'ahead' | 'error' | 'unknown';

export interface GitHubSyncState {
  status: SyncStatus;
  lovableBuildId: string;
  latestGitHubCommit: GitHubCommit | null;
  behindBy: number;
  missingCommits: GitHubCommit[];
  lastChecked: Date | null;
  error: string | null;
  isRateLimited: boolean;
  rateLimitReset: Date | null;
}

interface CachedData {
  state: Omit<GitHubSyncState, 'lastChecked' | 'rateLimitReset'> & {
    lastChecked: string | null;
    rateLimitReset: string | null;
  };
  timestamp: number;
}

const parseCommit = (commit: any): GitHubCommit => ({
  sha: commit.sha,
  shortSha: commit.sha.substring(0, 7),
  message: commit.commit.message.split('\n')[0], // First line only
  date: new Date(commit.commit.author.date),
  relativeTime: formatDistanceToNow(new Date(commit.commit.author.date), { 
    addSuffix: true, 
    locale: de 
  }),
  htmlUrl: commit.html_url,
  author: commit.commit.author.name,
});

const loadCachedData = (): GitHubSyncState | null => {
  try {
    const cached = localStorage.getItem(GITHUB_SYNC_CACHE_KEY);
    if (!cached) return null;
    
    const data: CachedData = JSON.parse(cached);
    // Cache valid for 5 minutes
    if (Date.now() - data.timestamp > 5 * 60 * 1000) return null;
    
    return {
      ...data.state,
      lastChecked: data.state.lastChecked ? new Date(data.state.lastChecked) : null,
      rateLimitReset: data.state.rateLimitReset ? new Date(data.state.rateLimitReset) : null,
    };
  } catch {
    return null;
  }
};

const saveCachedData = (state: GitHubSyncState) => {
  try {
    const data: CachedData = {
      state: {
        ...state,
        lastChecked: state.lastChecked?.toISOString() ?? null,
        rateLimitReset: state.rateLimitReset?.toISOString() ?? null,
      },
      timestamp: Date.now(),
    };
    localStorage.setItem(GITHUB_SYNC_CACHE_KEY, JSON.stringify(data));
  } catch {
    // Ignore storage errors
  }
};

const initialState: GitHubSyncState = {
  status: 'loading',
  lovableBuildId: BUILD_ID,
  latestGitHubCommit: null,
  behindBy: 0,
  missingCommits: [],
  lastChecked: null,
  error: null,
  isRateLimited: false,
  rateLimitReset: null,
};

export const useGitHubSync = () => {
  const [state, setState] = useState<GitHubSyncState>(() => {
    const cached = loadCachedData();
    return cached ?? initialState;
  });

  const fetchGitHubCommits = useCallback(async () => {
    setState(prev => ({ ...prev, status: 'loading', error: null }));

    try {
      const response = await fetch(getGitHubApiUrl(), {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      });

      // Handle rate limiting
      if (response.status === 403) {
        const resetTimestamp = response.headers.get('X-RateLimit-Reset');
        const resetDate = resetTimestamp ? new Date(parseInt(resetTimestamp) * 1000) : null;
        
        const cached = loadCachedData();
        setState(prev => ({
          ...(cached ?? prev),
          status: 'error',
          error: 'GitHub API Rate-Limit erreicht',
          isRateLimited: true,
          rateLimitReset: resetDate,
          lastChecked: new Date(),
        }));
        return;
      }

      if (!response.ok) {
        throw new Error(`GitHub API Fehler: ${response.status}`);
      }

      const commits = await response.json();
      const parsedCommits: GitHubCommit[] = commits.map(parseCommit);

      if (parsedCommits.length === 0) {
        setState(prev => ({
          ...prev,
          status: 'error',
          error: 'Keine Commits gefunden',
          lastChecked: new Date(),
          isRateLimited: false,
        }));
        return;
      }

      const latestCommit = parsedCommits[0];
      const lovableShortId = BUILD_ID.substring(0, 7);

      // Find the position of the Lovable build in the commit history
      const lovableCommitIndex = parsedCommits.findIndex(
        commit => commit.sha.startsWith(lovableShortId) || lovableShortId.startsWith(commit.shortSha)
      );

      let status: SyncStatus;
      let behindBy = 0;
      let missingCommits: GitHubCommit[] = [];

      if (BUILD_ID === 'dev') {
        status = 'unknown';
      } else if (lovableCommitIndex === 0) {
        status = 'synced';
      } else if (lovableCommitIndex > 0) {
        status = 'behind';
        behindBy = lovableCommitIndex;
        missingCommits = parsedCommits.slice(0, lovableCommitIndex);
      } else {
        // Lovable build not found in recent commits
        // Could be ahead (local changes) or very old
        status = 'ahead';
      }

      const newState: GitHubSyncState = {
        status,
        lovableBuildId: BUILD_ID,
        latestGitHubCommit: latestCommit,
        behindBy,
        missingCommits,
        lastChecked: new Date(),
        error: null,
        isRateLimited: false,
        rateLimitReset: null,
      };

      setState(newState);
      saveCachedData(newState);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler';
      setState(prev => ({
        ...prev,
        status: 'error',
        error: errorMessage,
        lastChecked: new Date(),
        isRateLimited: false,
      }));
    }
  }, []);

  // Initial fetch and auto-refresh
  useEffect(() => {
    fetchGitHubCommits();
    
    const interval = setInterval(fetchGitHubCommits, GITHUB_CONFIG.refreshInterval);
    return () => clearInterval(interval);
  }, [fetchGitHubCommits]);

  const refresh = useCallback(() => {
    fetchGitHubCommits();
  }, [fetchGitHubCommits]);

  const getStatusText = useCallback(() => {
    switch (state.status) {
      case 'loading':
        return 'Prüfe...';
      case 'synced':
        return 'Synchron';
      case 'behind':
        return `${state.behindBy} Commit${state.behindBy > 1 ? 's' : ''} hinter`;
      case 'ahead':
        return 'Lokale Änderungen';
      case 'unknown':
        return 'Dev-Modus';
      case 'error':
        return 'Fehler';
      default:
        return 'Unbekannt';
    }
  }, [state.status, state.behindBy]);

  const copyStatusToClipboard = useCallback(async () => {
    const lines = [
      `GitHub Sync Status: ${getStatusText()}`,
      `Lovable Build: ${state.lovableBuildId}`,
      state.latestGitHubCommit ? `GitHub Latest: ${state.latestGitHubCommit.shortSha}` : '',
      state.behindBy > 0 ? `Behind by: ${state.behindBy} commits` : '',
      state.lastChecked ? `Last checked: ${formatDistanceToNow(state.lastChecked, { addSuffix: true, locale: de })}` : '',
    ].filter(Boolean).join('\n');

    await navigator.clipboard.writeText(lines);
  }, [state, getStatusText]);

  return {
    ...state,
    refresh,
    getStatusText,
    copyStatusToClipboard,
  };
};
