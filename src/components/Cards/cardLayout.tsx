import EnterpriseSolutions from "./enterprise";
import HighVolume from "./highVolume";
import RFP from "./rfp";
import Report from "./report";
import Personalized from "./personalized";
import Knowledge from "./knowledge";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CardLayout() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });


    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pb-10 max-w-[430px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-7xl mx-auto pt-12"
        >
            <div className="hidden lg:flex lg:gap-5 lg:flex-wrap lg:justify-center">
                <div><EnterpriseSolutions /></div>
                <div><HighVolume /></div>
                <div><RFP /></div>
                <div><Report /></div>
                <div><Personalized /></div>
                <div><Knowledge /></div>
            </div>

            <div className="lg:hidden relative">
                <div className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide">
                    <div className="flex-shrink-0"><EnterpriseSolutions /></div>
                    <div className="flex-shrink-0"><HighVolume /></div>
                    <div className="flex-shrink-0"><RFP /></div>
                    <div className="flex-shrink-0"><Report /></div>
                    <div className="flex-shrink-0"><Personalized /></div>
                    <div className="flex-shrink-0"><Knowledge /></div>
                </div>
            </div>

        </motion.div >

    )
}