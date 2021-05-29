import React from 'react'
import Bell from '../img/Notification.svg'
import avatar from '../img/default-avatar.svg'
import './Header.css'

function Header() {
    return (
        <div className="Header py-2">
            <div className="Logo">
                <h1>EDYODA</h1>
            </div>
            <div className="tag">
                <div>
                    <img src={Bell} />
                </div>
                <div className="info">
                    <div><p>Hi Jane Doe!</p></div>
                    <div><img src={avatar} /></div>
                </div>
            </div>
        </div>
    )
}

export default Header
