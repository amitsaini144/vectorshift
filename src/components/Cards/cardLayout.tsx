import EnterpriseSolutions from "./enterprise";
import StandardCard from "./standardCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cards } from "@/data/cardData";

export default function CardLayout() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 max-w-[410px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-7xl mx-auto mt-12"
        >
            <div className="hidden lg:flex lg:gap-5 lg:flex-wrap lg:justify-center">
                <div><EnterpriseSolutions /></div>
                {cards.map((item, index) => (
                    <div key={index}>
                        <StandardCard
                            title={item.title}
                            description={item.description}
                            link={item.link} />
                    </div>
                ))}
            </div>

            <div className="lg:hidden relative">
                <div className="flex gap-5 overflow-x-auto scrollbar-hide">
                    <div className="flex-shrink-0"><EnterpriseSolutions /></div>
                    {cards.map((item, index) => (
                        <div className="flex-shrink-0" key={index}>
                            <StandardCard
                                title={item.title}
                                description={item.description}
                                link={item.link} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div >
    )
}