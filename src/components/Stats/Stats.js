import React from 'react'

const Stats = (props) => {
    return(
        <div className="adminStats">
            <div className="lines">
                <div className="line">
                    <div className="pillar1">
                        Количество постов
                    </div>
                    <div className="pillar2">25</div>
                </div>
                <div className="line">
                    <div className="pillar1">
                        Категории
                    </div>
                    <div className="pillar2">3</div>
                </div>
                <div className="line">
                    <div className="pillar1">
                        Теги
                    </div>
                    <div className="pillar2">32</div>
                </div>
                <div className="line">
                    <div className="pillar1">
                        Авторов
                    </div>
                    <div className="pillar2">2</div>
                </div>
            </div>
        </div>
    )
}

export default Stats