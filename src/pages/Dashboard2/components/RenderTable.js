import React, { useState }  from "react";
import { SingleTable } from "./SingleTable";

export const RenderTable = ()=>{

    //first get the local storage data
    
    
    const storageData =  JSON.parse(localStorage.getItem('FormData'));
    
    const [maindata,setMainData] = useState(storageData)
    // console.log("mainstate",maindata);
    // console.log("local storage", storageData);
    // implement the states
    

    return(
        <div>
             <nav className="navbar " style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container-fluid">
            <a href="#!" className="navbar-brand">Navbar</a>
            <form className="d-flex">
            <div style={{display:"flex",justifyContent:"space-around",gap:"40px"}}>

              <select >
              <option value="" disabled selected hidden>
                              Select Group BY
                            </option>
                <option value="transactionDate">Transaction Date</option>
                <option value="monthYear">Month Year</option>
                <option value="transactionType">Transaction Type</option>
                <option value="fromAccount">From Account</option>
                <option value="toAccount">To Account</option>
                <option value="amount">Amount</option>
                <option value="notes">Notes</option>
              </select>
             
              </div>
            </form>
          </div>
        </nav>

        <SingleTable data={maindata} />
        </div>
    )
}