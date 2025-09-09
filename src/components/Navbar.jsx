import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-purple-600">MyBlog</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-purple-500">Home</Link>
        <Link to="/blogs" className="hover:text-purple-500">Blogs</Link>
        <Link to="/create" className="hover:text-purple-500">Create</Link>
      </div>
    </nav>
  )
}
