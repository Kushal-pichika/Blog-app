import BlogCard from "../components/BlogCard"
import { posts } from "../data/dummyPosts"

export default function BlogList() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
