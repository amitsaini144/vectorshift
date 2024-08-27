import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { cards } from '@/data/howItWorksData';
import Card from '@/components/HowItWorks/card';

const HowItWorksCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="relative w-fit overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out gap-8" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                {cards.map((card, index) => (
                    <div key={index} className="flex-shrink-0 h-[320px] w-[290px]">
                        <Card {...card} />
                    </div>
                ))}
            </div>
            {currentIndex > 0 && (
                <button onClick={prevCard} className="absolute left-0 top-1/2 text-white z-10">
                    <MdOutlineKeyboardArrowLeft />
                </button>
            )}
            {currentIndex < cards.length - 1 && (
                <button onClick={nextCard} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white z-10">
                    <MdOutlineKeyboardArrowRight />
                </button>
            )}
        </div>

    );
};

export default HowItWorksCarousel;