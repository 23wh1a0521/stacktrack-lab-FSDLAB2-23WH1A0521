import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { del, get } from '../../api/client';
// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
   const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // TODO: Implement data fetching inside a useEffect hook
  useEffect(() => {
    async function fetchTasks() {
      try { 
        const data = await get('/api/tasks');
        setTasks(data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch tasks');
        setIsLoading(false);
      }
    }
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await del(`/api/tasks/${id}`);        
      setMessage('Task deleted successfully');
      navigate('/tasks'); 
      const data = await get('/api/tasks');
      setTasks(data);
    } catch (err) {
      setError('Failed to delete task');
    } 
  };


  // TODO: Implement any event handlers required by your question set
  

  return (
    <div>
      {/* TODO: Replace this placeholder with your question set UI */}
      
      {error ? <p>{error}</p> : null}
      {message ? <p>{message}</p> : null}

      {!isLoading && tasks.length === 0 ? <p>No tasks available.</p> : null}
        <ul>    
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}    
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>

      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );
}

export default QuestionComponent;
