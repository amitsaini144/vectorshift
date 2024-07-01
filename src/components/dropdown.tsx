import Link from "next/link";
import { motion } from "framer-motion";

export default function PlatformDropdown() {
    return (
        <motion.div className="absolute top-7 right-0 w-fit bg-gradient-to-br from-slate-900 via-slate-900 to-violet-900 shadow-lg rounded-xl py-2 px-4 z-10 flex border"
            initial={{ opacity: 0, y: -10, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex flex-col p-2 w-40">
                <Link href="/enterprise" className=" p-3 rounded-xl hover:bg-slate-800 ">Pipleline</Link>
                <Link href="/enterprise" className=" p-3  rounded-xl hover:bg-slate-800">Search</Link>
                <Link href="/enterprise" className="p-3  rounded-xl hover:bg-slate-800">Agents</Link>
                <Link href="/enterprise" className="p-3  rounded-xl hover:bg-slate-800">Automation</Link>
            </div>
            <div className="flex flex-col p-2 w-40">
                <Link href="/enterprise" className="p-3  rounded-xl hover:bg-slate-800">Marketplace</Link>
                <Link href="/enterprise" className="p-3 rounded-xl  hover:bg-slate-800">Chat</Link>
                <Link href="/enterprise" className="p-3  rounded-xl hover:bg-slate-800">Evaluations</Link>
            </div>
        </motion.div>
    );
}

export function MoreDropdown() {
    return (
        <motion.div className="absolute top-7 right-0 w-fit bg-gradient-to-br from-slate-900 via-slate-900 to-violet-900 shadow-lg rounded-xl py-1 px-4 z-10 flex border"
            initial={{ opacity: 0, y: -10,}}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex flex-col p-2 w-40">
                <Link href="/tutorials" className=" p-3 rounded-xl hover:bg-slate-800 ">Tutorials</Link>
                <Link href="/docs" className=" p-3  rounded-xl hover:bg-slate-800">Docs</Link>
                <Link href="/Blog" className="p-3  rounded-xl hover:bg-slate-800">Blogs</Link>
                <Link href="/automation" className="p-3  rounded-xl hover:bg-slate-800">Automation</Link>
                <Link href="/discord" className="p-3  rounded-xl hover:bg-slate-800">Discord</Link>
            </div>
        </motion.div>
    )
}