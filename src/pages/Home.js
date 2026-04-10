import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from '../api/client';

// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = '23WH1A0521';
const LAB_ID = 'FSDLAB2';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await get('/api/tasks'); 
        setTasks(Array .isArray(data) ? data : []);
        setLoading(false);
      }
      catch (err) {
        setError('Failed to fetch tasks');
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      {/* TODO: Replace this placeholder with your question set UI */}
      {error ? <p>{error}</p> : null}
      {loading ? <p>Loading tasks...</p> : null}
      {!loading && tasks.length === 0 ? <p>No tasks available.</p> : null}
        <ul>    
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}    
              <Link to={`/tasks/${task.id}`}>View Details</Link>
            </li>
          ))}
        </ul>

    </div>
  );
}

export default Home;
