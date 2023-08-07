/* eslint-disable */
import React from "react";
interface Props {}
interface TaskFormProps {
  
}
interface TaskFormState {
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
  }
  render(){
    return (
      <form>
        <input type="text" />
        <button type="submit">Add Task</button>
      </form>
    )
  }
}
 export default TaskForm;