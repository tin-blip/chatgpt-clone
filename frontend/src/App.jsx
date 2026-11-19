
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import ChatHeader from "./Components/ChatHeader/ChatHeader";
import MessageList from "./Components/MessageList/MessageList.jsx";
import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import ChatInput from "./Components/ChatInput/ChatInput.jsx";



function App() {

  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const lastMessageRef = useRef(null);

  async function fetchConversations() {

    try {
      const {data} = await axios.get("http://localhost:3888/api/chat/conversations");

      // console.log(data.data)

      setConversations(data.data);
    } catch (error) {
      console.log(error.message);
    }
  } 


  async function handleSubmit(question) {
    if (!question.trim()) {
      return;
    }

    const tempQuestion = {
      id: Date.now(),
      content: question.trim(),
      role: 'user',
    };
    setConversations(prev => [...prev, tempQuestion]);

    try {
      setIsLoading(true);
      const {data} = await axios.post('http://localhost:3888/api/chat/conversations', 
      {
        question: question.trim(),
      },
  );
    setConversations(prev => [...prev, data?.data?.assistantConversation]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    
  }

  useEffect(() => {
    fetchConversations();
    }, []);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });

  }, [conversations, isLoading]);

  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <ChatHeader />
        <MessageList
          lastMessageRef={lastMessageRef}
          isLoading={isLoading}
          conversations={conversations}
        />
        <ChatInput isLoading={isLoading} handleSubmit={handleSubmit} />
      </main>
    </div>
  );
}

export default App;