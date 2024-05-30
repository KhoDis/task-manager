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
      <h2 className="text-lg font-bold">{task.title}</h2>
      <p className="text-sm">{task.description}</p>
      <p className="text-sm">{task.completed ? 'Completed' : 'Not completed'}</p>
      <div className="flex space-x-4">
        <button onClick={() => setEditingTask(task)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
        <button onClick={() => deleteTask(task.taskId)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
      </div>
    </div>
  ));

  if (!tasks) return <p>Could not load tasks.</p>;

  return (
    <div>
      {tasks.length > 0 ? tasks : <p>No tasks found.</p>}
      <TaskForm task={editingTask} onClose={() => setEditingTask(null)} />
    </div>
  );
};

export default TaskList;
