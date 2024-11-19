import React from "react";

const MessageList = ({ messages }) => {
    const toggleReadStatus = (id) => {
        const messageIndex = messages.findIndex((msg) => msg.id === id);
        if (messageIndex !== -1) {
            messages[messageIndex].isRead = !messages[messageIndex].isRead;
        }
    };

    return (
        <div>
            <h2>Messages</h2>
            {messages.length === 0 ? (
                <p>No messages to display.</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {messages.map((msg) => (
                        <li
                            key={msg.id}
                            style={{
                                marginBottom: "10px",
                                padding: "10px",
                                border: "1px solid #ccc",
                            }}
                        >
                            <p>
                                <strong>From:</strong> {msg.sender} <br />
                                <strong>To:</strong> {msg.receiver} <br />
                                <strong>Message:</strong> {msg.messageText} <br />
                                <strong>Status:</strong>{" "}
                                {msg.isRead ? "Read" : "Unread"} <br />
                                <strong>Time:</strong>{" "}
                                {new Date(msg.timestamp).toLocaleString()}
                            </p>
                            <button onClick={() => toggleReadStatus(msg.id)}>
                                Mark as {msg.isRead ? "Unread" : "Read"}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MessageList;
