import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

/* eslint-disable */
interface TaskProp {
  title: string;
  description: string;
  dueDate: string;
}
// class Task extends React.Component<TaskProp> {
//   render() {
//     return (
//       <div>
//         <div className="TaskItem shadow-md border border-slate-100">
//           <h2 className="text-base font-bold my-1">{this.props.title}</h2>
//           <p className="text-sm text-slate-500">
//             Due Date:{this.props.dueDate}
//           </p>
//           <p className="text-sm text-slate-500">
//             Description:{this.props.description}
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
    </div>
  );
};
export default Task;
