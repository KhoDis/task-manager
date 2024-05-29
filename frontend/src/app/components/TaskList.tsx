import {useTasksQuery, useDeleteTaskMutation, Task} from '../services/api';
import { useState } from 'react';
import TaskForm from './TaskForm';

const TaskList = () => {
  const { data, error, isLoading } = useTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks.</p>;

  return (
    <div>
      {data && data.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => setEditingTask(task)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
      {editingTask && <TaskForm task={editingTask} onClose={() => setEditingTask(null)} />}
    </div>
  );
};

export default TaskList;
