import Avatar from "@mui/material/Avatar"
import React, { useState, useEffect, useRef } from "react";
import "./ChatScreen.css"
import database from "./firebase"
import {onSnapshot, query, collection, orderBy} from "firebase/firestore"
import {auth} from "./firebase"
import SendMessage from "./SendMessage";




function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();


    useEffect(() => {
        const q = query(collection(database,"messages"), orderBy('timestamp'))
        const unsubscribe =onSnapshot(q, (querySnapshot)=> {
            let messages =[]
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return () => unsubscribe();
    },[])


    return (
        <>
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
            <h2>YOU MATCHED WITH ELLEN ON 10/08/20</h2>
            </p>

            {messages && messages.map((message) => (
                message.uid === auth.currentUser.uid ? (

                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.text}</p>
                </div>
                ) : (
                
                <div className="chatScreen__message">
                    <Avatar
                    className="chatscreen__image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chatScreen__text">{message.text}</p>
                </div>

                )
       ))}  
        </div>
        <SendMessage scroll = {scroll}/>
        <span ref={scroll}></span>
        </>
        
    );
}
export default ChatScreen