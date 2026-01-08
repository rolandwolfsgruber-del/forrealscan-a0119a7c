import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Game from "./pages/Game";
import Methodology from "./pages/Methodology";
import ExamplesPage from "./pages/ExamplesPage";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import { DebugPanel } from "./components/DebugPanel";
import { SporeEffect } from "./components/SporeEffect";
import { CookieConsent } from "./components/CookieConsent";
import { useThemeBodyClass } from "./hooks/useTheme";

const queryClient = new QueryClient();

const App = () => {
  // Apply theme class to body for all pages
  useThemeBodyClass();

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SporeEffect />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DebugPanel />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
