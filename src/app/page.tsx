"use client";

import NavigationContainer from "@/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-gray-800 to-gray-900 h-screen">
      <motion.div
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <NavigationContainer />
      </motion.div>

    </div>
  );
}
