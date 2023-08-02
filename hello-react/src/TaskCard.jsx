/* eslint-disable */
import './index.css'
import './TaskCard.css'

  const TaskCard = (props) => {
    
    let status = "Due on:" + props.dueDate
    if (props.completedAtDate) {
      status = "Completed on: " + props.completedAtDate 
    }
    return (
      <div className="TaskItem border-2">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>{status} </p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    )
  }
  
  export default TaskCard
  