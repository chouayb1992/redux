import { Button } from "react-bootstrap";
import React from "react";
import Edit from "./Edit";
import { useDispatch } from "react-redux";

const Task = ({task}) => {
    dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }

    const handleDone = () => {
        dispatch(doneTask(task.id))
    }


    return (
        <div>
        <Button onClick={handleDone}>{task.status ? 'UnDone' : 'Done'}</Button> <p style={task.status ? {textDecoration: 'line-through'} : {textDecoration : 'none'}}>{task.title}</p>
        <Edit task={task}/>
        <Button onClick={handleDelete}>Delete</Button>
        </div>
    )
}

export default Task;