import { FAQData } from '@/types';

export const faqData: FAQData[] = [
    {
        question: "Who can use VectorShift?",
        answer: "VectorShift is designed for teams looking to automate tasks with custom generative AI applications or to incorporate generative AI into their products. We work with companies ranging from fortune 500 companies to startups – and hopefully you too!"
    },
    {
        question: "Can I try VectorShift for free?",
        answer: (
            <>
                Yes – <a
                    href="https://app.vectorshift.ai/api/signup"
                    rel="noopener"
                    className="text-purple-400 hover:text-purple-300"
                >
                    please click here to get started.
                </a> Our free version gives you access to our AI application builder and 50 runs per month.
            </>
        )
    },
    {
        question: "Is there a monthly plan available?",
        answer: (
            <>
                Yes – <a
                    href="https://www.vectorshift.ai/pricing"
                    target="_blank"
                    rel="noopener"
                    className="text-purple-400 hover:text-purple-300"
                >
                    please view our pricing plans here.
                </a> We offer both monthly subscriptions (can be canceled anytime) or annual subscriptions (20% discount).
            </>
        )
    },
    {
        question: "Can I use my own LLM API key?",
        answer: "Yes – you can provide your own LLM API key directly in our application builder (when you utilize a LLM component)."
    },
    {
        question: "Is VectorShift secure?",
        answer: "We take data security seriously and built our platform with security in mind. User data is end-to-end encrypted and uploaded files are securely store in encrypted S3 buckets. We have “zero data retention” agreements with our model providers (Open AI) to ensure that data is not stored or used for training purposes."
    },
    {
        question: "Where can I learn more about how to use VectorShift?",
        answer: (
            <>
                Visit our <a
                    href="https://docs.vectorshift.ai/vectorshift/"
                    target="_blank"
                    rel="noopener"
                    className="text-purple-400 hover:text-purple-300"
                >
                    knowledge base
                </a>, join our <a
                    href="https://discord.com/invite/QcwZwMQj6G"
                    target="_blank"
                    rel="noopener"
                    className="text-purple-400 hover:text-purple-300"
                >
                    discord
                </a>, watch our tutorials, or <a
                    href="https://calendly.com/albert_mao/30min"
                    target="_blank"
                    rel="noopener"
                    className="text-purple-400 hover:text-purple-300"
                >
                    book a demo
                </a>!
            </>
        )
    },
    {
        question: "Can VectorShift integrate with my data?",
        answer: (
            <>
                Most likely, yes! VectorShift integrates with many common data sources such as Notion, Airtable, Google drive, and Onedrive. Can&apos;t find an integration you need? <a
                    href="mailto:sales@vectorshift.ai"
                    target="_blank"
                    rel="noopener"
                    className="text-purple-400 hover:text-purple-300"
                >
                    Contact us here.
                </a>
            </>
        )
    },
    {
        question: "Can VectorShift help build a solution for my organization?",
        answer: "Yes – we have developed and implemented turn-key AI applications for companies ranging from fortune 500 to startups. Contact our sales team here for more information."
    },
];