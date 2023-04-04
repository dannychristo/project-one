import React, { useContext, useState } from "react"
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { AuthContext } from "../Context folder/AuthContext";
import { ChatContext } from "../Context folder/ChatContext";
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import database, {storage} from "../firebase";


import InputStyle from "./Input.module.css"



const Input =() => {
    const[text, setText] = useState("")
    const[image, setImage] = useState(null)

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    const handleSend =async(e)=>{

        e.preventDefault();
        if (text === "") {
            alert("please enter a valid message")
            return}
        if(image){             

            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on(
    
                (error) => {
                  //setErr(true);
                
                }, 
                () => {
                  getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                    await updateDoc(doc(database,"chats",data.chatId), {
                        messages: arrayUnion({
                            id: uuid(),
                            text,
                            senderId: currentUser.uid,
                            date:Timestamp.now(),
                            image:downloadURL,
                        })
                    })                   
                  });               
                }               
              );

        }else{
            await updateDoc(doc(database,"chats",data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date:Timestamp.now(),
                })
            })

        }

        await updateDoc(doc(database,"userChats",currentUser.uid),{
            [data.chatId + ".lastMessage"]:{
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        })

        await updateDoc(doc(database,"userChats",data.user.uid),{
            [data.chatId + ".lastMessage"]:{
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        })


        
        setText("")
        setImage(null)
    };

    return(
        <form onSubmit={handleSend} className={InputStyle.input}>
            <input className={InputStyle.text}
             type ="text" 
             placeholder="Type a message..." 
             onChange={(e)=>setText(e.target.value)}
             value={text}/>
            <div className={InputStyle.send}>
                <AttachFileOutlinedIcon className={InputStyle.image}/>
                <input type ="file" style={{display:"none"}} id="file" onChange={(e)=>setImage(e.target.files[0])}/>
                <label htmlFor="file">
                    <AddPhotoAlternateOutlinedIcon className={InputStyle.image}/>
                </label>
                <button  className={InputStyle.button}>Send</button>
           </div>     
        </form>
    )

}
export default Input


