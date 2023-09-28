import React from "react";
import {useState} from "react";
import { useSelector} from "react-redux";
import Task from "./Task";
import { Button} from "react-bootstrap";

const ListTasks = () => {
const [status, setStatus] = useState("all")


  const listTasks = useSelector((state)=>state.task.listTasks)

    return (
      <div>
        <Button onClick={()=>setStatus("all")}>All</Button>
        <Button onClick={()=>setStatus("done")}>Done</Button>
        <Button onClick={()=>setStatus("undone")}>Undone</Button>
          {
            status === "done" ?
            listTasks.filter((el)=>el.status === true)
            .map((el)=><Task task={el} key={el.id}/>)
            : status === "undone" ?
            listTasks.filter((el)=>el.status === false)
            .map((el)=><Task task={el} key={el.id}/>)
            :listTasks.map((el)=><Task task={el} key={el.id}/>)
          }
      </div>
    )
}

export default ListTasks;