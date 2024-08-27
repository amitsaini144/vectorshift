import React, { useState } from 'react';
import { faqData } from "@/data/faqData";
import FAQItem from './faqItems';
import { motion, useInView } from 'framer-motion';

export default function FAQ() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [openItems, setOpenItems] = useState<boolean[]>(new Array(faqData.length).fill(false));

    const toggleFAQ = (index: number) => {
        setOpenItems(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <motion.div className="w-full max-w-3xl mx-auto opacity-100 tabindex-0"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                <h2 className="text-center text-4xl font-bold mb-8">
                    <span className="bg-gradient-to-t from-[#A17CFF] to-white bg-clip-text text-transparent">
                        FAQ
                    </span>
                </h2>
            </div>
            <div className="opacity-100">
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        item={item}
                        isOpen={openItems[index]}
                        onToggle={() => toggleFAQ(index)}
                    />
                ))}
            </div>
        </motion.div>
    );
};