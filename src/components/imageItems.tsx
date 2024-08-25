import Image from "next/image";
import { ImageProps } from "@/types";

export default function ImageItem({ name, logoSrc, width, height }: ImageProps) {
    return (
        <div className="flex flex-col items-center justify-center w-40 h-40 ">
            <div className="h-20 flex items-center justify-center">
                <Image
                    src={logoSrc}
                    alt={name}
                    width={width}
                    height={height}
                    style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                />
            </div>
            <p className="text-white font-semibold">{name}</p>
        </div>
    );
};