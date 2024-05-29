import TaskList from '@/app/tasks/TaskList';
import {CreateTask} from "@/app/tasks/createTask";

const Tasks = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <TaskList />
      <CreateTask />
    </div>
  );
};

export default Tasks;
