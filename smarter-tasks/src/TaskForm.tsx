/* eslint-disable */
import React from "react";
interface Props {}
interface TaskFormProps {}
interface TaskFormState {}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    
  }

  inputRef = React.createRef<HTMLInputElement>(); // we use the ref in uncontrolled components. Uncontrolled components are components that don't have a state. We use them when we don't need to keep track of the state of the compononet. But generally we use controlled components. Controlled components are components that have a state. We use them when we need to keep track of the stat. 

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with ${this.inputRef.current?.value}`);
  };
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input type="text" ref={this.inputRef}/>
        <button type="submit">Add item</button>
      </form>
    );
  }
}
export default TaskForm;
