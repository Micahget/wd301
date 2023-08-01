
// disable eslint
/* eslint-disable */
import TaskCard from "./TaskCard";
// this is parent component
function App() {
  return (
    <div>
      <div>
        <h1>Pending</h1>
        <TaskCard title= "Build a web with static content"/>
        <TaskCard title= "Add blog"/>
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard title="Design the mockup"/>
        <TaskCard title="Get approval from principal"/>
      </div>
    </div>
  );
}

export default App
