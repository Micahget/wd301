/* eslint-disable */
// import React from "react";
import Task from "./Task";
// import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  // to remove task
  removeTask: (task: TaskItem) => void;
}

interface TaskItem {
  title: string;
  description: string;
  dueDate: string;
}

// interface State {
//   tasks: TaskItem[];
// }
// class TaskList extends React.Component<Props, State> {
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task
//         key={idx}
//         title={task.title}
//         description={task.description}
//         dueDate={task.dueDate}
//       />
//     ));
//   }
// }

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <div key={idx}>
      <Task
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
      <button
        className="deleteTaskButton border border-white hover:border-red-600 hover:text-red-500 px-2 py-1"
        onClick={() => removeTask(task)}
        id=""
      >
        Remove
      </button>
    </div>
  ));

  const removeTask = (task: TaskItem) => {
    props.removeTask(task);
  };

  return <div>{list}</div>;
};

export default TaskList;
