import TaskList from '@/app/tasks/TaskList';

const Tasks = () => {
  return (
    <div className="container mx-auto p-4 text-center space-y-4 mt-8 bg-white rounded shadow border border-gray-200 border-solid">
      <h1 className="text-4xl font-bold">Task Manager</h1>
      <TaskList />
    </div>
  );
};

export default Tasks;
