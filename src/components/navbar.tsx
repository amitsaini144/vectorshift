import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PlatformDropdown, { MoreDropdown } from './dropdown';

export default function NavigationContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const togglePlatformDropdown = () => {
        setIsOpen(!isOpen);
        if (isOpen2) setIsOpen2(false);
    };

    const toggleMoreDropdown = () => {
        setIsOpen2(!isOpen2);
        if (isOpen) setIsOpen(false);
    };

    return (
        <div className=" text-white px-2 md:px-10 lg:px-20 pt-12">
            <nav className="flex items-center min-[810px]:justify-between justify-center  p-4">
                <Link href="/" className="flex items-center mr-10 ">
                    <div className="w-6 h-6 mr-2">
                        <Image
                            src="https://framerusercontent.com/images/PUVFaa9JKxr86MtwPIPVKLjAY.png"
                            alt="VectorShift Logo"
                            className="w-full h-full object-cover"
                            width={40}
                            height={40}
                        />
                    </div>
                    <span className='text-sm'>VectorShift</span>
                </Link>
                <div className='hidden min-[810px]:block'>
                    <div className="flex items-center space-x-4">
                        <div className="relative group">
                            <button className="flex items-center hover:text-purple-400 text-sm" onClick={togglePlatformDropdown}>
                                <span>Platform</span>
                                {isOpen ? <RiArrowDropUpLine className='text-2xl' /> : <RiArrowDropDownLine className='text-2xl' />}
                            </button>
                            <AnimatePresence>
                                {isOpen && <PlatformDropdown />}
                            </AnimatePresence>
                        </div>

                        <Link href="/enterprise" className="hover:text-purple-400 px-1 text-sm">
                            Enterprise
                        </Link>

                        <Link href="/pricing" className="hover:text-purple-400 px-1 text-sm">
                            Pricing
                        </Link>

                        <Link href="/tutorials" className="hidden xl:block hover:text-purple-400 px-1 text-sm">
                            Tutorials
                        </Link>

                        <Link href="/docs" className="hidden xl:block hover:text-purple-400 px-1 text-sm">
                            Docs
                        </Link>

                        <Link href="/blog" className="hidden xl:block hover:text-purple-400 px-1 text-sm">
                            Blog
                        </Link>

                        <Link href="/discord" className="hidden xl:block hover:text-purple-400 px-1 text-sm">
                            Discord
                        </Link>
                        <div className="relative group xl:hidden">
                            <button className="flex items-center hover:text-purple-400 text-sm" onClick={toggleMoreDropdown}>
                                <span >More</span>
                                {isOpen2 ? <RiArrowDropUpLine className='text-2xl' /> : <RiArrowDropDownLine className='text-2xl' />}
                            </button>
                            <AnimatePresence>
                                {isOpen2 && <MoreDropdown />}
                            </AnimatePresence>
                        </div>

                        <Link href="https://app.vectorshift.ai" target="_blank" rel="noopener noreferrer" className=" hover:text-purple-400 px-1 text-sm">
                            Log in
                        </Link>
                        <div>
                            <Link href="https://app.vectorshift.ai/api/signup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#7b70e0] to-[#2181f0] text-white font-bold"
                            >
                                Get started</Link>
                        </div>


                    </div>
                </div>
            </nav>
        </div>
    );
}