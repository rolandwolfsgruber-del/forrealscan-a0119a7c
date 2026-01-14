import { useGitHubSync, SyncStatus } from '@/hooks/useGitHubSync';
import { getGitHubCommitUrl, getGitHubRepoUrl } from '@/lib/githubConfig';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  RefreshCw, 
  Copy, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Loader2,
  ExternalLink,
  GitCommit,
  Clock,
  HelpCircle
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { de } from 'date-fns/locale';
import { toast } from 'sonner';

const StatusIcon = ({ status }: { status: SyncStatus }) => {
  switch (status) {
    case 'loading':
      return <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />;
    case 'synced':
      return <CheckCircle className="h-5 w-5 text-veritas" />;
    case 'behind':
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    case 'ahead':
      return <GitCommit className="h-5 w-5 text-robo" />;
    case 'unknown':
      return <HelpCircle className="h-5 w-5 text-muted-foreground" />;
    case 'error':
      return <XCircle className="h-5 w-5 text-destructive" />;
    default:
      return null;
  }
};

const getStatusBadgeVariant = (status: SyncStatus): "default" | "secondary" | "destructive" | "outline" => {
  switch (status) {
    case 'synced':
    case 'ahead':
      return 'default';
    case 'behind':
      return 'secondary';
    case 'error':
      return 'destructive';
    default:
      return 'outline';
  }
};

const getStatusColor = (status: SyncStatus): string => {
  switch (status) {
    case 'synced':
      return 'border-veritas/50 bg-veritas/10';
    case 'behind':
      return 'border-amber-500/50 bg-amber-500/10';
    case 'ahead':
      return 'border-robo/50 bg-robo/10';
    case 'error':
      return 'border-destructive/50 bg-destructive/10';
    default:
      return 'border-border bg-card';
  }
};

export const GitHubSyncStatus = () => {
  const {
    status,
    lovableBuildId,
    latestGitHubCommit,
    behindBy,
    missingCommits,
    lastChecked,
    error,
    isRateLimited,
    rateLimitReset,
    refresh,
    getStatusText,
    copyStatusToClipboard,
  } = useGitHubSync();

  const handleCopy = async () => {
    await copyStatusToClipboard();
    toast.success('Status in Zwischenablage kopiert');
  };

  const handleRefresh = () => {
    refresh();
    toast.info('Prüfe GitHub Status...');
  };

  return (
    <Card className={`w-full max-w-2xl border-2 ${getStatusColor(status)}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <GitCommit className="h-5 w-5" />
            GitHub Sync Status
          </CardTitle>
          <Badge variant={getStatusBadgeVariant(status)} className="flex items-center gap-1.5">
            <StatusIcon status={status} />
            {getStatusText()}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Build Comparison */}
        <div className="grid grid-cols-2 gap-4 rounded-lg bg-muted/50 p-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Lovable Build</p>
            <code className="text-sm font-mono text-foreground">
              {lovableBuildId === 'dev' ? 'dev' : lovableBuildId.substring(0, 7)}
            </code>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">GitHub main</p>
            {latestGitHubCommit ? (
              <a
                href={getGitHubCommitUrl(latestGitHubCommit.sha)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-robo hover:underline inline-flex items-center gap-1"
              >
                {latestGitHubCommit.shortSha}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="text-sm text-muted-foreground">—</span>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-lg bg-destructive/10 border border-destructive/30 p-3">
            <p className="text-sm text-destructive">{error}</p>
            {isRateLimited && rateLimitReset && (
              <p className="text-xs text-muted-foreground mt-1">
                Rate-Limit Reset: {formatDistanceToNow(rateLimitReset, { addSuffix: true, locale: de })}
              </p>
            )}
          </div>
        )}

        {/* Missing Commits */}
        {missingCommits.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              Fehlende Commits ({missingCommits.length}):
            </p>
            <div className="space-y-1 max-h-48 overflow-y-auto rounded-lg border border-border bg-background p-2">
              {missingCommits.map((commit) => (
                <a
                  key={commit.sha}
                  href={commit.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 p-2 rounded hover:bg-muted/50 transition-colors group"
                >
                  <code className="text-xs font-mono text-robo shrink-0">
                    {commit.shortSha}
                  </code>
                  <span className="text-sm text-foreground truncate flex-1">
                    {commit.message}
                  </span>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {commit.relativeTime}
                  </span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Last Checked */}
        {lastChecked && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            Zuletzt geprüft: {formatDistanceToNow(lastChecked, { addSuffix: true, locale: de })}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={status === 'loading'}
          >
            <RefreshCw className={`h-4 w-4 mr-1.5 ${status === 'loading' ? 'animate-spin' : ''}`} />
            Prüfen
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
          >
            <Copy className="h-4 w-4 mr-1.5" />
            Kopieren
          </Button>
          <Button
            variant="ghost"
            size="sm"
            asChild
          >
            <a
              href={getGitHubRepoUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-1.5" />
              Repo öffnen
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
