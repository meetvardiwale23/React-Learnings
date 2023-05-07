import React from "react";
import { ProtectedComponents } from "../ProtectedComponents";

const auth = (ProtectedComponents) =>{
    
    //check is user islooged in
    return function checkAuthntified(props)
    {
        let isUserLogIn = false;
        const loggedIn =  JSON.parse(localStorage.getItem('isUserLoggedIn'));

        if(loggedIn != null)
        {
            isUserLogIn = true
        }

        return <ProtectedComponents {...props} isUserLogIn={isUserLogIn} />
    }
}