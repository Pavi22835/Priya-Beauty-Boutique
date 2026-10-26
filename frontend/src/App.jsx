import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import WhatsAppButton from "./components/layout/WhatsAppButton.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";
import PortfolioSection from "./sections/PortfolioSection.jsx";
import TestimonialsSection from "./sections/TestimonialsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import { useLanguage } from "./hooks/useLanguage.js";

export default function App() {
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
    });
  }, []);

  return (
    <>
      <Header
        t={t}
        language={language}
        toggleLanguage={toggleLanguage}
      />

      <main>
        <HeroSection t={t} />
        <AboutSection t={t} />
        <ServicesSection t={t} />
        <PortfolioSection t={t} />
        <TestimonialsSection t={t} />
        <ContactSection t={t} />
      </main>

      <Footer t={t} />
      <WhatsAppButton />
    </>
  );
}
