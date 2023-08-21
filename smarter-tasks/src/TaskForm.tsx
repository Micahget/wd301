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
  showError: Boolean;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      todoDescription: "",
      todoDueDate: new Date(),
      showError: false,
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
    const newDateValue = event.target.value;
    if (newDateValue === "") {
      // handle empty date b/c the page will crash. That is b/c the date is not a valid date.
      this.setState({ todoDueDate: new Date(), showError: false });
    } else {
      this.setState({
        todoDueDate: new Date(newDateValue),
        showError: false,
      });
    }
  };
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (
      this.state.title.trim() === "" ||
      this.state.todoDueDate.toLocaleDateString().trim() === "" ||
      this.state.todoDescription.trim() === ""
    ) {
      this.setState({ showError: true });
    } else {
      const newTask = {
        title: this.state.title,
        todoDescription: this.state.todoDescription,
        todoDueDate: this.state.todoDueDate,
      };
      this.props.addTask(newTask);
      this.setState({
        title: "",
        todoDescription: "",
        todoDueDate: new Date(),
        showError: false,
      });
    }
  };
  render() {
    return (
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
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              this.state.showError ? "border-red-500" : ""
            }`}
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
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              this.state.showError ? "border-red-500" : ""
            }`}
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
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              this.state.showError ? "border-red-500" : ""
            }`}
          />
          {this.state.showError ? (
            <p className="text-red-500 mt-1">Please fill all the forms.</p>
          ) : (
            ""
          )}
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
