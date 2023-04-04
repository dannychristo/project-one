import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Logout from "./Register folder/Logout";
import ProfileContent from "./Profile folder/ProfileContent";
import Login from "./Register folder/Login";



function LoginPage() {
    
    const [user] = useAuthState(auth)
    console.log(user)
    

    return(
        <div>
            <div className="LoginPage__Style">
            {user ? <ProfileContent/> : <Login/>}
        </div>
        </div>
        
    )
}


export default LoginPage