"use client";

import NavigationContainer from "@/components/navbar";
import { motion } from "framer-motion";
import HeroSection from "@/components/herosection";
import Menu from "@/components/menu";
import Heading from "@/components/heading";
import LanguageModelsSection from "@/components/languageModelSection";
import IntegrateSection from "@/components/integrateSection";

export default function Home() {

  return (
    <div className="bg-black min-h-screen lg:px-10 md:px-1">
      <div>
        <NavigationContainer />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Heading />
      </div>
      <div>
        <IntegrateSection />
      </div>
      <div>
        <LanguageModelsSection />
      </div>
      <Menu />
    </div>
  );
}
