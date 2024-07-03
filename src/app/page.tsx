"use client";

import NavigationContainer from "@/components/navbar";
import { motion } from "framer-motion";
import HeroSection from "@/components/herosection";
import Menu from "@/components/menu";
import Heading from "@/components/heading";

export default function Home() {

  return (
    <div className="bg-gradient-to-br from-purple-600 via-gray-800 to-gray-900 min-h-screen lg:px-10 md:px-1">
      <div>
        <NavigationContainer />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Heading />
      </div>
      <Menu />
    </div>
  );
}
