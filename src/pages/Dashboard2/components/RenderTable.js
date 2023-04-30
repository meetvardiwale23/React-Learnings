import React, { useState }  from "react";
import { SingleTable } from "./SingleTable";

// import all the arrays 
import { months,transactionTypeArr,fromAccount } from "../../Transaction Form/components/TransacForm";

export const RenderTable = ()=>{

    //first get the local storage data
    
    
    const storageData =  JSON.parse(localStorage.getItem('FormData'));
    
    const [maindata,setMainData] = useState(storageData)
    const [orderBy,setOrderBy] =  useState([])
    const [groupByTitle,setGroupByTitle] = useState()
    console.log("mainstate", maindata);
    
    // console.log("local storage", storageData);
    // implement the states
    maindata.map((keys)=>{
      console.log(keys)
})
    maindata.filter((val)=>{
      console.log("val",val);
    })
    
    const handleGroupBy = (e) =>{
      
      const groupName = e.target.value;
     setGroupByTitle(e.target.value)

      // pushing the data into the array
      const a = []
      switch(groupName){
        case "monthYear" :
          months.map((orgValue)=>{
            return a.push(maindata.filter((val)=>{
              return val[e.target.value] === orgValue
            }))
          })
       
        break;

        case "fromAccount" :
          fromAccount.map((orgValue)=>{
            return a.push(maindata.filter((val)=>{
              return val[e.target.value] === orgValue
            }))
          })
       
          break;

        case "toAccount" : 
         fromAccount.map((orgValue)=>{
          return a.push(maindata.filter((val)=>{
            return val[e.target.value] === orgValue
          }))
         })
     
         break;

         setOrderBy(a)
      }
      console.log("a",a);
      console.log("order by", orderBy);

    }

    console.log("order by data", orderBy);

    return(
        <div>
             <nav className="navbar " style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container-fluid">
            <a href="#!" className="navbar-brand">Navbar</a>
            <form className="d-flex">
            <div style={{display:"flex",justifyContent:"space-around",gap:"40px"}}>

              <select  onChange={(e) => handleGroupBy(e)}>
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