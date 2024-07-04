import { motion } from "framer-motion";

export default function Heading() {
    return (
        <motion.div className="text-center text-3xl md:text-4xl lg:text-5xl  font-semibold pb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            An ecosystem to build, deploy <br /> and manage AI application
        </motion.div>
    )
}