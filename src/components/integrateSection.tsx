import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import ImageItem from "@/components/imageItems";

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
                <ImageItem
                    name={models[0].name}
                    logoSrc={models[0].logoSrc}
                    width={90}
                    height={90}
                />
                <ImageItem
                    name={models[1].name}
                    logoSrc={models[1].logoSrc}
                    width={90}
                    height={90}
                />
                <ImageItem
                    name={models[2].name}
                    logoSrc={models[2].logoSrc}
                    width={70}
                    height={70}
                />
                <ImageItem
                    name={models[3].name}
                    logoSrc={models[3].logoSrc}
                    width={85}
                    height={85}
                />
                <ImageItem
                    name={models[4].name}
                    logoSrc={models[4].logoSrc}
                    width={65}
                    height={65}
                />
                <ImageItem
                    name={models[5].name}
                    logoSrc={models[5].logoSrc}
                    width={110}
                    height={110}
                />
            </div>
        </motion.div>
    );
};

export default IntegrateSection;