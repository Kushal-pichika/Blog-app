import { useParams } from "react-router-dom"
import { posts } from "../data/dummyPosts"

export default function BlogDetail() {
  const { id } = useParams()
  const post = posts.find(p => p.id === id)

  if (!post) return <h2 className="text-red-500">Post not found!</h2>

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600">{post.title}</h1>
      <p className="mt-6 text-gray-700 text-lg">{post.content}</p>
    </div>
  )
}
