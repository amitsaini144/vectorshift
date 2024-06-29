import Link from 'next/link';
import Image from 'next/image';

export default function NavigationContainer() {
    return (
        <div className="hidden md:block">
            <nav className="flex items-center justify-between p-4 bg-[#your-background-color]">
                <Link href="/" className="flex items-center">
                    <div className="w-6 h-6 mr-2">
                        <Image
                            src="https://framerusercontent.com/images/PUVFaa9JKxr86MtwPIPVKLjAY.png"
                            alt="VectorShift Logo"
                            className="w-full h-full object-cover"
                            width={40}
                            height={40}
                        />
                    </div>
                    <span className="text-lg font-bold">VectorShift</span>
                </Link>
                <div className="flex items-center space-x-4">
                    <div className="relative group">
                        <button className="flex items-center text-[#your-text-color] hover:text-[#hover-color]">
                            <span className="font-bold">Platform</span>
                            <svg className="w-4 h-4 ml-1" />
                        </button>
                        {/* Add dropdown menu here if needed */}
                    </div>

                    <div className="relative group">
                        <button className="flex items-center text-[#your-text-color] hover:text-[#hover-color]">
                            <span className="font-bold">More</span>
                            <svg className="w-4 h-4 ml-1" />
                        </button>
                        {/* Add dropdown menu here if needed */}
                    </div>

                    <Link href="/enterprise" className="text-[#your-text-color] hover:text-[#hover-color] font-bold">
                        Enterprise
                    </Link>

                    <Link href="/pricing" className="text-[#your-text-color] hover:text-[#hover-color] font-bold">
                        Pricing
                    </Link>

                    <a href="https://app.vectorshift.ai" target="_blank" rel="noopener noreferrer" className="text-[#your-text-color] hover:text-[#hover-color] font-bold">
                        Log in
                    </a>
                    <Link href="https://app.vectorshift.ai/api/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#0767AB] to-[#2B075A] text-white font-bold hover:shadow-lg transition-shadow duration-300"
                    >
                        Get started</Link>

                </div>
            </nav>
        </div>
    );
}