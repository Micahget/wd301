/* eslint-disable */
import "./App.css";
// import Task from './Task'
// import TaskList from './TaskList'
// import TaskForm from './TaskForm';
import TaskApp from "./TaskApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tasks",
    element: <TaskListPage />,
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
