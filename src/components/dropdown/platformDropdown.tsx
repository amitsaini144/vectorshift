import Link from "next/link";
import { motion } from "framer-motion";

export default function PlatformDropdown() {
    return (
        <motion.div className="absolute top-7 -mr-40 right-0 w-fit bg-gradient-to-br from-slate-900 via-slate-900 to-violet-900 shadow-lg rounded-xl py-1 px-4 z-10 flex border"
            initial={{ opacity: 0, y: -10, }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, y: -10, }}
        >
            <div className="flex flex-col p-2 w-44">
                <Link href="/platform/pipeline" className=" p-3 rounded-xl hover:bg-slate-800 ">Pipleline</Link>
                <Link href="/platform/search" className=" p-3 rounded-xl hover:bg-slate-800">Search</Link>
                <Link href="/platform/agents" className="p-3 rounded-xl hover:bg-slate-800">Agents</Link>
                <Link href="/platform/automation" className="p-3 rounded-xl hover:bg-slate-800">Automation</Link>
            </div>
            <div className="flex flex-col p-2 w-44">
                <Link href="/platform/marketplace" className="p-3 rounded-xl hover:bg-slate-800">Marketplace</Link>
                <Link href="/platform/chat" className="p-3 rounded-xl hover:bg-slate-800">Chat</Link>
                <Link href="/platform/evaluations" className="p-3 rounded-xl hover:bg-slate-800">Evaluations</Link>
            </div>
        </motion.div>
    );
}
