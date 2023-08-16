/* eslint-disable */
import React from "react";
// interface Props {}
interface TaskFormProps {
  addTask: (task: {
    title: string;
    todoDescription: string;
    todoDueDate: Date;
  }) => void;
}
interface TaskFormState {
  title: string;
  todoDescription: string;
  todoDueDate: Date;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      todoDescription: "",
      todoDueDate: new Date(),
    };
  }

  // inputRef = React.createRef<HTMLInputElement>();

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoDescription: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoDueDate: new Date(event.target.value) });
  };
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      todoDescription: this.state.todoDescription,
      todoDueDate: this.state.todoDueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", todoDescription: "", todoDueDate: new Date(0) });
  };
  render() {
    return (
      // <form onSubmit={this.addTask}>
      //   <input type="text" value={this.state.title} onChange={this.titleChanged}/>
      //   <input type="text" value={this.state.todoDescription} onChange={this.titleChanged}/>
      //   <input type="date" value={this.state.todoDueDate.toISOString().split('T')[0]}  onChange={this.titleChanged}/>
      //   <button type="submit">Add item</button>
      // </form>
      <form onSubmit={this.addTask} className="space-y-4">
        <div>
          <label
            htmlFor="todoTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="todoTitle"
            value={this.state.title}
            onChange={this.titleChanged}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="todoDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <input
            type="text"
            id="todoDescription"
            value={this.state.todoDescription}
            onChange={this.descriptionChanged}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="todoDueDate"
            className="block text-sm font-medium text-gray-700"
          >
            Due Date:
          </label>
          <input
            type="date"
            id="todoDueDate"
            value={this.state.todoDueDate.toISOString().split("T")[0]}
            onChange={this.dueDateChanged}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          id="addTaskButton"
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Item
        </button>
      </form>
    );
  }
}
export default TaskForm;
