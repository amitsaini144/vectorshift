import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import drive from "../../public/images/googleDrive.png";

interface ModelInfo {
    name: string;
    logoSrc: string;
}

const models: ModelInfo[] = [
    { name: 'Google Drive', logoSrc: '/images/googleDrive.png' },
    { name: 'OneDrive', logoSrc: '/images/oneDrive.png' },
    { name: 'SalesForce', logoSrc: '/images/salesForce2.png' },
    { name: 'Hubspot', logoSrc: '/images/hubspot.png' },
    { name: 'Notion', logoSrc: '/images/notion.png' },
    { name: 'Airtable', logoSrc: '/images/airtable.png' },
];

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
            <h4 className="text-3xl font-bold mb-4 bg-gradient-to-t from-purple-400 to-white bg-clip-text text-transparent">
                Integrations and automations
            </h4>
            <p className="text-purple-200 mb-8 text-sm">
                Live-sync, set up action based triggers (e.g., receive an email), and automate actions (e.g., send a slack message) across your tool stack
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-9">
                {models.map((model, index) => (
                    <motion.div
                        key={model.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="h-16 mb-4 relative">
                            <Image
                                src={model.logoSrc}
                                alt={`${model.name} logo`}
                                objectFit="contain"
                                width={90}
                                height={100}
                            />
                        </div>
                        <h6 className="text-white font-semibold ">{model.name}</h6>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default IntegrateSection;