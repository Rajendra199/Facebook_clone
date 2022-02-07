import { useState } from 'react';
import './App.css';
import Chatbar from './component/Chatbar';
import ChatBox from './component/ChatBox';
import Navbar from './component/Navbar';
import Posts from './component/Posts';
import Sidebar from './component/Sidebar';




function App() {
  const [state, setState] = useState(false)
  const [current, setCurrent] = useState({})
  const openChat = (user) => {
    setState(true)
    setCurrent(user)
  }
  const closeChat = () => {
    setState(false)
  }
  return (
    <div className="App">
      <Navbar />
      <div className="facebook">
        <Sidebar />
      </div>
      <div className="facebook">
        <Posts />
        <Chatbar openChat={openChat} />
        <ChatBox state={state} current={current} closeChat={closeChat} />
      </div>
    </div>

  );
}

export default App;
