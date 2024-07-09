import { motion, useInView } from "framer-motion";
import React from "react";

export default function HeadingTwo() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl md:text-4xl font-semibold pb-28 bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300"
        >
            Leverage AI throughout your <br /> company and products
        </motion.div>
    )
}