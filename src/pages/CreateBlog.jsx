import { useState } from "react"

export default function CreateBlog() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Blog Created!\n\n${title}\n${content}`)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring focus:ring-purple-300"
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full p-3 border rounded-lg focus:ring focus:ring-purple-300"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Publish
        </button>
      </form>
    </div>
  )
}
