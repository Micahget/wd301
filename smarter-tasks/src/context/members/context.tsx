// src/context/projects/context.tsx
/* eslint-disable */


// First, I'll import the createContext, useContext and useReducer from React

import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, UsersState, UsersActions } from "./reducer";


// Next, using createContext function, we will create a context for
// `Projects State` object. The shape of this new context object is 
// ProjectsState and here I've set the default value to undefined.

const UsersStateContext = createContext<UsersState | undefined>(undefined);

type UsersDispatch = React.Dispatch<UsersActions>;

// Using createContext function, we will create a context 
// called `ProjectsDispatchContext`. Let's say the shape of this new 
// context object is ProjectsDispatch (which I'll define now, wait for it).
// I've set the default value to undefined.

const UsersDispatchContext = createContext<UsersDispatch | undefined>(undefined);
export const UsersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Next, I'll pass the `dispatch` object as value of this UsersDispatchContext.

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};

// src/context/Users/context.tsx
export const useUsersState = () => useContext(UsersStateContext);

// This line defines a custom hook `useUsersState`, that uses the `useContext` 
// hook to access the value stored in the `UsersStateContext`.
// The `UsersStateContext` is created using the createContext function 
// and is used to store the current `state` of the Users. 
// By using the `useUsersState` hook in a component, 
// you can retrieve the current `state` of the Users without directly accessing 
// the context or passing down the state as a prop. This simplifies the code 
// and ensures that the state is always up to date.

export const useUsersDispatch = () => useContext(UsersDispatchContext);

// This line defines a custom hook `useUsersDispatch` that also uses the 
//`useContext` hook to access the value stored in the `UsersDispatchContext`. 

// The `ProjectsDispatchContext` is created using the createContext function and is 
// used to store the `dispatch` function for updating the state of the projects.
// By using the `useProjectsDispatch` hook in a component, you can retrieve the 
// `dispatch` function without directly accessing the context or passing it down 
// as a prop. This allows you to dispatch actions to update the state of projects
//  from anywhere within your component tree that is wrapped with 
// the`ProjectsProvider`.