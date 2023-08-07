/* eslint-disable */
import './App.css'
import Task from './Task'
import TaskList from './TaskList'
import TaskForm from './TaskForm';

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskList  tasks={[]}/>
    </div>
  );
}

export default App;