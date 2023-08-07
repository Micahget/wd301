import React from "react";

/* eslint-disable */
interface TaskProp {
        title: string;
    }
class Task extends React.Component<TaskProp> {
    
    render() {
        return <div>{this.props.title}</div>; // here we use this b/c we are in a class. But in a function, we would use props.title
    }
}

export default Task;