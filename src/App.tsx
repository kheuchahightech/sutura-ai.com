import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./pages/landing/LandingPage";
import AboutPage from "./pages/landing/AboutPage";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LandingI18nProvider } from "./lib/landing-i18n";

const App = () => (
  <HelmetProvider>
    <LandingI18nProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LandingI18nProvider>
  </HelmetProvider>
);

export default App;
