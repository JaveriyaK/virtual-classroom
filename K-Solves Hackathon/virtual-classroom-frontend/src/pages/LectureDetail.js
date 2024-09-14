import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function LectureDetail() {
  const { id } = useParams(); // Lecture ID from URL
  const [lecture, setLecture] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    async function fetchLecture() {
      const response = await axios.get(`http://localhost:5000/api/lectures/${id}`);
      setLecture(response.data);
      setComments(response.data.comments);
    }
    fetchLecture();
  }, [id]);

  const handleAddComment = async () => {
    if (newComment) {
      const response = await axios.post('http://localhost:5000/api/discussions', {
        content: newComment,
        lectureId: id
      });
      setNewComment('');
      setComments([...comments, response.data]);
    }
  };

  if (!lecture) return <p>Loading...</p>;

  return (
    <div>
      <h2>{lecture.title}</h2>
      <p>{lecture.content}</p>

      <h3>Discussions</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>{comment.content}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}

export default LectureDetail;
