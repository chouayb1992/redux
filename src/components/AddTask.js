import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Actions/action";

const AddTask = () => {

    const [newTitle, setNewTitle] = useState("")
    const dispatch = useDispatch();
   

    const handleNewTask = (e) => {
        e.preventDefault();
        dispatch(addTask({id:Math.random(), title: newTitle, status: false}))
        setNewTitle('')
    }

    return (
        <div>
       <Form onSubmit={handleNewTask}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value= {newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
      Add Task
    </Button>
    </Form>
   
    
        </div>
    )
}

export default AddTask;