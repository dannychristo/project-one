import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Context folder/AuthContext";



const ProtectedRoute = ({children}) => {

    const {currentUser} = useContext(AuthContext);
    if (!currentUser) {
    return <Navigate to= "/Login_page" replace/>;

    }
    return children;
};
export default ProtectedRoute;  
