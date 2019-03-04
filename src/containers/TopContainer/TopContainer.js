import React, {Component} from 'react'
import "./TopContainer.css"
import avatar from "../../assets/img/photo.jpg"
import down from "../../assets/img/down.png"
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
                                <li><a href="">Мой профиль</a></li>
                                <li><a href="">Сменить пароль</a></li>
                                <hr/>
                                <li><a href="">Выйти</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopContainer