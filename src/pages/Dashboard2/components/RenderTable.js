import React, { useState }  from "react";
import { SingleTable } from "./SingleTable";
import { useNavigate } from "react-router-dom";

// import all the arrays 
//import { months,transactionTypeArr,fromAccount } from "../../Transaction Form/components/TransacForm";

export const RenderTable = ()=>{

    const navigate = useNavigate();
    //first get the local storage data    
    const storageData =  JSON.parse(localStorage.getItem('FormData'));
    
    const [maindata,setMainData] = useState(storageData)
    const [orderBy,setOrderBy] =  useState([])
    const [groupByTitle,setGroupByTitle] = useState()
    const [searchData,setSearchData] = useState([{
      searchString : ""
    }]);

    
    
    const handleGroupBy = (e) =>{
     
      let finalData = []
      const selectedValue = e.target.value;  
     const result = maindata.reduce((a,b)=>{
        a[b[selectedValue]] = a[b[selectedValue]] || [] 
        a[b[selectedValue]].push(b);
        return a;
    },{})
     Object.keys(result).map((groupedData,index)=>{
         finalData.push(result[groupedData])  
     })
   
      setOrderBy(finalData)
}
    


  // handle search function
  const handlerSearch = (val)=>{
      setSearchData({...searchData,searchString : val.target.value})
  } 

  const navigateToForm = ()=>{
    navigate("/Transcform")
  }
  

    return(
        <div>
             <nav className="navbar " style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container-fluid">
            <a href="#!" className="navbar-brand">Navbar</a>
            <form className="d-flex">
            <div style={{display:"flex",justifyContent:"space-around",gap:"40px"}}>

              <div>
                <button onClick={navigateToForm}>Make Payment</button>
              </div>
              <div>
                  <input type="text"  onChange={handlerSearch} placeholder="search"/>
              </div>

              <div>
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
              
             
              </div>
            </form>
          </div>
        </nav>
        
        {orderBy? orderBy.map((keyData,index)=>(
            <div>
                
                <SingleTable  data={keyData} search={searchData}/>

            </div>
        )): setOrderBy([])}

              {orderBy.length === 0 ?  
               <div>
                <SingleTable  data={maindata} search={searchData} />
              </div> :""} 

        {/* <SingleTable data={maindata} />} /> */}
        </div>
    )
}