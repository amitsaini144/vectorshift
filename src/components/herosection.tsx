import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="text-white py-20 font-sans z-1">
            <div className="text-center">
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
                    <div>
                        <Link href="https://app.vectorshift.ai/api/signup" target="_blank" rel="noopener"
                            className="inline-block bg-gradient-to-r from-blue-500 to-purple-700 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 w-2/3 md:w-fit"
                        >
                            Get started
                        </Link>
                    </div>
                    <div>
                        <Link href="https://calendly.com/albert_mao/vectorshift-intro-chat" target="_blank" rel="noopener"
                            className="inline-block bg-transparent px-8 py-3 rounded-full text-white font-semibold hover:text-purple-400 transition duration-300"
                        >
                            Book a demo
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
}