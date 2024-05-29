import React, { useState } from 'react';
import {Task, useCreateTaskMutation, useUpdateTaskMutation} from '@/services/api';

const TaskForm = ({ task, onClose }: { task: Task | null; onClose: () => void }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [completed, setCompleted] = useState(task ? task.completed : false);
  const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      await updateTask({ id: task.id, title, description, completed });
    } else {
      await createTask({ title, description });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{task ? 'Edit Task' : 'Create Task'}</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed
      </label>
      <button type="submit">{task ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default TaskForm;
