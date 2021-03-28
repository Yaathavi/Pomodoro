import React from 'react';
import './listItem.css';

function ListItem(props){
    const tasks = props.tasks; 
    const taskList = tasks.map(task => {
        return(
            <div className = "list" key = {task.key}> 
                <p> {task.text} </p>
            </div>
        )
    })

    return(
        <div>{taskList}</div>
    )
}

export default ListItem;