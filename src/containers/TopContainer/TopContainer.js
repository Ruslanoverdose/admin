import React, {Component} from 'react'
import "./TopContainer.css"
import avatar from "../../assets/img/photo.jpg"
import down from "../../assets/img/down.png"
import {NavLink} from 'react-router-dom'
class TopContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuIsOpen: false,
        }
        this.onButtonMenuHandle = this.onButtonMenuHandle.bind()
    }

    onButtonMenuHandle = () => {
        this.setState({menuIsOpen: !this.state.menuIsOpen})
    }

    render() {
        return(
            <div className="TopContainer">
                <div className="container-fluid">
                    <div className="Top">
                        <div className="UserMenu">
                            <button onClick={this.onButtonMenuHandle}>
                                <div className="avatar">
                                    <img src={avatar}/>
                                </div>
                                <div className="arrow">
                                    <img src={down}/>
                                </div>
                            </button>
                            <ul className="UserMenuBlock" style={this.state.menuIsOpen ? {display: "block"} : {display: "none"}}>
                                <li><NavLink to="">Мой профиль</NavLink></li>
                                <li><NavLink to="">Сменить пароль</NavLink></li>
                                <hr/>
                                <li><NavLink to="">Выйти</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopContainer