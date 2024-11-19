import React, { useState } from "react";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import SummaryReport from "./components/SummaryReport";


const App = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Parent-Teacher Communication Platform</h1>
            <MessageForm addMessage={addMessage} />
            <MessageList messages={messages} />
            <SummaryReport messages={messages} />
        </div>
    );
};

export default App;
