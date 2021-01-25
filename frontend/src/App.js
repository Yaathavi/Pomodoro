import './App.css';
import Timer from './Timer';

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
    </div>
  );
}


export default App;

