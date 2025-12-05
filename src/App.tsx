import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TimelineSection } from "@/components/TimelineSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useLanguage, LanguageProvider } from "@/hooks/useLanguage";
import { Privacy } from "@/pages/Privacy";
import { Cookie } from "@/pages/Cookie";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// NUOVO: Layout wrapper che forza il re-render quando cambia lingua
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { currentLanguage } = useLanguage();
  return <div key={currentLanguage}>{children}</div>;
};

const HomePage = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLanguage} onLanguageChange={changeLanguage} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TimelineSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookie" element={<Cookie />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
