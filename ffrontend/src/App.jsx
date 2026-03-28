import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <header className="border-b border-slate-200 bg-white shadow-sm">
          <nav className="mx-auto flex max-w-3xl gap-6 px-4 py-3 text-sm font-medium">
            <Link
              to="/feed"
              className="text-slate-600 transition-colors hover:text-slate-900"
            >
              Feed
            </Link>
            <Link
              to="/create-post"
              className="text-slate-600 transition-colors hover:text-slate-900"
            >
              Create Post
            </Link>
          </nav>
        </header>
        <main className="mx-auto max-w-3xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App