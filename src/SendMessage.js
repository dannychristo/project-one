import React, { useState, useEffect, useRef } from "react";
import "./ChatScreen.css"
import database from "./firebase"
import {collection, addDoc, serverTimestamp} from "firebase/firestore"
import {auth} from "./firebase"




const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');
 

    const handleSend = async (e) => {
    e.preventDefault();
    if (input === "") {
        alert("please enter a valid message")
        return
    }

    const {uid, displayName} = auth.currentUser
    await addDoc (collection(database, "messages"), {
    
        text: input,
        name:displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput("")
    
    scroll.current.scrollIntoView({behaviour: "smooth"})


    
}
    return (
    <form onSubmit={handleSend} className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text"/>
                    <button   type="submit" className="chatScreen__inputButton">SEND</button>
                </form>        
        
            
       )
    };
export default SendMessage