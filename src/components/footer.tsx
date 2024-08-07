import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-tl from-[#5500dc] via-[#000000] to-[#000000] text-purple-100 py-12 px-4 md:px-8 relative overflow-hidden pt-28">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-x-24 items-start mb-8 ">
                    <div className="flex flex-col space-y-6 mb-5">
                        <Link href="https://docs.vectorshift.ai/vectorshift/" className="hover:text-purple-400 transition-colors">
                            Docs
                        </Link>
                        <Link href="/tutorials" className="hover:text-purple-400 transition-colors">
                            Tutorials
                        </Link>
                        <Link href="https://discord.gg/zh8r7HxerT" className="hover:text-purple-400 transition-colors">
                            Discord
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <Link href="/blog" className="hover:text-purple-400 transition-colors">
                            Blog
                        </Link>
                        <Link href="/terms-conditions" className="hover:text-purple-400 transition-colors">
                            Terms and conditions
                        </Link>
                        <Link href="/data-and-privacy" className="hover:text-purple-400 transition-colors">
                            Privacy policy
                        </Link>
                        <Link href="https://calendly.com/albert_mao/vectorshift-intro-chat" className="hover:text-purple-400 transition-colors">
                            Contact us
                        </Link>
                    </div>
                </div>
                <div className="text-sm mt-8">
                    © 2023 VectorShift, Inc. All Rights Reserved.
                </div>
            </div>

            <div className="mt-12 flex justify-center">
                <svg className="w-96 h-auto" viewBox="0 0 965 144" fill="currentColor">
                    {/* Replace with actual SVG path data for the VectorShift logo */}
                    <path d="M0 0h965v144H0z" fillOpacity="0" />
                    <text x="600" y="72" fontSize="140" textAnchor="middle" dominantBaseline="middle">VectorShift</text>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;