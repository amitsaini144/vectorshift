import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className=" text-white py-20 font-sans z-1">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
                        <div className='flex flex-col gap-3'>
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-300">The No-Code</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400 ">AI automations platform</span>
                        </div>
                    </h1>
                    <p className="text-blue-100 md:text-xl mb-12 max-w-3xl mx-auto font-medium z-1">
                        An integrated framework of no-code, low-code, and out of the box generative AI solutions to build AI search engines, assistants, chatbots, and automations.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="https://app.vectorshift.ai/api/signup" target="_blank" rel="noopener"
                                className="inline-block bg-gradient-to-r from-blue-500 to-purple-700 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 w-2/3 md:w-fit"
                            >
                                Get started
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="https://calendly.com/albert_mao/vectorshift-intro-chat" target="_blank" rel="noopener"
                                className="inline-block bg-transparent px-8 py-3 rounded-full text-white font-semibold hover:text-purple-400 transition duration-300"
                            >
                                Talk to us
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}