// src/pages/projects/ProjectListItems.tsx
/* eslint-disable */
import React from "react";

// First, I'll import the useProjectsState custom hook to access projects state.
import { useUsersDispatch, useUsersState } from "../../context/members/context";
import { deleteUser } from "../../context/members/actions";
import { TrashIcon } from "@heroicons/react/20/solid";
export default function MemberListItems() {
  // I'll define a new constant called `state`, to call the useProjectsState() hook,
  // and get access to projects state.
  let state: any = useUsersState();
  const dispatch = useUsersDispatch();
  const handleDelete = async (userId: number) => {
    const response = await deleteUser(dispatch, userId);

    if (response.ok) {
      console.log("User deleted successfully!");
    } else {
      console.error("Error deleting user:", response.error);
    }
  };

  // Next, I'll destructure the state object to gain access to projects,
  // isLoading, isError and errorMessage property.
  const { users, isLoading, isError, errorMessage } = state;
  console.log(users);

  // If `isLoading` is true, and there are no projects, in that case,
  // I'll show a loading text
  if (users.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  // Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  // And finally I'll iterate over the projects object to show the
  // individual projects card.
  return (
    <>
      {users.map((user: any) => (
        <div
          key={user.id}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          {/* <button
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
            onClick={() => handleDelete(user.id)} // Assuming handleDelete is your delete function
            >
            <TrashIcon className="h-5 w-5" />
          </button> */}
          
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Name: {user.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Email: {user.email}
          </h5>
          <button
            onClick={() => handleDelete(user.id)}
            className="hover:text-red-500 text-gray-700 font-bold py-2 px-4 rounded mt-2"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      ))}
    </>
  );
}
