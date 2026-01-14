export const GITHUB_CONFIG = {
  owner: 'rolandwolfsgruber-del',
  repo: 'forrealscan-a0119a7c',
  branch: 'main',
  apiBaseUrl: 'https://api.github.com',
  refreshInterval: 60000, // 60 seconds
  maxCommitsToFetch: 20,
} as const;

export const getGitHubRepoUrl = () => 
  `https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}`;

export const getGitHubCommitUrl = (sha: string) => 
  `${getGitHubRepoUrl()}/commit/${sha}`;

export const getGitHubApiUrl = () => 
  `${GITHUB_CONFIG.apiBaseUrl}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/commits?sha=${GITHUB_CONFIG.branch}&per_page=${GITHUB_CONFIG.maxCommitsToFetch}`;
