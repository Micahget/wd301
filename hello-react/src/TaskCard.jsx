/* eslint-disable */
import './index.css'
import './TaskCard.css'

  const TaskCard = (props) => {
    // console.log(props)
    return (
      <div className="TaskItem">
        <h2 className="text-xl font-bold text-red-600">{props.title}</h2>
        <p>completed on: </p>
        <p>Assignee: Miki G</p>
      </div>
    )
  }
  
  export default TaskCard
  