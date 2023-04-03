import React from "react";
import GoogleButton from "react-google-button";
import {Link, useNavigate} from "react-router-dom";
import "./GoogleSignin.css";
import database, {auth} from "../firebase"
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";



    const googleProvider = new GoogleAuthProvider();

    function GoogleSignin() {
        
        
        const navigate = useNavigate()
        const SignInWithGoogle = async() =>{
        
        
        try{
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;
            const q = query(collection(database, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0){
                await addDoc(collection(database, "users"), {
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    
                });

                navigate("/")
            }

        } catch (err){
            console.error(err);
            alert(err.message);
        };
    };



    const [user] =useAuthState(auth)
    console.log(user)

    return (

          <div className="google__button">
             <GoogleButton onClick={SignInWithGoogle}/>
          </div>
            
      
    );
};
    



export default GoogleSignin
