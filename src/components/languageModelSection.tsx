import React from 'react';
import { motion, useInView } from 'framer-motion';
import ImageItem from "@/components/imageItems";

interface ModelInfo {
    name: string;
    logoSrc: string;
}

const models: ModelInfo[] = [
    { name: 'OpenAI', logoSrc: '/images/openai.png' },
    { name: 'Anthropic', logoSrc: '/images/anthropic.png' },
    { name: 'Huggingface', logoSrc: '/images/huggingface.png' },
    { name: 'Google', logoSrc: '/images/google600.png' },
    { name: 'LLAMA', logoSrc: '/images/llama.png' },
    { name: 'AWS', logoSrc: '/images/aws.png' },
    { name: 'Mistral AI_', logoSrc: '/images/mistralAI.png' },
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
            className="w-full max-w-6xl mx-auto px-2 py-12 text-center"
        >
            <h4 className="text-4xl font-bold mb-4 bg-gradient-to-t from-purple-400 to-white bg-clip-text text-transparent">
                Large language models
            </h4>
            <p className="text-purple-200 mb-8">
                Access the latest models through the VectorShift platform
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-9">
                <ImageItem
                    name={models[0].name}
                    logoSrc={models[0].logoSrc}
                    width={70}
                    height={70}
                />
                <ImageItem
                    name={models[1].name}
                    logoSrc={models[1].logoSrc}
                    width={200}
                    height={130}
                />
                <ImageItem
                    name={models[2].name}
                    logoSrc={models[2].logoSrc}
                    width={60}
                    height={60}
                />
                <ImageItem
                    name={models[3].name}
                    logoSrc={models[3].logoSrc}
                    width={60}
                    height={60}
                />
                <ImageItem
                    name={models[4].name}
                    logoSrc={models[4].logoSrc}
                    width={200}
                    height={200}
                />
                <ImageItem
                    name={models[5].name}
                    logoSrc={models[5].logoSrc}
                    width={200}
                    height={130}
                />
                <ImageItem
                    name={models[6].name}
                    logoSrc={models[6].logoSrc}
                    width={200}
                    height={150}
                />
            </div>
        </motion.div>
    );
};

export default LanguageModelsSection;