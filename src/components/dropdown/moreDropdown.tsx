import { motion } from "framer-motion";
import Link from "next/link";

export default function MoreDropdown() {
    return (
        <motion.div className="absolute top-7 right-0 -mr-20 w-fit bg-gradient-to-br from-slate-900 via-slate-900 to-violet-900 shadow-lg rounded-xl py-1 px-4 z-10 flex border"
            initial={{ opacity: 0, y: -10, }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, y: -10, }}
        >
            <div className="flex flex-col p-2 w-44">
                <Link href="/tutorials" className=" p-3 rounded-xl hover:bg-slate-800 ">Tutorials</Link>
                <Link href="/docs" className=" p-3  rounded-xl hover:bg-slate-800">Docs</Link>
                <Link href="/Blog" className="p-3  rounded-xl hover:bg-slate-800">Blogs</Link>
                <Link href="/automation" className="p-3  rounded-xl hover:bg-slate-800">Automation</Link>
                <Link href="/discord" className="p-3  rounded-xl hover:bg-slate-800">Discord</Link>
            </div>
        </motion.div>
    )
}