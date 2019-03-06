import React, {Component} from 'react'
import "./MenuContainer.css"
import bars from "../../assets/img/bars.png"
import {NavLink} from "react-router-dom"
class MenuContainer extends Component {
   
    constructor(props) {
        super(props)

        this.state = {
            sidebarIsOpen: false
        }
        this.onHandleClick = this.onHandleClick.bind()
    }

    onHandleClick = () => {
        this.setState({sidebarIsOpen: !this.state.sidebarIsOpen })
    }

    render() {
        return(
            <div className="MenuContainer" style={this.state.sidebarIsOpen ? {left: "0"} : {left: "-12%"}}>
                <div className="Sidebar">
                    <div className="Opening">
                        <button onClick={this.onHandleClick}>
                            <img src={bars} alt=""/>
                        </button>
                    </div>
                    <div className="SidebarMenu">
                        <ul className="listMenu">
                            <li><NavLink to="/">
                                <div className="titleItem">
                                    Главная
                                </div>
                                <div className="iconItem">
                                    <i className="fas fa-home"></i>
                                </div>
                            </NavLink></li>
                            <li>
                                <NavLink to="/articles">
                                    <div className="titleItem">
                                        Статьи
                                    </div>
                                    <div className="iconItem">
                                        <i className="far fa-clipboard"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <div className="titleItem">
                                        Категории
                                    </div>
                                    <div className="iconItem">
                                        <i className="fas fa-list-ul"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <div className="titleItem">
                                        Теги
                                    </div>
                                    <div className="iconItem">
                                        <i className="fas fa-hashtag"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <div className="titleItem">
                                        Пользователи
                                    </div>
                                    <div className="iconItem">
                                        <i className="far fa-user"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <div className="titleItem">
                                        Настройки
                                    </div>
                                    <div className="iconItem">
                                        <i className="fas fa-cog"></i>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuContainer