import React from 'react';
import { motion, useInView } from 'framer-motion';
import ImageItem from "@/components/imageItems";
import { toolModels } from '@/data/logoData';

const IntegrateSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-2 py-12 text-center"
        >
            <div>
                <h4 className="text-3xl font-bold mb-4 bg-gradient-to-t from-purple-400 to-white bg-clip-text text-transparent">
                    Integrations and automations
                </h4>
                <p className="text-purple-200 mb-8 text-sm">
                    Live-sync, set up action based triggers (e.g., receive an email), and automate actions (e.g., send a slack message) across your tool stack
                </p>
                <div className="sm:flex sm:flex-wrap justify-center sm:gap-x-8 grid grid-cols-3 gap-x-6">
                    {toolModels.map((model, index) => (
                        <ImageItem
                            key={index}
                            name={model.name}
                            logoSrc={model.logoSrc}
                            width={model.width}
                            height={model.height}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default IntegrateSection;