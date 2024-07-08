"use client";

import NavigationContainer from "@/components/navbar";
import HeroSection from "@/components/herosection";
import Menu from "@/components/menu";
import Heading from "@/components/heading";
import LanguageModelsSection from "@/components/languageModelSection";
import IntegrateSection from "@/components/integrateSection";
import HeadingTwo from "@/components/headingTwo";
import FAQ from "@/components/FAQ/faqSection";

export default function Home() {

  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full lg:px-10 md:px-1 px-6">
      <NavigationContainer />
      <HeroSection />
      <Heading />
      <IntegrateSection />
      <LanguageModelsSection />
      <HeadingTwo />
      <FAQ />
      <Menu />
    </div>
  );
}
