import React from "react";
import { useNavigate } from "react-router-dom";


const Landings = () =>{

    const navigate = useNavigate();

    const Transacform  = () =>{
        navigate('/Transcform');
    }

    return(
        <div>
            <h1>Welcome To Expense-Tracker React App</h1>
            <h2>Make Your Transactions Smooth</h2>
            <p>Make Your Transactions <button type="button" onClick={Transacform}>Make Payment</button></p>
        </div>
    )
}   

export default Landings