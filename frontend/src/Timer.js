import React, { Component } from 'react';
import './App.css';
const ms = require("pretty-ms");

export default class Timer extends Component {

    constructor(props){
        super(props)
        this.state = {
            time: 1*1000*60,
            start: 0,
            isOn: false,
            defaultTime: 1*1000*60
        }        
    }
      
    msToTime = (s) => {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
      
        if (secs<10) {
            secs = "0" + secs
        }
        
        return mins + ':' + secs
      }

    handle = () => {
        clearInterval(this.timer);
        this.setState({isOn: false, defaultTime: this.state.time})
      
    }

    startTimer = () => {
        this.setState({
            time: this.state.defaultTime,
            start: Date.now(),
             isOn: true
        })          

        this.timer = setInterval(() => { 
            
            this.setState({
                time: this.state.defaultTime - Date.now() + this.state.start
            })  

            if (this.state.time <500 && this.state.time > -500) {
                this.handle()
             }

        }
        , 1);  
    }

    stopTimer = () => {
        this.setState({isOn: false, defaultTime: this.state.time})
        clearInterval(this.timer);
       
    }
    
    restartTimer = () => {
        this.setState({time: 1*60*1000, defaultTime: 1*60*1000});
        
    }
    
    render() {
        return(     

                <div className="App-div">
                    <h3>timer: {this.msToTime(this.state.time)}</h3>

                    <button onClick={this.startTimer} style={{ display: (!this.state.isOn && this.state.time == 1*60*1000) ? "block" : "none" }}> start </button> 
                    <button onClick={this.stopTimer} style={{ display: this.state.isOn ? "block" : "none" }}>stop</button> 
                    <button onClick={this.restartTimer} style={{ display: (!this.state.isOn && this.state.time != 1*60*1000) ? "block" : "none" }}>reset</button>
                    <button onClick={this.startTimer} style={{ display: (!this.state.isOn && this.state.time != 1*60*1000  && this.state.time > 500) ? "block" : "none" }} >resume</button>
                
                </div>
             

                )
    }
}


