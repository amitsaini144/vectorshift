import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MdArrowOutward, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface CardProps {
    number: string;
    title: string;
    description: string;
}

const Card = ({ number, title, description }: CardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-[#1c074e]/60 to-[#1c074e]/60 flex flex-col w-full h-full rounded-2xl border border-[#430B8A] p-6"
        >
            <div className="flex flex-col text-sm text-start h-full">
                <div className="flex flex-col gap-4 mb-4">
                    <div className="bg-gradient-to-b from-black/70 to-[#1c074e] border rounded-lg w-8 h-8 flex items-center justify-center">
                        <span className="text-[#BC7DFF] font-semibold">{number}</span>
                    </div>
                    <h2 className="text-2xl font-semibold bg-gradient-to-t from-[#A17CFF] to-white bg-clip-text text-transparent">
                        {title}
                    </h2>
                </div>
                <p className="text-white flex-grow">{description}</p>
            </div>
        </motion.div>
    );
};

const HowItWorksCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards: CardProps[] = [
        {
            number: '1',
            title: 'Start with a template',
            description: 'Leverage dozens of pre-built templates for end use cases - ranging from research report generators to resume screeners.',
        },
        {
            number: '2',
            title: 'Connect data',
            description: 'Allow your AI application to leverage raw data in any format (websites, documents, or CSVs) or directly connect with your database.',
        },
        {
            number: '3',
            title: 'Intuitive drag and drop builder',
            description: 'Build and rapidly iterate on your application\'s architecture with a large library of drag and drop components. Transfer your work seamlessly between no-code and our python SDK.',
        },
        {
            number: '4',
            title: 'Customize and deploy to end users',
            description: 'Export a chatbot or generate an API endpoint instantly. Customize the look and feel of the application.',
        },
    ];

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out gap-8" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                {cards.map((card, index) => (
                    <div key={index} className="w-[290px] flex-shrink-0 h-[320px]">
                        <Card {...card} />
                    </div>
                ))}
            </div>
            <button onClick={prevCard} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 rounded-full text-white">
            <MdOutlineKeyboardArrowLeft />
            </button>
            <button onClick={nextCard} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 rounded-full text-white">
            <MdOutlineKeyboardArrowRight />
            </button>
        </div>
    );
};

export default HowItWorksCarousel;