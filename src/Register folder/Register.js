import React from "react";
import {Link, useNavigate} from "react-router-dom";
import database, {auth, storage} from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import GoogleButton from "react-google-button";
import RegisterStyles from "./Register.module.css";


const googleProvider = new GoogleAuthProvider();
function Register () {

    const[err,setErr] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async (e)=>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
     
        try{
            
const res = await createUserWithEmailAndPassword(auth, email, password)
            
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
    
  (error) => {
    setErr(true);
  
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,
      });

      database.collection("users").doc(res.user.uid).set({
        uid: res.user.uid,
        displayName,
        email,
        photoURL:downloadURL,

      });

      database.collection("userChats").doc(res.user.uid).set({})

      navigate("/")
      
    });
  }
  
);

        


        } catch (err){
            setErr(true);

        }
        
  };

  const SignInWithGoogle = async() =>{
        
        
    try{
        const res = await signInWithPopup(auth, googleProvider);

        const user = res.user;

            database.collection("users").doc(res.user.uid).set({
              uid: user.uid,
              displayName:user.displayName,
              email:user.email,
              photoURL: user.photoURL,
            })
            



            database.collection("userChats").doc(res.user.uid).set({})

        navigate("/")

    } catch (err){
        console.error(err);
        alert(err.message);
    };
};

    
    
    return(
        <div className={RegisterStyles.formContainer}>
            <div className={RegisterStyles.formWrapper}>
                <span className={RegisterStyles.logo}>Placeholder Title</span>
                <span className={RegisterStyles.title}>Register</span>
                <form className={RegisterStyles.formLayout} onSubmit={handleSubmit}>
                    <input className={RegisterStyles.input__Style} type="text" placeholder="display name"/>
                    <input className={RegisterStyles.input__Style} type="email " placeholder="email"/>
                    <input className={RegisterStyles.input__Style} type="password" placeholder="password"/>
                    <input className={RegisterStyles.inputButton} type="file" id="file"/>
                    <label className={RegisterStyles.SigninLabel} htmlFor="file">
                        <AddPhotoAlternateIcon className={RegisterStyles.photoIcon}/>
                        <span style={{color: "#6a6cc0", fontSize:"14px"}}> Add Profile Picture</span>
                        </label>
                    <button className={RegisterStyles.RegisterButton}>Sign up</button>
                    {err && <span>Something went wrong!</span>}
                </form>
                <p className={RegisterStyles.RegisterText}>You do have an account? <Link className ={RegisterStyles.LoginLink} to="/Login_page">Login</Link></p>
           <div className={RegisterStyles.GoogleButton}>
             <GoogleButton onClick={SignInWithGoogle}/>
          </div>
           </div>   
        </div>
    )
}


export default Register
