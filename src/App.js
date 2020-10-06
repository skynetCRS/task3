import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./card.js";
import {BrowserRouter,Route} from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" Component={Card}/>
          <Card/>
        </BrowserRouter>
      </div>
      // <div>
      //   <Card/>
      // </div>
    );
  }
}
export default App;
