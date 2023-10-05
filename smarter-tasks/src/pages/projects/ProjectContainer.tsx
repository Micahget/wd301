/* eslint-disable */
import { useUsersDispatch } from "../../context/members/context";
import { fetchUsers } from "../../context/members/actions";
import { useProjectsDispatch } from "../../context/projects/context";
import { useEffect } from "react";
import { fetchProjects } from "../../context/projects/actions";
import { Outlet } from "react-router-dom";

const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch();
  const memberDispatch = useUsersDispatch();
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchUsers(memberDispatch);
  }, [projectDispatch, memberDispatch]);
  return <Outlet />;
};

export default ProjectContainer;
