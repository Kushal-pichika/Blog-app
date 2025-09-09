import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-purple-600"
      >
        Welcome to My Blog !!
      </motion.h1>
      <p className="mt-6 text-lg text-gray-700">
        Share your thoughts, read amazing stories, and connect with others.
      </p>
    </div>
  )
}
