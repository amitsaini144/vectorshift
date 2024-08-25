import EnterpriseSolutions from "./enterprise";
import HighVolume from "./highVolume";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cardInfo } from "@/types";

export default function CardLayout() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const cardInfo: cardInfo[] = [
        { title: "High volume chatbot", description: "We leverage our secure infrastructure and development.", link: "/" },
        { title: "RFP and proposal generators", description: "We leverage our secure infrastructure and development platform to build and deploy high-ROI AI solutions for your organizations.", link: "/" },
        { title: "Report generation", description: "We leverage our secure infrastructure and development.", link: "/" },
        { title: "Personalized email outbound", description: "We leverage our secure infrastructure and development platform to build and deploy high-ROI AI solutions for your organizations.", link: "/" },
        { title: "Knowledge search", description: "We leverage our secure infrastructure and development platform to build and deploy high-ROI AI solutions for your organizations.", link: "/" },
    ]

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
                {cardInfo.map((item, index) => (
                    <div key={index}>
                        <HighVolume title={item.title} description={item.description} link={item.link} />
                    </div>
                ))}
            </div>

            <div className="lg:hidden relative">
                <div className="flex gap-5 overflow-x-auto scrollbar-hide">
                    <div className="flex-shrink-0"><EnterpriseSolutions /></div>
                    {cardInfo.map((item, index) => (
                        <div className="flex-shrink-0" key={index}>
                            <HighVolume title={item.title} description={item.description} link={item.link} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div >
    )
}