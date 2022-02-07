import React from 'react'
import { useState } from 'react'

const Chatbar = (props) => {
    const [state, setState] = useState([
        { id: 1, Image: "/images/raja10.jpeg", name: "Ks Raja" },
        { id: 2, Image: "/images/raja1.jpg", name: "Pravas" },
        { id: 3, Image: "/images/raja2.jpg", name: "Amar" },
        { id: 4, Image: "/images/raja3.jpg", name: "Trilochan" },
        { id: 5, Image: "/images/raja4.jpg", name: "Bikas" },
        { id: 6, Image: "/images/raja5.jpg", name: "Manoj" },
        { id: 7, Image: "/images/raja6.jpg", name: "Chiku" },
        { id: 8, Image: "/images/raja7.jpg", name: "Akash" },
        { id: 9, Image: "/images/raja8.jpg", name: "Ks Raja" },
        { id: 10, Image: "/images/raja9.jpeg", name: "Ks Raja" },
        { id: 10, Image: "/images/raja9.jpeg", name: "Ks Raja" },

    ])
    const openChat = (user) => {
        props.openChat(user)
    }
    return (
        <div className='chatbar'>
            {state.map(user => (
                <div className="chatbar_list" key={user.id} onClick={() => openChat(user)}>
                    <div className="chatbar_list-img">
                        <img src={user.Image} alt='user' />
                        <span className="status"></span>
                    </div>
                    <div className="chatbar_list-name">{user.name}</div>
                </div>
            ))}
        </div>
    )
}

export default Chatbar
