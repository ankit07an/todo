import "./todo.css"
// import AiOutlinePlus from "react-icons/ai"
import { FaPlus } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"
import { useEffect, useState } from "react"

const getTodo=()=>{
    let todoTask=localStorage.getItem('todo');
    if(todoTask){
        return JSON.parse(localStorage.getItem('todo'));
    }else{
        return[];
    }
}


const Todo = () => {
    const [idata, setIdata] = useState('');
    const [task, setTask] = useState(getTodo());
    const taskAdd = () => {
        if (!idata) {

        }
        else {

            setTask([...task, idata]);
            setIdata('')
        }
    }
    const deleteTask=(id)=>{
        const updatedTask=task.filter((element,index)=>{
        return index!==id
    })
    setTask(updatedTask);
}
const clearAll=()=>{
        setTask([]);

    }
    useEffect(()=>{
        localStorage.setItem('todo',JSON.stringify(task))
    },[task]);

    
    return (
        <>
            <div className="todo-main">

                <figure className="todo-top-cap">
                    <img src="../icons8-notepad-64.png" alt="error" />
                    <figcaption>Todo List</figcaption>
                </figure>
                <div className="add-items">
                    <input type="text" placeholder="Add Task"
                        value={idata} onChange={(e) => setIdata(e.target.value)}
                    />
                    <i title="Add Items" className="fa-plus-icn" onClick={taskAdd}><FaPlus /></i>
                </div>
                <figure>
                    <figcaption className="caption-task">Your tasks are shown Below</figcaption>
                </figure>
                <div className="items-list">
                    {task.map((element,index)=>{

                        return(
                    <div className="itemlist-main" key={index}>
                        <h3>{element}</h3>
                        <i className="fa-trash-icn" title="Delete Item" onClick={()=>deleteTask(index)}><FaTrash /></i>
                    </div>

                        )
                    }
                    
                    
                    
                    
                    )}
                </div>
                <div className="btn-btm">
                    <button className="bottom-btn" onClick={clearAll} ><span>Clear All</span></button>
                </div>
            </div>

        </>
    );
}

export default Todo;