import React, { Component } from 'react';
import './App.css';
import ContentContainer from "./containers/ContentContainer/ContentContainer"
import TopContainer from "./containers/TopContainer/TopContainer"
import MenuContainer from "./containers/MenuContainer/MenuContainer"

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TopContainer />
        <MenuContainer />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
