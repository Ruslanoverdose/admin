import React, {Component} from 'react'
import "./MainContainer.css"
import {Route, Switch} from 'react-router-dom'
import MainComponent from "../../components/MainComponent/MainComponent.js"

class MainContainer extends Component {

    render() {
        return(
            <div className="MainContainer">
                <div className="container customContainer">
                    <div className="Content">
                    <Switch>
                        <Route exact path="/articles" component={MainComponent}/>
                        <Route exact path="/" component={MainComponent}/>
                    </Switch>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContainer