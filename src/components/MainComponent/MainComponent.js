import React, {Component} from 'react'
import Stats from '../Stats/Stats.js'

class MainComponent extends Component {
    componentDidMount() {
    }
    render() {
        let h1
        let component
        if (this.props.match.url === "/") {
            h1 = (<h1>Статистика</h1>)
            component = <Stats />
        }
        else if (this.props.match.url === "/articles") {
            h1 = (<h1>Посты</h1>)
            component = (<div>Посты</div>)
        }
        else {
            h1 = (<h1>Нет компонента</h1>)
            component = (<div>asd</div>)
        }
        return(
            <div className={"MainComponent"}>
                <div className="contentTitle">
                   {h1}
                </div>
                <div className="contentBody">
                    {component}
                </div>
            </div>
        )
    }
}

export default MainComponent