import React, { useEffect } from 'react';
import { fetchUsers } from "../../context/members/actions";

import { useUsersDispatch } from "../../context/members/context";

import MemberListItems from "./MemberListItems";
const MemberList: React.FC = () => {

  const dispatchUsers = useUsersDispatch();
  
  useEffect(() => {
    fetchUsers(dispatchUsers)
    console.log("fetchUsers") 
  } , []) // here we are passing an empty array so that it will only render once.
  
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <MemberListItems />
    </div>
  );
};
export default MemberList;