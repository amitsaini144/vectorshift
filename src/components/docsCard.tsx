import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion, useInView } from "framer-motion";

const Keyword = ({ children }: { children: React.ReactNode }) => <span className="text-[#BC7DFF]">{children}</span>;
const Function = ({ children }: { children: React.ReactNode }) => <span className="text-[#569AD1]">{children}</span>;
const String = ({ children }: { children: React.ReactNode }) => <span className="text-[#81EDFB]">{children}</span>;
const Variable = ({ children }: { children: React.ReactNode }) => <span className="text-[#FFAB42]">{children}</span>;
const EqualSign = () => <span className="text-[#FF724C]">=</span>;

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
            <div className='flex flex-col gap-5 items-start w-full md:w-1/2 md:p-8 p-6 text-sm md:text-base'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-semibold'>
                        <span className='bg-gradient-to-t from-[#A17CFF] to-white bg-clip-text text-transparent'>VectorShift Docs</span>
                    </h1>
                    <p className='text-white'>Unlock advanced features and detailed guides in our extensive documentation.</p>
                </div>
                <button className='text-white bg-gradient-to-b from-black/70 to-[#1c074e] border rounded-2xl px-6 py-2 flex items-center justify-center gap-2 w-full md:w-fit'>
                    Browse documentation
                    <MdArrowOutward className='text-purple-400' />
                </button>
            </div>
            <div className='w-full md:w-1/2 md:pt-10 md:pr-10 px-6 md:pl-0 '>
                <div className='relative overflow-hidden rounded-t-2xl border-l-2 border-r-2 border-t-2 border-[#430B8A] p-4  h-[247px] bg-gradient-to-b from-black/70 to-[#1c074e] '>
                    <div className='bg-purple-400 rounded-full px-2 inline-block mb-2 text-sm'>
                        pipleline_setup.py
                    </div>
                    <div className='text-white '>
                        <p><Keyword>from</Keyword> vectorshift.node <Keyword>import</Keyword> *</p>
                        <p className='pb-4'><Keyword>from</Keyword> vectorshift.pipeline <Keyword>import</Keyword> *</p>
                        <p className='py-3'>file_node <EqualSign /> <Function>InputNode</Function>(<Variable>name</Variable> <EqualSign /> <String>&apos;file_input&apos;</String>, <Variable>input_type</Variable> <EqualSign /><String>&apos;file&apos;</String>)</p>
                        <p className='py-3'>model_text_node <EqualSign /> <Function>TextNode</Function>(<Variable>text</Variable> <EqualSign /><String>&apos;Describe this file to me.&apos;</String>)</p>
                        <p className='pt-4'>lim_node <EqualSign /> <Function>OpenAI_LLMNode</Function>(</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}