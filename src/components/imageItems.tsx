import { motion } from "framer-motion";
import Image from "next/image";

interface ImageItem {
    name: string;
    logoSrc: string;
    width: number;
    height: number;
}

export default function ImageItem({ name, logoSrc, width, height }: ImageItem) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
        >
            <div className="h-20 relative flex items-center justify-center">
                <Image
                    src={logoSrc}
                    alt={`${name} logo`}
                    width={width}
                    height={height}
                />
            </div>
            <h6 className="text-white font-semibold">{name}</h6>
        </motion.div>
    );
};