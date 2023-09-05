/* eslint-disable */
// import React, { useState } from "react";
import React from "react";
// interface Props {}
interface TaskFormProps {
  addTask: (task: {
    title: string;
    description: string;
    dueDate: string;
    id: string;
  }) => void;
  //   // remove the task
  //   title: string;
  //   description: string;
  //   dueDate: string;
  // }) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
  id: string;
}
// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//   constructor(props: TaskFormProps) {
//     super(props);
//     this.state = {
//       title: "",
//       todoDescription: "",
//       todoDueDate: new Date(),
//       showError: false,
//     };
//   }

//   // inputRef = React.createRef<HTMLInputElement>();

//   titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.value}`);
//     this.setState({ title: event.target.value });
//   };
//   descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.value}`);
//     this.setState({ todoDescription: event.target.value });
//   };
//   dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     const newDateValue = event.target.value;
//     if (newDateValue === "") {
//       // handle empty date b/c the page will crash. That is b/c the date is not a valid date.
//       this.setState({ todoDueDate: new Date(), showError: false });
//     } else {
//       this.setState({
//         todoDueDate: new Date(newDateValue),
//         showError: false,
//       });
//     }
//   };
//   addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     if (
//       this.state.title.trim() === "" ||
//       this.state.todoDueDate.toLocaleDateString().trim() === "" ||
//       this.state.todoDescription.trim() === ""
//     ) {
//       this.setState({ showError: true });
//     } else {
//       const newTask = {
//         title: this.state.title,
//         todoDescription: this.state.todoDescription,
//         todoDueDate: this.state.todoDueDate,
//       };
//       this.props.addTask(newTask);
//       this.setState({
//         title: "",
//         todoDescription: "",
//         todoDueDate: new Date(),
//         showError: false,
//       });
//     }
//   };
//   render() {
//     return (
//       <form onSubmit={this.addTask} className="space-y-4">
//         <div>
//           <label
//             htmlFor="todoTitle"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Title:
//           </label>
//           <input
//             type="text"
//             id="todoTitle"
//             value={this.state.title}
//             onChange={this.titleChanged}
//             className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
//               this.state.showError ? "border-red-500" : ""
//             }`}
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="todoDescription"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Description:
//           </label>
//           <input
//             type="text"
//             id="todoDescription"
//             value={this.state.todoDescription}
//             onChange={this.descriptionChanged}
//             className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
//               this.state.showError ? "border-red-500" : ""
//             }`}
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="todoDueDate"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Due Date:
//           </label>
//           <input
//             type="date"
//             id="todoDueDate"
//             value={this.state.todoDueDate.toISOString().split("T")[0]}
//             onChange={this.dueDateChanged}
//             className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
//               this.state.showError ? "border-red-500" : ""
//             }`}
//           />
//           {this.state.showError ? (
//             <p className="text-red-500 mt-1">Please fill all the forms.</p>
//           ) : (
//             ""
//           )}
//         </div>
//         <button
//           id="addTaskButton"
//           type="submit"
//           className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Add Item
//         </button>
//       </form>
//     );
//   }
// }



// const [title, setTitle] = React.useState("");
// const [description, setDescription] = React.useState("");
// const [dueDate, setDueDate] = React.useState("");

const TaskForm = (props: TaskFormProps) => { 

  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
    id: "",
  });

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  };
  
  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
  };
  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }
    formState.id = Math.floor(Math.random() * 1000).toString();
    
    console.log(formState);
    props.addTask(formState);
    setFormState({ title: "", description: "", dueDate: "" , id: ""});
  };
  return (
    <form onSubmit={addTask}>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoTitle"
            name="todoTitle"
            type="text"
            value={formState.title}
            onChange={titleChanged}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="todoTitle"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Todo Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDescription"
            name="todoDescription"
            type="text"
            value={formState.description}
            onChange={descriptionChanged}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label
            htmlFor="todoDescription"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDueDate"
            name="todoDueDate"
            type="date"
            value={formState.dueDate}
            onChange={dueDateChanged}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="todoDueDate"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Due Date
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            id="addTaskButton"
          >
            Add item
          </button>
        </div>
      </div>
    </form>
  );
};
export default TaskForm;
