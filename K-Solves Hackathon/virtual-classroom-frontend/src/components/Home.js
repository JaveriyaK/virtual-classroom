import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function fetchClasses() {
      const response = await axios.get('http://localhost:5000/api/classes');
      setClasses(response.data);
    }
    fetchClasses();
  }, []);

  return (
    <div>
      <h2>Classes</h2>
      <ul>
        {classes.map(cls => (
          <li key={cls._id}>{cls.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
