import React, { Suspense } from "react";
const MemberList = React.lazy(() => import("./MemberList"));
import ErrorBoundary from "../../components/ErrorBoundary";


import NewMemeber from "./NewMember";


const Projects = () => {
  return (
    <>
      <div className="member flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMemeber />
      </div>
      
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Comming...</div>}>
          <MemberList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Projects;
