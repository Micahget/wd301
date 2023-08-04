// disable eslint
/* eslint-disable */
import React from "react";
import TaskCard from "./TaskCard";
// this is parent component
function App() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <h1 className="col-start-2 col-span-4 text-4xl font-bold text-center p-6">
        Smarter Tasks
      </h1>
      <p className="col-start-2 col-span-4 p-6">
        {" "}
        <span>Project:</span> Graduation Final Year Project (Revamp Collage
        Website)
      </p>
      <div className="col-start-2 col-span-2 p-6 border-4 border-gray-300 m-4 rounded-md items-center justify-items-center w-70">
        <h1 className="text-center text-2xl font-bold m-1">Pending</h1>
        <TaskCard
          status="pending"
          title="Build a web with static content"
          dueDate="September 13, 2023"
          assigneeName="Rohit"
        />
        <TaskCard
          status="pending"
          title="Add blog"
          dueDate="10th December 2023"
          assigneeName="Micah"
        />
      </div>
      <div className="col-span-2 p-6 border-4 border-gray-300 m-4 rounded-md">
        <h1 className="text-center text-2xl font-bold">Done</h1>
        <TaskCard
          status="completed"
          title="Design the mockup"
          completedAtDate="10th June 2023"
          assigneeName="Rahul"
        />
        <TaskCard
          status="completed"
          title="Get approval from principal"
          completedAtDate="10th July 2023"
          assigneeName="Max"
        />
      </div>
    </div>
  );
}

export default App;
