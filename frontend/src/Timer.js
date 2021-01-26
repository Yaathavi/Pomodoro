import React, { Component } from 'react';
import './App.css';
import Swal from 'sweetalert2'
import Helmet from 'react-helmet'

export default class Timer extends Component {

    constructor(props){
        super(props)
        this.state = {
            time: 1*1000*60,
            start: 0,
            isOn: false,
            onBreak: false,
            url: "https://webgradients.com/public/webgradients_png/022%20Morpheus%20Den.png",
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
        
        Swal.fire({
            title: 'Do you want to take a 5-min break now?',
            text: "Or you can continue working!",
            imageUrl: "https://media.tenor.com/images/dc3a69fd45e89213eb1cd6a740213336/tenor.gif",
            imageWidth: "30vh",
            imageHeight: "20vh",
            imageAlt: 'Good work, Keep it up!',
            showCancelButton: true,
            cancelButtonText: "No, I want to keep working!",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I need a break!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Enjoy your break!',
                'Maybe grab a snack or browse through Instagram :)',
                'success'
              ).then (() => {
                    this.breakTimer();
              }) 



            }
          })
    }

    handle2 = () => {
        clearInterval(this.timer);
        this.setState({isOn: false, defaultTime: this.state.time})
        
        Swal.fire({
            title: 'Break is over! Are you ready to start working again?',
            text: "",
            imageUrl: "https://i.pinimg.com/originals/4c/0e/a0/4c0ea0163a7bcdf118889bdf738c010d.gif",
            imageWidth: "30vh",
            imageHeight: "20vh",
            imageAlt: 'Good work, Keep it up!',
            showCancelButton: true,
            cancelButtonText: "No, 5 more minutes!",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, back to work!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                "You got this! Keep grinding!",
                "Don't be Busy, be Productive.",
                'success'
              ).then (() => {
                    this.setState({time: 1*60*1000, defaultTime: 1*60*1000});
                    this.startTimer();                   
              }) 
            } else {
                this.breakTimer();   
            }

          })
    }

    breakTimer = () => {
        this.setState({time: 0.5*60*1000, defaultTime: 0.5*60*1000});
        this.afterBreak();
    }

    afterBreak = () => { 
        this.setState({
            time: this.state.defaultTime,
            start: Date.now(),
             isOn: true,
             onBreak: true,
             url: "https://webgradients.com/public/webgradients_png/054%20Grown%20Early.png"
        })          

        this.timer = setInterval(() => { 
            
            this.setState({
                time: this.state.defaultTime - Date.now() + this.state.start
            })  

            if (this.state.time <500 && this.state.time > -500) {
                this.handle2()
             }

        }
        , 1);  
    }

    startTimer = () => {
        this.setState({
            time: this.state.defaultTime,
            start: Date.now(),
             isOn: true,
             onBreak: false,
             url: "https://webgradients.com/public/webgradients_png/022%20Morpheus%20Den.png",
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
                    <Helmet>
                        <style>{`body {background-image: url(${this.state.url});}`}</style>
                    </Helmet>
                    <p style = {{fontSize: "3vh", color: "#075a81" }}> <b>  {this.state.onBreak ? "Time to Relax!" : "Productive Time!" } </b> </p>
                    <h3 className= "Headerr">{this.msToTime(this.state.time)}</h3>    

                <div className = "App-div3"> 
                
                    <button className = "idk" onClick={this.startTimer} style={{ display: (!this.state.isOn && this.state.time == 1*60*1000) ? "block" : "none" }}> start </button> 
                    <button className = "idk" onClick={this.stopTimer} style={{ display: this.state.isOn ? "block" : "none" }}>stop</button> 
                    <button className = "idk"  onClick={this.restartTimer} style={{ display: (!this.state.isOn && this.state.time != 1*60*1000 && !this.state.onBreak) ? "block" : "none" }}>reset</button>
                    <button className = "idk" onClick={this.state.onBreak ? this.afterBreak : this.startTimer} style={{ display: (!this.state.isOn && this.state.time != 1*60*1000  && this.state.time > 500) ? "block" : "none" }} >resume</button>
                </div>
            
                </div>
             

                )
    }
}


