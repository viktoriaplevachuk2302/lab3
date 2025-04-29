import { useState } from 'react'
import './CommentForm.css'

function CommentForm({ onAddComment }) {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    
    const newComment = {
      author: author || 'Анонім',
      text,
      date: new Date().toLocaleString(),
    }
    
    onAddComment(newComment)
    setText('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Ваше ім'я (необов'язково)"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Ваш коментар..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit" className="btn">
        Написати коментар
      </button>
    </form>
  )
}

export default CommentForm