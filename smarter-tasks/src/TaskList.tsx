/* eslint-disable */
import React from "react";
import Task from "./Task";
import {TaskItem} from "./types";

interface Props {
  tasks: TaskItem[];
}

// interface TaskItem {
//   title: string;
// }

interface State {
  tasks: TaskItem[];
}
class TaskList extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     // this.state = { // this is one way to initialize state. Another way is to use a component lifecycle method
//     //     tasks: [{title: "Go to Library"}, {title: "Go to Gym"}]
//     // }
//     this.state = {
//       tasks: [], // this is the initial state. and for componentDidoMount to work, we need to initialize it to an empty array
//     };
//   }
  // componentDidMount() { // this is a component lifecycle method way of initializing state
  //     this.setState({
  //       tasks: [{ title: "Pay rent" }, { title: "Submit assignment" }]
  //     })
  //   }
  //   componentDidMount() { // if we want to update state based on previous state, we need to use a function in setState
  //     const tasks = [{ title: "Pay rent" }, { title: "Submit assignment" }];
  //     this.setState((state, props) => ({
  //       tasks,
  //     }));
  //   }
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task key={idx} title={task.title} todoDescription={task.todoDescription} todoDueDate={task.todoDueDate} />
    ));
  }
}
export default TaskList;
