import React from 'react';
import "./Chats2.css"
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Mark"
            message="YO whats up!"
            timestamp="40 seconds ago"
            profilePic="https://cdn1.edgedatg.com/aws/v2/abc/SharkTank/person/942357/9828d1c422a22d1366a05121fcf78eef/528x528-Q90_9828d1c422a22d1366a05121fcf78eef.jpg"
            />
            <Chat
            name="Daniel Ramadhan"
            message="xixixi"
            timestamp="1 day ago"
            profilePic="https://m.media-amazon.com/images/M/MV5BZmE0NzNiNzQtYTVlYS00MjljLWE4MTgtYzYxNjU2NjZkM2M4XkEyXkFqcGdeQXVyNjY5NDgzNjQ@._V1_FMjpg_UX1000_.jpg"
            />
            <Chat
            name="Jasmine"
            message="shalom"
            timestamp="4 hours ago"
            profilePic="https://lumiere-a.akamaihd.net/v1/images/pp_princess_jasmine_static_mobile_20694_fb6ed086.jpeg?region=0%2C0%2C640%2C480"
            />
            <Chat
            name="Livia"
            message="you're cute"
            timestamp="50 minutes ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTkJMc-M0S1P3rGo1B3DIPq7sENk8r2EiMg&usqp=CAU"
            />
        </div>
        
    )
}

export default Chats;