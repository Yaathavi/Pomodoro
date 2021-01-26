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
            textField: ""
        }    
    }

    changeHandler = (event) => {
        this.setState ({textField: event.target.value})
    }



    deleteTask = (event) => {
        event.preventDefault();
        console.log("hi");
        console.log(document.getElementById(event.target.getAttribute("id")));
      
    }

    addTask = (event) => {
        event.preventDefault();
        var joined = this.state.tasks.concat(

    <div style={{width: "70%", margin: "0 auto", paddingTop: "3vh"}}> 
     {/* <button className = "check" style={{display: 'inline-block', marginRight:"3vh", marginTop:"-2vh", textAlign: "center", height:"3vh", width:"3vh"}}>  </button>   */}

      <div className = "card" style={{display: 'inline-block', textAlign: "center"}}> 
      {this.state.textField}  
      <div style={{marginLeft:"65vh", marginTop:"-2vh"}}> <a onClick={this.deleteTask}> <FontAwesomeIcon icon={faTrashAlt}/> </a> </div> 
      </div> 
    </div>

        ) 
        this.setState ({tasks: joined, textField: ""});
      }
   
    render() {
        return(     
            <div> 
                <form>
                    
                    <input 
                        type='text'
                        onChange={this.changeHandler}
                        style={{ width:"80vh" }} value= {this.state.textField}/>
                        
                        <button className = "button" onClick={this.addTask} style={{marginLeft: "2vh"}}> Add Task </button>

                </form > 

                <div>
                   {this.state.tasks}
                </div>

            </div>
    
        )
    }
} 

