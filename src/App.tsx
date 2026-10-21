import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { ContactForm } from "./components/ContactForm";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { WorkProcess } from "./components/WorkProcess";
import { PricingPlans } from "./components/PricingPlans";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFB] text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar Contract (1 row, 3 zones) */}
      <Header />

      <main className="flex-1">
        {/* 1. Seção inicial impactante */}
        <Hero />

        {/* 2. Sobre / Quem sou */}
        <About />

        {/* 3. Serviços */}
        <Services />

        {/* 4. Portfólio / Projetos */}
        <Portfolio />

        {/* 5. Formulário de contato */}
        <ContactForm />

        {/* 6. WhatsApp flutuante */}
        <FloatingWhatsApp />

        {/* 7. Processo de trabalho */}
        <WorkProcess />

        {/* 8. Preços / Planos */}
        <PricingPlans />
      </main>

      <Footer />
    </div>
  );
}
