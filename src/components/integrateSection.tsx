import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import ImageItem from "@/components/imageItems";

interface ModelInfo {
    name: string;
    logoSrc: string;
    width: number;
    height: number;
}

const models: ModelInfo[] = [
    { name: 'Google Drive', logoSrc: '/images/googleDrive.png', width: 90, height: 90 },
    { name: 'OneDrive', logoSrc: '/images/oneDrive.png', width: 90, height: 90 },
    { name: 'SalesForce', logoSrc: '/images/salesForce2.png', width: 70, height: 70 },
    { name: 'Hubspot', logoSrc: '/images/hubspot.png', width: 85, height: 85 },
    { name: 'Notion', logoSrc: '/images/notion.png', width: 60, height: 60 },
    { name: 'Airtable', logoSrc: '/images/airtable.png', width: 110, height: 110 },
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
            <div>
                <h4 className="text-3xl font-bold mb-4 bg-gradient-to-t from-purple-400 to-white bg-clip-text text-transparent">
                    Integrations and automations
                </h4>
                <p className="text-purple-200 mb-8 text-sm">
                    Live-sync, set up action based triggers (e.g., receive an email), and automate actions (e.g., send a slack message) across your tool stack
                </p>
                <div className="sm:flex sm:flex-wrap justify-center sm:gap-x-8 grid grid-cols-3 gap-x-6">
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

export default IntegrateSection;