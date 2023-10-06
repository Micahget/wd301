import React, { Suspense } from "react";
const ProjectList = React.lazy(() => import("./ProjectList")); // here we use React.lazy to load the component dynamically. This code means that the component will be loaded only when it is needed. and the Suspense component will show a fallback component while the component is loading. which is the div with the text "Loading..."
import NewProject from "./NewProject";
import ErrorBoundary from "../../components/ErrorBoundary";

const Projects = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Projects
        </h2>
        <NewProject />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Comming...</div>}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Projects;
