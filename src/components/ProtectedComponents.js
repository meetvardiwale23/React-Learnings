import React, { useEffect } from "react";
import { Routes, useNavigate } from "react-router-dom";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import TransacForm from './pages/Transaction Form/components/TransacForm';
  
//   import { RenderTable } from './pages/Dashboard2/components/RenderTable';
  

export const ProtectedComponents = (props)=>{

    const navigate = useNavigate()

    console.log("props",props);

    //check if user is not loggedin
    useEffect(()=>{
        if(!props.isUserLogIn)
        {
            navigate('/login')
        }
    })

    return(
        <div>
            {props.isUserLogIn && 
            
            <Routes>
                <Route path="/Transcform" element={<TransacForm />} />
                
                 {/* <Route path="/version2" element={<RenderTable />} /> */}
            </Routes>}
        </div>
    )
}