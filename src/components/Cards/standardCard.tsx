import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";
import { cardInfo } from '@/types';

export default function StandardCard({ title, description, link }: cardInfo) {
    return (
        <Link href={link}>
            <div className='rounded-2xl p-10 bg-gradient-to-b from-[#100923] via-[#10052b] to-[#130436] border border-[#430B8A] text-white w-80 h-full'>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-3xl lg:text-4xl lg:font-semibold'>{title}</h2>
                        <p className='text-sm lg:text-lg leading-8 tracking-wider lg:tracking-normal lg:mb-10'>{description}</p>
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
