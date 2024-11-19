import React from "react";

const SummaryReport = ({ messages }) => {
    const unreadMessages = messages.filter((msg) => !msg.isRead).length;
    const totalMessages = messages.length;
    const responseRate =
        totalMessages === 0
            ? 0
            : (
                  ((totalMessages - unreadMessages) / totalMessages) *
                  100
              ).toFixed(2);

    return (
        <div>
            <h2>Summary Report</h2>
            <p>Total Messages: {totalMessages}</p>
            <p>Unread Messages: {unreadMessages}</p>
            <p>Response Rate: {responseRate}%</p>
        </div>
    );
};

export default SummaryReport;
