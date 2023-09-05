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
  id: string;
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
  const removeTask = (task: TaskItem) => {
    props.removeTask(task);
  };
  // removeTask = {removeTask}
  const list = props.tasks.map((task, idx) => (
    <div key={idx}>
      <Task
        item = {task}
        removeTask = {removeTask}
              />
    </div>
  ));


  return <div>{list}</div>;
};

export default TaskList;
