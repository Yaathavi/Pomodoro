import React from 'react';
import './listItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function ListItem(props){
    const tasks = props.tasks; 
    const taskList = tasks.map(task => {
        return(
            <div className = "list" key = {task.key}> 
                <p> 
                    <input type="text" 
                    id={task.key} 
                    value={task.text}
                    onChange={
                        (e)=>{
                            props.updateTask(e.target.value, task.key)
                        }
                    }/>
                        
                    <span> 
                        <FontAwesomeIcon className="icons" 
                        icon={faTrashAlt} 
                        onClick={() => props.deleteTask(task.key)}
                    />
                    </span>
                </p>
            </div>
        )
    }) 

    return(
        <div>{taskList}</div>
    )
}

export default ListItem;