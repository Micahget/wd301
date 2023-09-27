interface User {
  id: number;
  name: string;
}
// Now, I'll rename the interface in the `ProjectList` component from `State`
// to `ProjectsState`. And I'll also export the interface. 

export interface UsersState {
  users: User[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
// Next, I'll comment the `Action` interface

// interface Action {
//   type: string;
//   payload?: any;
// }

// Then I'll define a new type called `ProjectsActions` 
// for all possible combimations of action objects.


export type UsersActions = 
| { type: 'FETCH_USERS_REQUEST' }
| { type: 'FETCH_USERS_SUCCESS'; payload: User[] }
| { type: 'FETCH_USERS_FAILURE'; payload: string }
| { type: 'ADD_USER_SUCCESS'; payload: User }


export const initialState: UsersState = {
  users: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};
export const reducer = (state: UsersState, action: UsersActions): UsersState => {
switch (action.type) {
  case "FETCH_USERS_REQUEST":
    return {
      ...state,
      isLoading: true
    };   
  case "ADD_USER_SUCCESS":
      return {...state, users: [...state.users, action.payload]}
  case "FETCH_USERS_SUCCESS":
    return {
      ...state,
      isLoading: false,
      users: action.payload,
    };      
  case "FETCH_USERS_FAILURE":
    return {
      ...state,
      isLoading: false,
      isError: true, 
      errorMessage: action.payload
    };           
  default:
    return state;
}
}