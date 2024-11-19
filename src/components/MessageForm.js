import React, { useState } from "react";

const MessageForm = ({ addMessage }) => {
    const [sender, setSender] = useState("");
    const [receiver, setReceiver] = useState("");
    const [messageText, setMessageText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!sender || !receiver || !messageText) {
            alert("Please fill out all fields.");
            return;
        }

        const newMessage = {
            id: Date.now(),
            sender,
            receiver,
            messageText,
            isRead: false,
            timestamp: new Date(),
        };

        addMessage(newMessage);
        setSender("");
        setReceiver("");
        setMessageText("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Sender Name"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <input
                type="text"
                placeholder="Receiver Name"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <textarea
                placeholder="Message"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <button type="submit">Send Message</button>
        </form>
    );
};

export default MessageForm;
