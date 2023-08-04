/* eslint-disable */
import React from 'react'
import './index.css'
import './TaskCard.css'

interface TaskCardProps {
    title: string
    date: string
    assigneeName: string
  }

  const TaskCard = (props: TaskCardProps) => {
    
    let status = `Due on: ${props.date}`
    let statusDate = new Date(props.date)
    if (statusDate < new Date) { // if the day is passed
      status = `Completed on: ${props.date}`
    }
    return (
      <div className="TaskItem border-2">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>{status} </p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    )
  }

  // const TaskCard = (props) => {
    
  //   let status = "Due on:" + props.dueDate
  //   if (props.completedAtDate) {
  //     status = "Completed on: " + props.completedAtDate 
  //   }
  //   return (
  //     <div className="TaskItem border-2">
  //       <h2 className="text-xl font-bold">{props.title}</h2>
  //       <p>{status} </p>
  //       <p>Assignee: {props.assigneeName}</p>
  //     </div>
  //   )
  // }
  
  export default TaskCard
  