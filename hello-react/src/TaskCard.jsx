/* eslint-disable */
import './TaskCard.css'

  const TaskCard = (props) => {
    console.log(props)
    return (
      <div className="TaskItem">
        <h2>{props.title}</h2>
        <p>completed on: </p>
        <p>Assignee: Miki G</p>
      </div>
    )
  }
  
  export default TaskCard
  