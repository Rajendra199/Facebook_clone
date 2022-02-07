import React from 'react'
import { useState } from 'react'

const Sidebar = () => {
    const [state, setState] = useState([
        { id: 1, Image: "/images/raja1.jpg", name: "Html developer" },
        { id: 2, Image: "/images/raja2.jpg", name: "JavaScript developer" },
        { id: 3, Image: "/images/raja3.jpg", name: "Java developer" },
        { id: 4, Image: "/images/raja4.jpg", name: "PHP developer" },
        { id: 5, Image: "/images/raja5.jpg", name: "SAP developer" },
        { id: 6, Image: "/images/raja6.jpg", name: "UI developer" },
        { id: 7, Image: "/images/raja7.jpg", name: "Html developer" },
        { id: 8, Image: "/images/raja8.jpg", name: "PHP developer" },
        { id: 9, Image: "/images/raja9.jpeg", name: "python developer" },
        { id: 10, Image: "/images/raja11.jpeg", name: "React developer" },
    ])
    return (
        <div className='sidebar'>
            {state.map((info) => (
                <div className="sidebar_list" key={info.id}>
                    <div className="sidebar_list-img">
                        <img src={info.Image} alt='group image' className='ima_size' />
                    </div>
                    <div className="sidebar_list-name">{info.name}</div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar
