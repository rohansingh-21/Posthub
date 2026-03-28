import React, { useState, useEffect } from 'react'
import { api } from '../api/client'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [loadError, setLoadError] = useState(null)

  useEffect(() => {
    setLoadError(null)
    api
      .get('/posts')
      .then((res) => setPosts(res.data.posts))
      .catch((err) => {
        console.error(err)
        setLoadError(
          'Could not load posts. Start the API on port 3000 (run `npm start` in the bbackend folder) and keep this dev server running.'
        )
      })
  }, [])

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        Feed
      </h1>
      {loadError && (
        <p className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {loadError}
        </p>
      )}
      {!loadError && posts.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <li
              key={post._id}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={post.image}
                alt=""
                className="h-48 w-full object-cover"
              />
              <p className="p-4 text-sm text-slate-700">{post.caption}</p>
            </li>
          ))}
        </ul>
      ) : !loadError ? (
        <p className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
          No posts yet.
        </p>
      ) : null}
    </section>
  )
}

export default Feed