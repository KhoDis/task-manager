import React, { useState } from "react";
import {
  Task,
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from "@/services/api";

const TaskForm = ({
  task,
  onClose,
}: {
  task: Task | null;
  onClose: () => void;
}) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [completed, setCompleted] = useState(task ? task.completed : false);
  const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      console.log("Update task", task.taskId, title, description, completed);
      await updateTask({ id: task.taskId, title, description, completed });
    } else {
      console.log("Create task", title, description);
      await createTask({ title, description });
    }
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-4 my-4 space-y-4 border-gray-200 rounded shadow flex flex-col items-center justify-center max-w-xs mx-auto"
    >
      <h1 className="text-lg font-bold">
        {task ? "Edit Task" : "Create Task"}
      </h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-200 rounded"
      />
      {/*Long adjustable text box*/}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border border-gray-200 rounded"
      />
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mr-2"
        />
        Completed
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {task ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default TaskForm;
