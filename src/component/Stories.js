import React, { useState } from 'react'

const Stories = () => {
    const [state, setState] = useState([
        { id: 1, Image: "/images/raja1.jpg", name: "Ks Raja" },
        { id: 2, Image: "/images/raja2.jpg", name: "Prabhash" },
        { id: 3, Image: "/images/raja3.jpg", name: "Amar" },
        { id: 4, Image: "/images/raja4.jpg", name: "Trilochan" }
    ])
    return (
        <div className='stories'>
            {state.map((story) => (
                <div className="storie_col" key={story.id}>
                    <div className="stories_body">
                        <img src={story.Image} alt='stories' />
                        <div className="stories_body-overlay">
                            <div className="stories_body-overlay-img">
                                <img src={story.Image} alt='stories' />
                            </div>
                            <div className="stories_body-name">{story.name}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Stories
