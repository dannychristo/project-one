import React from "react";
import GoogleButton from "react-google-button";
import {Link} from "react-router-dom";
import "./Signin.css";
import {auth} from "./firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


const Register = () => {
    return(
        <div className= "formContainer">
            <div className= "formWrapper">
                <form>
                    <input type = "text" placeholder="display name"/>
                    <input type = "email" placeholder="email"/>
                    <input type = "password" placeholder="password"/>
                    <input type = "file"/>
                    <button> Sign in</button>
                </form>
            </div>
        </div>
    )
}



function googleSignIn () {

    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
} 

function Signin()  {
    const [user] =useAuthState(auth)
    console.log(user)

    return (
<Link to={`/Login_page/`}>
          <div className="google__button"> <GoogleButton onClick={googleSignIn}/>
          </div>
        </Link> 
      
    )
}


export default Signin