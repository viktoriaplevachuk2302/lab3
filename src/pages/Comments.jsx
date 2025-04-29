import { useState } from 'react';
import CommentForm from '../components/CommentForm';
import '../App.css';

function Comments() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Іван',
      text: 'Дуже цікавий матеріал про Хрещення Русі!',
      date: '2023-05-15 14:30'
    },
    {
      id: 2,
      author: 'Олена',
      text: 'Хотілося б більше інформації про козацькі часи.',
      date: '2023-05-16 09:15'
    }
  ]);

  const handleAddComment = (newComment) => {
    setComments([...comments, {
      id: Date.now(),
      author: newComment.author,
      text: newComment.text,
      date: new Date().toLocaleString('uk-UA')
    }]);
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="container">
      <h1>Коментарі</h1>
      <p>Поділіться своїми думками про історичні події України</p>
      
      <div className="comment-section">
        <CommentForm onAddComment={handleAddComment} />
        
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map(comment => (
              <div key={comment.id} className="card comment">
                <div className="comment-header">
                  <span className="comment-author">{comment.author}</span>
                  <span className="comment-date">{comment.date}</span>
                  <button 
                    onClick={() => handleDeleteComment(comment.id)} 
                    className="btn btn-small btn-danger"
                  >
                    Видалити
                  </button>
                </div>
                <p className="comment-text">{comment.text}</p>
              </div>
            ))
          ) : (
            <p>Ще немає коментарів. Будьте першим!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comments;