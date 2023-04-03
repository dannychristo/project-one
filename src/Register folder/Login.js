import React from "react";
import {Link, useNavigate} from "react-router-dom";
import database, {auth, storage} from "../firebase"
import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import GoogleButton from "react-google-button";
import LoginStyles from"./Login.module.css";


const googleProvider = new GoogleAuthProvider();

function Login () {


    const[err,setErr] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async (e)=>{
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
     
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
            
        } catch (err){
            setErr(true);

        }
        
  };

  const SignInWithGoogle = async() =>{
        
        
    try{
        await signInWithPopup(auth, googleProvider);
        navigate("/")

    } catch (err){
        console.error(err);
        alert(err.message);
    };
};

    

  
    return(
        <div className={LoginStyles.formContainer}>
            <div className={LoginStyles.formWrapper}>
                <span className={LoginStyles.logo}>Placeholder Title</span>
                <span className={LoginStyles.title}>Login</span>
                <form onSubmit={handleSubmit} className={LoginStyles.formLayout}>
                    <input className={LoginStyles.input__Style} type="email " placeholder="email"/>
                    <input className={LoginStyles.input__Style} type="password" placeholder="password"/> 
                    <button className={LoginStyles.RegisterButton}>Sign in</button>
                    {err && <span>Something went wrong!</span>}
                </form>
                <p className={LoginStyles.RegisterText}>
                    You don't have an account? <Link to="/Register" className={LoginStyles.RegisterLink}>Register</Link> </p>
            <div className={LoginStyles.GoogleButton}>
             <GoogleButton onClick={SignInWithGoogle}/>
          </div>
            </div>
        </div>
    )
}
export default Login