/* eslint-disable */
import React from "react";

import { useUsersDispatch, useUsersState } from "../../context/members/context";
import { deleteUser } from "../../context/members/actions";
import { TrashIcon } from "@heroicons/react/20/solid";
export default function MemberListItems() {
  let state: any = useUsersState();
  const dispatch = useUsersDispatch(); 
  console.log(dispatch)
  const handleDelete = async (userId: number) => {
    const response = await deleteUser(dispatch, userId);

    if (response.ok) {
      console.log("User deleted successfully!");
    } else {
      console.error("Error deleting user:", response.error);
    }
  };

  const { users, isLoading, isError, errorMessage } = state;
  console.log("these are users" , users);

  if (users.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {users.map((user: any) => (
        <div
          key={user.id} // Add this line to provide a unique key
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Name: {user.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Email: {user.email}
          </h5>
          <button
            id="delete-btn"
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
