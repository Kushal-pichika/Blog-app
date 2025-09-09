import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function BlogCard({ post }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-md p-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{post.content}</p>
      <Link to={`/blogs/${post.id}`} className="text-purple-600 mt-3 inline-block">
        Read More →
      </Link>
    </motion.div>
  )
}
