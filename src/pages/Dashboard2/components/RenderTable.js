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
//     maindata.map((keys)=>{
//       console.log(keys)
// })
    // maindata.filter((val)=>{
    //   console.log("val",val);
    // })
    
    const handleGroupBy = (e) =>{
     
     
     
      let finalData = []
      const selectedValue = e.target.value;
    
    
    const result = maindata.reduce((a,b)=>{
        a[b[selectedValue]] = a[b[selectedValue]] || [] 
        a[b[selectedValue]].push(b);
        return a;
    },{})
    console.log("results",result);
   
    Object.keys(result).map((groupedData,index)=>{
        
       // console.log("keys",result[groupedData]);
         finalData.push(result[groupedData])  
   })
   //console.log("final Data",finalData);
         setOrderBy(finalData)
     }
    

    console.log("order by data", orderBy);

    return(
        <div>
             <nav className="navbar " style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container-fluid">
            <a href="#!" className="navbar-brand">Navbar</a>
            <form className="d-flex">
            <div style={{display:"flex",justifyContent:"space-around",gap:"40px"}}>

              <select  onChange={  handleGroupBy}>
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

        {orderBy? orderBy.map((keyData,index)=>(
            <div>
                
                <SingleTable  data={keyData} />
            </div>
        )): setOrderBy([])}

              {orderBy.length === 0 ?  <div>
                
                <SingleTable  data={maindata} />
            </div> :""} 
        {/* <SingleTable data={maindata} />} /> */}
        </div>
    )
}