import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import BlogList from "./pages/BlogList"
import BlogDetail from "./pages/BlogDetail"
import CreateBlog from "./pages/CreateBlog"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </div>
    </div>
  )
}
