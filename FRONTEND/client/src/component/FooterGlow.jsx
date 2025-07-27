
import { motion } from "framer-motion";

export default function FooterLine() {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <motion.div
        className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: "80%",
          opacity: 1,
          boxShadow: [
            "0 0 5px #ec4899",
            "0 0 10px #a855f7",
            "0 0 5px #6366f1",
          ],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
