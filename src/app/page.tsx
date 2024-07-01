"use client";

import NavigationContainer from "@/components/navbar";
import { motion } from "framer-motion";
import HeroSection from "@/components/herosection";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-gray-800 to-gray-900 min-h-screen lg:px-10 px-4">
      <div>
        <NavigationContainer />
      </div>
      <div>
        <HeroSection />
      </div>
      <motion.div className="text-center text-3xl md:text-4xl lg:text-5xl  font-semibold pb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      >
          An ecosystem to build, deploy <br /> and manage AI application
      </motion.div>

    </div>
  );
}
