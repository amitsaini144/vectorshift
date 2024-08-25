import React, { useRef, useEffect } from 'react';
import { FAQData } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  item: FAQData;
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  return (
    <div className="w-full border-t max-w-3xl mx-auto border-[#430B8A] opacity-100 cursor-pointer py-8" onClick={onToggle}>
      <div className="flex items-start">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-300 mr-4 flex-shrink-0 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.line
            x1="12" y1="6" x2="12" y2="18"
            animate={{
              y2: isOpen ? 12 : 18,
              opacity: isOpen ? 0 : 1
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.line
            x1="6" y1="12" x2="18" y2="12"
            animate={{
              x1: isOpen ? 4 : 6,
              x2: isOpen ? 20 : 18
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.svg>
        <div className="flex-1">
          <h5 className="text-xl font-semibold text-[#E6DDFD]">
            {item.question}
          </h5>
          <div
            ref={contentRef}
            className="overflow-hidden transition-[height] duration-300 ease-in-out"
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <div className="text-[#E6DDFD]">
                    {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};