"use client";

import {useTasksQuery, useDeleteTaskMutation, Task} from '@/services/api';
import { useState } from 'react';
import TaskForm from './TaskForm';

const TaskList = () => {
  const { data, error, isLoading } = useTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks.</p>;

  const tasks = data && data.map((task) => (
    <div key={task.taskId} className="border p-4 my-4 flex items-center justify-between">
      <p>{task.taskId}</p>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => setEditingTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.taskId)}>Delete</button>
    </div>
  ));

  if (!tasks) return <p>Could not load tasks.</p>;

  return (
    <div>
      {tasks.length > 0 ? tasks : <p>No tasks found.</p>}
      {editingTask && <TaskForm task={editingTask} onClose={() => setEditingTask(null)} />}
    </div>
  );
};

export default TaskList;
