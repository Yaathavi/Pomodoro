import React, { Component } from 'react';
import './tasks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

export default class Tasks extends Component {


    constructor(){
        super()
        this.state = {
            tasks: [],
            textField: "",
            taskDivs: []
        }    
    }

    changeHandler = (event) => {
        this.setState ({textField: event.target.value})
    }

    deleteTask = (event) => {
        event.preventDefault();
        let taskName = event.target;
        console.log(taskName);
        let tempArray = this.state.tasks.filter(e => e !== taskName.innerHTML);
        console.log(tempArray);
        
        let tempDiv = this.state.taskDivs;
        for(let i=0; i<this.state.taskDivs.length; i++){
            if(this.state.taskDivs[i].props.children.props.children[0].props.children.props.children == taskName.innerHTML){
                tempDiv.splice(i,1);
                break;
            }
        }
        this.setState({tasks: tempArray, taskDivs: tempDiv, textField: ""});
        console.log(this.state.taskDivs);
        document.getElementById("add").click();
  
    }

    addTask = (event) => {
        event.preventDefault();

        if(this.state.tasks.includes(this.state.textField)){
            this.setState ({textField: ""});
        } else {
            var joined = this.state.tasks.concat(
                this.state.textField
            ) 
            var divList = this.state.taskDivs.concat(
            <div style={{width: "70%", margin: "0 auto", paddingTop: "3vh"}}> 
            <a onClick={this.deleteTask}>
                <div className = "card" style={{display: 'inline-block', textAlign: "center"}}> 
                    <div>{this.state.textField}</div>
                    {/* <div style={{marginLeft:"65vh", marginTop:"-2vh"}}><FontAwesomeIcon icon={faTrashAlt}/></div> */}
                </div> </a> 
             </div>
            )
            this.setState ({tasks: joined, taskDivs: divList, textField: ""});
        }
    }

    render() {
        return(     
            <div> 
                <form>
                    <input 
                        type='text'
                        onChange={this.changeHandler}
                        style={{ width:"80vh" }} value= {this.state.textField}/>
                        <button id="add" className = "button" onClick={this.addTask} style={{marginLeft: "2vh"}}> Add Task </button>
                </form > 
                   {this.state.taskDivs}
            </div>
        )
    }
} 

