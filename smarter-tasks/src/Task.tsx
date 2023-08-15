import React from "react";
import './TaskCard.css'

/* eslint-disable */
interface TaskProp {
  title: string;
  todoDescription: string;
  todoDueDate: Date;
}
class Task extends React.Component<TaskProp> {

  render() {
    return (
      <div>
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-slate-500">
          Due Date:{this.props.todoDueDate.toLocaleDateString()}
        </p>
        <p className="text-sm text-slate-500">
          Description:{this.props.todoDescription} 
        </p>
      </div>
      </div>
    );
  }
}

export default Task;