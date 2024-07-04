import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface ModelInfo {
    name: string;
    logoSrc: string;
}

const models: ModelInfo[] = [
    { name: 'OpenAI', logoSrc: 'https://framerusercontent.com/images/yXf3VfRuuJcpqjvNWJUtBc18my4.png' },
    { name: 'Anthropic', logoSrc: 'https://framerusercontent.com/images/KHttVhY2Wy8PehIUbpr9hS1ffI.png' },
    { name: 'Huggingface', logoSrc: 'https://framerusercontent.com/images/uJwqWeF96S9Emq2MfL2lU2IsQ.png' },
    { name: 'Google', logoSrc: '/images/google600.png' },
    { name: 'LLAMA', logoSrc: 'https://framerusercontent.com/images/sigy8Oc31P8JsdBKVa16b36Qg.png' },
    { name: 'AWS', logoSrc: 'https://framerusercontent.com/images/AxaxeiavvLhhOxcpQafd6HXvTA.png?scale-down-to=512' },
    { name: 'Mistral AI_', logoSrc: 'https://framerusercontent.com/images/L1OuHBbFcMcp2omODFBIZJSA8.png?scale-down-to=512' },
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
            className="w-full max-w-4xl mx-auto px-2 py-12 text-center"
        >
            <h4 className="text-4xl font-bold mb-4 bg-gradient-to-t from-purple-400 to-white bg-clip-text text-transparent">
                Large language models
            </h4>
            <p className="text-purple-200 mb-8">
                Access the latest models through the VectorShift platform
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {models.map((model, index) => (
                    <motion.div
                        key={model.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="h-16 mb-2 relative">
                            <Image
                                src={model.logoSrc}
                                alt={`${model.name} logo`}
                                objectFit="contain"
                                width={200}
                                height={100}
                            />
                        </div>
                        <h6 className="text-purple-200 text-sm">{model.name}</h6>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default LanguageModelsSection;