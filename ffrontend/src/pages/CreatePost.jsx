import React from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api/client'

const CreatePost = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    try {
      const res = await api.post('/create-post', formData)
      navigate('/feed')
      console.log(res)
      alert('Post created successfully')
      e.target.reset()
    } catch (err) {
      console.error(err)
      alert(
        'Could not reach the API. Start the backend on port 3000 (`npm start` in bbackend), then try again.'
      )
    }
  }
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        Create Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
      >
        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Image</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200"
          />
        </label>
        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Caption</span>
          <input
            type="text"
            name="caption"
            placeholder="Write a caption"
            required
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </label>
        <button
          type="submit"
          className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </section>
  )
   }
    

  

export default CreatePost;