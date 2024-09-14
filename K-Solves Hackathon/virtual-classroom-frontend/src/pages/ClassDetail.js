import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ClassDetail() {
  const { id } = useParams(); // Get class ID from URL
  const [classDetail, setClassDetail] = useState(null);

  useEffect(() => {
    async function fetchClassDetail() {
      const response = await axios.get(`http://localhost:5000/api/classes/${id}`);
      setClassDetail(response.data);
    }
    fetchClassDetail();
  }, [id]);

  if (!classDetail) return <p>Loading...</p>;

  return (
    <div>
      <h2>{classDetail.name}</h2>
      <h3>Units</h3>
      <ul>
        {classDetail.units.map((unit, index) => (
          <li key={index}>{unit}</li>
        ))}
      </ul>

      <h3>Sessions</h3>
      <ul>
        {classDetail.sessions.map((session) => (
          <li key={session._id}>{session.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClassDetail;
