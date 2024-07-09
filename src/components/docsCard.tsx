import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion, useInView } from "framer-motion";

export default function DocsCard() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-gradient-to-b from-[#1c074e]/60 to-[#1c074e]/60 flex flex-col md:flex-row w-full rounded-2xl border border-[#430B8A] mb-20'
        >
            <div className='flex flex-col gap-5 items-start md:w-1/2 w-full p-10 pb-20'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-semibold'>
                        <span className='bg-gradient-to-t from-[#A17CFF] to-white bg-clip-text text-transparent'>VectorShift Docs</span>
                    </h1>
                    <p className='text-white'>Unlock advanced features and detailed guides in our extensive documentation.</p>
                </div>
                <button className='text-white bg-gradient-to-b from-black/70 to-[#1c074e] border rounded-2xl px-6 py-2 flex items-center gap-2'>
                    Browse documentation
                    <MdArrowOutward className='text-purple-400' />
                </button>
            </div>
            <div className='relative md:w-1/2 w-full overflow-hidden mt-10 mr-10'>
                <div className='absolute top-0 right-0 left-0 h-[200%] border-t-2 border-r-2 border-l-2 border-[#430B8A] rounded-t-2xl p-3'>
                    <div className='bg-purple-400 rounded-full px-2 inline-block'>
                        pipleline_setup.py
                    </div>
                    <div>
                        {/* Content here */}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
