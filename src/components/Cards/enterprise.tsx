"use client";

import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";


const EnterpriseSolutions = () => {
    return (
        <Link href='/'>
            <div className='rounded-2xl p-10 bg-gradient-to-b from-[#84bef5] via-[#8e38fb] to-[#3f1281] border border-[#430B8A] text-white w-80'>
                <div className='flex flex-col justify-between h-96'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-3xl md:text-4xl md:font-semibold'>Enterprise solutions</h2>
                        <p className='text-sm md:text-lg leading-8 tracking-wider md:tracking-normal'>We leverage our secure infrastructure and development platform to build and deploy high-ROI AI solutions for your organizations.</p>
                    </div>
                    <div className='flex gap-1'>
                        <span>Learn more</span>
                        <MdKeyboardArrowRight className='text-white text-2xl' />
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default EnterpriseSolutions;
