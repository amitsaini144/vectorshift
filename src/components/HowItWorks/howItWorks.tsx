import { motion, useInView } from "framer-motion";
import React from "react";
import HowItWorksCarousel from "./howItWorksCarousel";

export default function HowItWorks() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <motion.div className="text-center text-3xl md:text-4xl font-semibold pb-10 mb-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col justify-start">
                <h2 className="text-center text-4xl font-medium mb-8">
                    <span className="bg-gradient-to-t from-[#A17CFF] to-white bg-clip-text text-transparent">
                        How it works
                    </span>
                </h2>
            </div>
            <HowItWorksCarousel />
            
        </motion.div>
    )
}