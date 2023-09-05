import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps {
  item: TaskItem;
  removeTask: (task: TaskItem) => void;
}
const Task = (props: TaskProps) => {
  const { item, removeTask } = props;
  console.log(item)
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${item.id || ""}`}>
            <h2 className="text-base font-bold my-1">{item.title}</h2>
          </a>
          <p className="text-sm text-slate-500">{item.dueDate}</p>
          <p className="text-sm text-slate-500">
            Description: {item.description}
          </p>
        </div>
        <button className="deleteTaskButton cursor-pointer flex border-white hover:border-red-500 hover:text-red-500 items-center justify-center w-8 h-8 rounded-full"
          onClick={() => removeTask(item)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Task;