import React, { Component } from 'react';
import './App.css';
import MainContainer from "./containers/MainContainer/MainContainer"
import TopContainer from "./containers/TopContainer/TopContainer"
import MenuContainer from "./containers/MenuContainer/MenuContainer"
import {Switch, Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TopContainer />
        <MenuContainer />
        <MainContainer/>
        
      </div>
    );
  }
}

export default App;
