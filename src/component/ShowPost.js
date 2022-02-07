import React from 'react'
import { useState } from 'react'
import { FaThumbsUp, FaCommentAlt, FaShareAlt } from "react-icons/fa"

const ShowPost = () => {
    const [state, setState] = useState([
        {
            id: 1,
            userImg: "/images/raja10.jpeg",
            name: "Ks Raja",
            time: "17hr",
            text: `If you encounter any problem, do not be nonplussed, 
        have faith in yourself and face it with a placid mind of stability`,
            postImg: "/images/raja8.jpg"
        },
        {
            id: 2,
            userImg: "/images/raja10.jpeg",
            name: "Ks Raja",
            time: "17hr",
            text: `If you encounter any problem, do not be nonplussed, 
        have faith in yourself and face it with a placid mind of stability`,
            postImg: "/images/raja11.jpeg"
        },
        {
            id: 3,
            userImg: "/images/raja10.jpeg",
            name: "Ks Raja",
            time: "17hr",
            text: `If you encounter any problem, do not be nonplussed, 
        have faith in yourself and face it with a placid mind of stability`,
            postImg: "/images/raja9.jpeg"
        },
        {
            id: 4,
            userImg: "/images/raja9.jpeg",
            name: "Ks Raja",
            time: "17hr",
            text: `If you encounter any problem, do not be nonplussed, 
        have faith in yourself and face it with a placid mind of stability`,
            postImg: "/images/raja7.jpg"
        },
        {
            id: 5,
            userImg: "/images/raja9.jpeg",
            name: "Ks Raja",
            time: "17hr",
            text: `If you encounter any problem, do not be nonplussed, 
        have faith in yourself and face it with a placid mind of stability`,
            postImg: "/images/raja6.jpg"
        }
    ])
    return (
        <div className='show'>
            {state.map(post => (
                <div key={post.id} className='divide_post'>
                    <div className="show_header">
                        <div className="show_header-img">
                            <img src={post.userImg} alt='user' />
                        </div>
                        <div className="show_header-name">
                            {post.name} <div className="date">{post.time}</div>
                        </div>
                    </div>
                    <div className="show_body">
                        <div className="show_body-text">
                           {post.text}
                        </div>
                        <div className="show_body-img">
                            <img src={post.postImg} alt='user' />
                        </div>
                    </div>
                    <div className="show_reaction">
                        <span className="reactions">
                            <FaThumbsUp /> <span className="reaction_text">Like</span>
                        </span>
                        <span className="reactions">
                            <FaCommentAlt /> <span className="reaction_text">Comment</span>
                        </span>
                        <span className="reactions">
                            <FaShareAlt /> <span className="reaction_text">Share</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowPost
