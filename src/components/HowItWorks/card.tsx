import { CardProps } from "@/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Card({ number, title, description }: CardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-[#1c074e]/60 to-[#1c074e]/60 flex flex-col w-full h-full rounded-2xl border border-[#430B8A] p-6"
        >
            <div className="flex flex-col text-sm text-start h-full">
                <div className="flex flex-col gap-4 mb-4">
                    <div className="bg-gradient-to-b from-black/70 to-[#1c074e] border rounded-lg w-8 h-8 flex items-center justify-center">
                        <span className="text-[#BC7DFF] font-semibold">{number}</span>
                    </div>
                    <h2 className="text-2xl font-semibold bg-gradient-to-t from-[#A17CFF] to-white bg-clip-text text-transparent">
                        {title}
                    </h2>
                </div>
                <p className="text-white flex-grow leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};