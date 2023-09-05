import React from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TaskItem } from "../types";

interface TaskDetailsPageParams extends Record<string, string> {
  id: string;
}

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<TaskDetailsPageParams>();
  const [taskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });

  const task = taskAppState.tasks.find((task) => task.id === id);

  return (
    <div className="bg-blue-200 rounded-lg p-4 mx-auto w-72">
      <h3 className="text-lg font-medium text-gray-900 text-center">
        {task?.title}
      </h3>
      <p className="text-gray-600 text-center my-2">{task?.description}</p>
      <p className="text-gray-600 text-center">{task?.dueDate}</p>
    </div>
  );
};

export default TaskDetailsPage;
