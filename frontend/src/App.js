import './App.css';
import Timer from './Timer';
import Task from './Task';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> POMOTIVITY </h1>
      </header>
      <div style = {{height: "10vh"}}> 
      <p> Boost your <b> Productivity </b> with <b>Positivity</b> and the <b> Pomodoro </b> technique!</p>
      </div> 
      {/* <p> Work Time!</p> */}
      <Timer/> 

<div className="App-div4"> 
  <u> <b> Add Tasks: </b></u>
</div>
    <br></br>
    <br></br>
    <Task/>
    </div>
  );
}


export default App;

