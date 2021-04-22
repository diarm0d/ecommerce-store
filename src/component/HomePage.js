import React from 'react'
import './HomePage.styles.scss'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Hats</h2>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Jackets</h2>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Socks</h2>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Mens</h2>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Womens</h2>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
