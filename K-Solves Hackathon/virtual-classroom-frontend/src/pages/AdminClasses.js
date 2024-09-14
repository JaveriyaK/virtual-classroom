import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminClasses() {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState('');

  useEffect(() => {
    async function fetchClasses() {
      const response = await axios.get('http://localhost:5000/api/classes');
      setClasses(response.data);
    }
    fetchClasses();
  }, []);

  const handleAddClass = async () => {
    if (newClassName) {
      await axios.post('http://localhost:5000/api/classes', { name: newClassName });
      setNewClassName('');
      // Fetch classes again after adding
      const response = await axios.get('http://localhost:5000/api/classes');
      setClasses(response.data);
    }
  };

  return (
    <div>
      <h2>Manage Classes</h2>
      <input
        type="text"
        value={newClassName}
        onChange={(e) => setNewClassName(e.target.value)}
        placeholder="New class name"
      />
      <button onClick={handleAddClass}>Add Class</button>

      <ul>
        {classes.map((cls) => (
          <li key={cls._id}>{cls.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminClasses;
