/* eslint-disable */
import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Layout from "./Layout";
import Signin from "./pages/Signin"
import ProtectedRoute from "./ProtectedRoute";
import Notfound from "./pages/Notfound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/signin" replace />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "tasks",
          element: <TaskListPage />,
        },
        {
          path: "tasks/:id",
          element: <TaskDetailsPage />,
        },
      ],
    },
    // for other routes not defined above, redirect to NotFoundPage
    {
      path: "*",
      element: <Navigate to="/notfound" replace />,
    },
    {
      path: "/notfound",
      element: <Notfound />,
    },
  ]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App