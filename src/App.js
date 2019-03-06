import React, { Component } from 'react';
import './App.css';
import MainContainer from "./containers/MainContainer/MainContainer"
import TopContainer from "./containers/TopContainer/TopContainer"
import MenuContainer from "./containers/MenuContainer/MenuContainer"
import ArticleContainer from "./containers/ArticleContainer/ArticleContainer"
import {Switch, Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TopContainer />
        <MenuContainer />
        <Switch>
          <Route exact path="/articles" component={ArticleContainer}/>
          <Route exact path="/" component={MainContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
