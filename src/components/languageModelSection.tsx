import React from 'react';
import { motion, useInView } from 'framer-motion';
import ImageItem from "@/components/imageItems";
import { languageModels } from '@/data/logoData';

const LanguageModelsSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-2 pt-12 pb-40 text-center"
        >
            <div className="w-full max-w-5xl mx-auto">
                <h4 className="text-3xl font-bold mb-4 bg-gradient-to-t from-purple-400 to-white bg-clip-text text-transparent text-center">
                    Large language models
                </h4>
                <p className="text-purple-200 mb-8 text-center">
                    Access the latest models through the VectorShift platform
                </p>
                <div className="flex flex-wrap justify-center gap-x-8">
                    {languageModels.map((model, index) => (
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

export default LanguageModelsSection;