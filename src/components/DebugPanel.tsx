import { useEffect, useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_STORAGE_KEYS, DEBUG_STORAGE_KEY } from '@/lib/constants';
import { BUILD_ID, BUILD_JSON_URL, BUILD_TIME, debugFlagIsEnabled } from '@/lib/buildInfo';

interface BuildMetadata {
  buildId?: string;
  buildTime?: string;
}

export const DebugPanel = () => {
  const [debugEnabled, setDebugEnabled] = useState(false);
  const [buildJson, setBuildJson] = useState<BuildMetadata | null>(null);
  const [buildJsonError, setBuildJsonError] = useState<string | null>(null);

  useEffect(() => {
    setDebugEnabled(debugFlagIsEnabled());
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchBuildMetadata = async () => {
      try {
        const response = await fetch(BUILD_JSON_URL, {
          cache: 'no-cache',
          headers: {
            'Cache-Control': 'no-cache',
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = (await response.json()) as BuildMetadata;

        if (isMounted) {
          setBuildJson(data);
          setBuildJsonError(null);
        }
      } catch (error) {
        if (isMounted) {
          setBuildJsonError((error as Error).message);
        }
      }
    };

    fetchBuildMetadata();

    return () => {
      isMounted = false;
    };
  }, []);

  const buildInfoRows = useMemo(
    () => [
      {
        label: 'Runtime build',
        badge: BUILD_ID,
        helper: `Time: ${BUILD_TIME}`,
      },
      {
        label: 'build.json',
        badge: buildJson?.buildId ?? 'unavailable',
        helper: buildJsonError ? `Error: ${buildJsonError}` : `Time: ${buildJson?.buildTime ?? 'unknown'}`,
      },
    ],
    [buildJson, buildJsonError],
  );

  const handleCacheBust = () => {
    APP_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));

    const url = new URL(window.location.href);
    // Use timestamp if BUILD_ID is 'dev' to ensure real cache bust
    const bustValue = BUILD_ID === 'dev' ? Date.now().toString() : BUILD_ID;
    url.searchParams.set('v', bustValue);
    if (debugEnabled) {
      url.searchParams.set('debug', '1');
    }

    window.location.href = url.toString();
  };

  const handleDisableDebug = () => {
    localStorage.removeItem(DEBUG_STORAGE_KEY);
    const url = new URL(window.location.href);
    url.searchParams.delete('debug');
    window.history.replaceState({}, '', url.toString());
    setDebugEnabled(false);
  };

  if (!debugEnabled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[min(360px,92vw)]">
      <Card className="shadow-lg border border-border/80">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-3">
            <CardTitle className="text-sm font-semibold">Debug mode</CardTitle>
            <Badge variant="secondary" className="text-xs">host: {window.location.host}</Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Showing build markers to spot stale deploys. Add <code>?debug=1</code> to URLs to persist.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            {buildInfoRows.map((row) => (
              <div key={row.label} className="rounded-lg border border-border/70 px-3 py-2">
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-foreground">{row.label}</span>
                  <Badge variant="outline" className="font-mono text-[11px]">{row.badge}</Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{row.helper}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm" onClick={handleCacheBust}>
              Cache-bust & reload
            </Button>
            <Button size="sm" variant="ghost" onClick={handleDisableDebug}>
              Hide debug
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
