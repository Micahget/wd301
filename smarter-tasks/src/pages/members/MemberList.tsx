import React, { useEffect } from 'react';
import { fetchUsers } from "../../context/members/actions";

// So, let's import the useProjectsDispatch custom hook.
import { useUsersDispatch } from "../../context/members/context";

// I'll import the ProjectListItems component from the same folder. 
// This I'll define next.
import MemberListItems from "./MemberListItems";
const MemberList: React.FC = () => {

  // I'll define a new constant called dispatchProjects, 
  // to call the useProjectsDispatch() hook.
  const dispatchUsers = useUsersDispatch();
  
  useEffect(() => {
    // And I'll pass the `dispatchProjects` to `fetchProjects` function.
    fetchUsers(dispatchUsers)
  }, [])
  return (
    // use map 
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects 
       from our app-state, to a new component ProjectListItems */}
      <MemberListItems />
    </div>
  );
};
export default MemberList;