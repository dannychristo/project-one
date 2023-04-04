import React from "react"
import { useState } from "react"
import database from "../firebase"
import {collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc} from "firebase/firestore"
import { useContext } from "react"
import {AuthContext} from "../Context folder/AuthContext"
import { ChatContext } from "../Context folder/ChatContext"



import SearchStyle from "./Search.module.css"


function Search() {

    const[username, setUsername] = useState("")
    const[user, setUser] = useState(null)
    const[err, setErr] = useState(false)

    const {currentUser} = useContext(AuthContext)
    const {dispatch} = useContext(ChatContext)

    const handleSearch = async () =>{
        const q = query(collection(database, "users"), where("displayName", "==", username)
        );

        try{
            
    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
            setUser(doc.data())
        });
    }catch(err){
        setErr(true);
    }
        
    };

    const handleKey = e=>{
        e.code === "Enter" && handleSearch();
    };
    const handleSelect = async(u) => {
         
        const combinedId =
        currentUser.uid > user.uid ?
        currentUser.uid + user.uid 
        : user.uid + currentUser.uid

        dispatch({type:"CHANGE_USER", payload:u})

        try {
            const res = await getDoc(doc(database,"chats", combinedId)); 

            if(!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(database,"chats",combinedId),{messages:[]});

                //create user chats
                await updateDoc(doc(database, "userChats", currentUser.uid), {
                    [combinedId+".userInfo"] : {
                        uid: user.uid,
                        displayName: user.displayName,
                    },
                    [combinedId+ ".date"]: serverTimestamp(),
                });

                await setDoc(doc(database,"chats",combinedId),{messages:[]});

                //create user chats
                await updateDoc(doc(database, "userChats", user.uid), {
                    [combinedId+".userInfo"] : {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                    },
                    [combinedId+ ".date"]: serverTimestamp(),
                });
            };
        } catch(err) {}
        //create user chats

        setUser(null);
        setUsername("")

    }

    return(
        <div className={SearchStyle.search}>
            <div className={SearchStyle.searchForm}>
                <input 
                className={SearchStyle.input} 
                type="text" 
                placeholder="Find a user..." 
                onKeyDown={handleKey} 
                onChange={e=> setUsername(e.target.value)}
                value={username}
                />
                
            </div>
            {err && <span>User not found!</span>}
            {user && <div className={SearchStyle.userChat} onClick={handleSelect}>
                <img className ={SearchStyle.img} src={user.photoURL} alt="test"/>
                <div className={SearchStyle.userChatInfo}>
                    <span>
                        {user.displayName}
                    </span>
                </div>
            </div>}
        </div>
    )
}

export default Search