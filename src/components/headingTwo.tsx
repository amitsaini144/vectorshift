import { motion, useInView } from "framer-motion";
import React from "react";

export default function HeadingTwo() {
    return (
        <motion.div className="text-center text-3xl md:text-4xl font-semibold pb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            Leverage AI throughout your <br /> company and products
        </motion.div>
    )
}