import { motion, useInView } from "framer-motion";
import React from "react";

export default function Heading() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <motion.div className="text-center text-3xl md:text-4xl font-semibold pb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            An ecosystem to build, deploy <br /> and manage AI application
        </motion.div>
    )
}