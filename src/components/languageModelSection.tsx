import React from 'react';
import { motion, useInView } from 'framer-motion';
import ImageItem from "@/components/imageItems";
import { ModelInfo } from '@/types';

const models: ModelInfo[] = [
    { name: 'OpenAI', logoSrc: '/images/openai.png', width: 70, height: 100 },
    { name: 'Anthropic', logoSrc: '/images/anthropic.png', width: 150, height: 100 },
    { name: 'Huggingface', logoSrc: '/images/huggingface.png', width: 65, height: 100 },
    { name: 'Google', logoSrc: '/images/google600.png', width: 60, height: 100 },
    { name: 'LLAMA', logoSrc: '/images/llama.png', width: 180, height: 100 },
    { name: 'AWS', logoSrc: '/images/aws.png', width: 170, height: 100 },
    { name: 'Mistral AI_', logoSrc: '/images/mistralAI.png', width: 170, height: 100 },
];

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
                    {models.map((model, index) => (
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