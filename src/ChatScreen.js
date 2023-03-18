import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState ([
        {
            name: 'Mark',
            image: 'https://cdn1.edgedatg.com/aws/v2/abc/SharkTank/person/942357/9828d1c422a22d1366a05121fcf78eef/528x528-Q90_9828d1c422a22d1366a05121fcf78eef.jpg',
            message: 'Whats up'
        },
        {
            name: 'Mark',
            image: 'https://cdn1.edgedatg.com/aws/v2/abc/SharkTank/person/942357/9828d1c422a22d1366a05121fcf78eef/528x528-Q90_9828d1c422a22d1366a05121fcf78eef.jpg',
            message: 'How are you'
        },
        {
            message: 'Oh hi Mark, how are oy'
        }
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH MARK ON 10/02/23</p>
            {messages.map(message => (
                message.name ? (
                    <div class="chatScreen__message">
                        <Avatar 
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ):(
                    <div class="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                

            ))}
            <form className="chatScreen__input">
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chatScreen__inputField"
                placeholder="Type a message.."
                type="text"
                />
                <button 
                onClick = { handleSend }
                type="submit"
                className="chatScreen__inputButton">
                    SEND
                </button>
            </form>
        </div>
    );
}

export default ChatScreen;