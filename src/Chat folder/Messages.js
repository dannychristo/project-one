import { doc, onSnapshot } from "firebase/firestore";
import React,{ useContext } from "react"
import { useEffect } from "react";
import { useState } from "react";
import { ChatContext } from "../Context folder/ChatContext";
import database from "../firebase";
import Message from "./Message";


import Messages2Style from "./Messages.module.css"


function Messages({message}) {
    
    console.log(message)
    
    const [messages,setMessages] = useState([])
    const {data}= useContext(ChatContext);

    useEffect(()=>{
        const unsub= onSnapshot(doc(database,"chats", data.chatId),(doc)=>{
            doc.exists() && setMessages(doc.data().messages)
        })

        return()=>{unsub()
        }

    },[data.chatId])
    console.log(messages)
    

    return(
        <div className={Messages2Style.container}>
           {messages.map(m=>(
            <Message message={m} key={m.id}/>
           ))}
            </div>
            
    )
}
export default Messages   