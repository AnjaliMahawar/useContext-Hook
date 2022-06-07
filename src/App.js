import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Parent from './Parent';


 export const FrndContext=createContext()
function App() {  //rfc

  //state 
  const[frnd,setFrnd]=useState(['anjali','akshu'])

  //function


  //return
  return (
   <FrndContext.Provider value={frnd}>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Parent/>
      </header>
    </div>
   </FrndContext.Provider>
  );
}

export default App;
