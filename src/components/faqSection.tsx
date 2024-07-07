import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqItems = [
        { question: "Who can use VectorShift?" },
        { question: "Can I try VectorShift for free?" },
        { question: "Is there a monthly plan available?" },
        { question: "Can I use my own LLM API key?" },
        { question: "Is VectorShift secure?" },
        { question: "Where can I learn more about how to use VectorShift?" },
        { question: "Can VectorShift integrate with my data?" },
        { question: "Can VectorShift help built a solution for organization?" },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-full opacity-100 tabindex-0">
            <div className="flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                <h2 className="text-center text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-t from-purple-400 to-white bg-clip-text text-transparent">
                        FAQ
                    </span>
                </h2>
            </div>
            <div className="opacity-100">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className="w-full border-t border-purple-900 opacity-100 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center">
                                <div className="mr-4">
                                    {openIndex === index ? (
                                        <MinusIcon className="h-6 w-6 text-purple-300" />
                                    ) : (
                                        <PlusIcon className="h-6 w-6 text-purple-300" />
                                    )}
                                </div>
                                <h5 className="text-lg font-semibold text-purple-100">
                                    {item.question}
                                </h5>
                            </div>
                        </div>
                        {openIndex === index && (
                            <div className="px-4 pb-4 text-purple-200">
                                {/* Add answer content here */}
                                <p>Answer to the question goes here...</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const PlusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

const MinusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
);

export default FAQ;