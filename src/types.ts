export interface cardInfo {
    title: string;
    description: string;
    link: string;
}

export interface FAQData {
    question: string;
    answer: string | React.ReactNode;
}

export interface FAQItemProps {
    item: FAQData;
    isOpen: boolean;
    onToggle: () => void;
}

export interface CardProps {
    number: string;
    title: string;
    description: string;
}

export interface ImageProps {
    name: string;
    logoSrc: string;
    width: number;
    height: number;
}

export interface ModelInfo {
    name: string;
    logoSrc: string;
    width: number;
    height: number;
}