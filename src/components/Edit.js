import { Button, Modal, Form } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { editTask } from "../redux/Actions/action"
import { useDispatch } from "react-redux";

const Edit = ({task}) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit =()=>{
        dispatch(editTask(task.id, newTitle))
    }
    return (
        <div>
    <Button variant="primary" onClick={handleShow}>
      Edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value= {newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
      </Form.Group>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{handleEdit(); handleClose()}}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>


        </div>
    )
}

export default Edit;