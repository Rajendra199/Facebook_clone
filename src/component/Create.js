import React from 'react'
import {FaVideo,FaRegFileImage,FaRegGrinWink} from "react-icons/fa"

const Create = () => {
    return (
        <div className='create'>
            <div className="create_first">
                <div className="create_first-img">
                    <span>
                        <img src='/images/raja10.jpeg' alt='user' />
                    </span>
                </div>
                <div className="create_input">
                    <input type="text" className='create_first-input' placeholder='Raja what is your mind?' />
                </div>
            </div>
            <div className="create_second">
                <span className="create_second-icon">
                   <FaVideo className='redColor'/> <span className="text">Live Video</span>
                </span>
                <span className="create_second-icon">
                   <FaRegFileImage className='greenColor'/> <span className="text">Live Video</span>
                </span>
                <span className="create_second-icon">
                   <FaRegGrinWink className='orangeColor'/> <span className="text">Live Video</span>
                </span>
            </div>
        </div>
    )
}

export default Create
