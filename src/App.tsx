import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SkipLink } from "./components/SkipLink";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { DebugPanel } from "./components/DebugPanel";
import { SporeEffect } from "./components/SporeEffect";
import { CookieConsent } from "./components/CookieConsent";
import { useThemeBodyClass } from "./hooks/useTheme";

// Lazy load pages for better performance (Code-Splitting)
const Index = lazy(() => import("./pages/Index"));
const Imprint = lazy(() => import("./pages/Imprint"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Contact = lazy(() => import("./pages/Contact"));
const Game = lazy(() => import("./pages/Game"));
const Methodology = lazy(() => import("./pages/Methodology"));
const ExamplesPage = lazy(() => import("./pages/ExamplesPage"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Terms = lazy(() => import("./pages/Terms"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const SyncStatus = lazy(() => import("./pages/SyncStatus"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-veritas to-robo opacity-50" />
      <p className="text-muted-foreground text-sm">Laden...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  // Apply theme class to body for all pages
  useThemeBodyClass();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SkipLink />
          <SporeEffect />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <DebugPanel />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/methodology" element={<Methodology />} />
                <Route path="/examples" element={<ExamplesPage />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/game" element={<Game />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogArticle />} />
                <Route path="/sync-status" element={<SyncStatus />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <CookieConsent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
