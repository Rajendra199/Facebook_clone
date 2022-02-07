import React from 'react'
import { FaVideo, FaPhoneAlt, FaRegWindowClose } from 'react-icons/fa'

const ChatBox = (props) => {
    const closeChat = () => {
        props.closeChat()
    }
    return (
        <>
            {props.state ? (<div className='chat'>
                <div className="chat_hrader">
                    <div className="chat_first">
                        <div className="chat_header-img">
                            <img src={props.current.Image ? props.current.Image : ''} alt='user' />
                        </div>
                        <div className="chat_header-name">{props.current.name ? props.current.name : ''}</div>
                    </div>
                    <div className="chat_second">
                        <FaVideo className='chat_second-icons' />
                        <FaPhoneAlt className='chat_second-icons' />
                        <FaRegWindowClose className='chat_second-icons' onClick={closeChat} />
                    </div>
                </div>
                <div className="chat_body">
                    <div className="chat_left">
                        <p className="msg">Hey Pravs</p>
                    </div>
                    <div className="chat_right">
                        <p className="msg">hello Raja</p>
                    </div>
                    <div className="chat_left">
                        <p className="msg">how are you?</p>
                    </div>
                    <div className="chat_right">
                        <p className="msg">i am fine. wht abt u?</p>
                    </div>
                </div>
                <div className="chat_footer">
                    <input type="text" className="chat_input" placeholder='Aa' />
                </div>
            </div>) : ""}

        </>
    )
}

export default ChatBox
