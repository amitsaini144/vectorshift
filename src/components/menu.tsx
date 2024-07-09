"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <motion.button
                whileHover={{ scale: 1.15 }}
                onClick={toggle}
                className="fixed bottom-8 right-8 z-50 p-4 rounded-full md:hidden transition-all duration-300 ease-out bg-gradient-to-b from-purple-900/90 to-purple-900/10 backdrop-blur-lg"
            >
                <div className="relative w-6 h-6">
                    <span
                        className={`absolute block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-2'
                            }`}
                    ></span>
                    <span
                        className={`absolute block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-2'
                            }`}
                    ></span>
                </div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 backdrop-blur-lg z-40 flex flex-col pl-5 pt-5 lg:hidden"
                        initial={{ opacity: 0, y: "100vh" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100vh" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col pb-3 w-40 text-white text-xl">
                            <Link href="/platform" className=" p-3 ">Platform</Link>
                            <Link href="/enterprise" className=" p-3 ">Enterprise</Link>
                            <Link href="/pricing" className=" p-3 ">Pricing</Link>
                            <Link href="/tutorials" className=" p-3 ">Tutorials</Link>
                            <Link href="/docs" className=" p-3 ">Docs</Link>
                            <Link href="/Blog" className="p-3 ">Blog</Link>
                            <Link href="/discord" className="p-3 ">Discord</Link>
                        </div>
                        <div className="flex flex-col pt-3 w-40 text-white text-xl">
                            <Link href="https://app.vectorshift.ai" className=" p-3 ">Log in</Link>
                            <Link href="https://app.vectorshift.ai/api/signup" className=" p-3 ">Get started</Link>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}