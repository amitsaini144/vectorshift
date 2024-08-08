"use client";

import NavigationContainer from "@/components/navbar";
import HeroSection from "@/components/herosection";
import Menu from "@/components/menu";
import Heading from "@/components/heading";
import LanguageModelsSection from "@/components/languageModelSection";
import IntegrateSection from "@/components/integrateSection";
import HeadingTwo from "@/components/headingTwo";
import FAQ from "@/components/FAQ/faqSection";
import DocsCard from "@/components/docsCard";
import CardLayout from "@/components/Cards/cardLayout";

export default function Home() {

  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full">
      <div className="bg-gradient-to-br from-[#5500dc] via-[#000000] to-[#000000] w-full md:px-10 px-6">
        <NavigationContainer />
        <HeroSection />
        <Heading />
      </div>
      <div className="md:px-10 px-6 overflow-hidden">
        <IntegrateSection />
        <LanguageModelsSection />
        <HeadingTwo />
        <CardLayout />
        <DocsCard />
        <FAQ />
        <Menu />
      </div>
    </div>
  );
}
