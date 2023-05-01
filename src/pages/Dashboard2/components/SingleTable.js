import React, { useEffect } from "react";
import { useState } from "react";

// // stpes for sorting
// make empty state for sotring the data of props 
// make the another state for the sorting keep cloumn name ad order in that state
// notes always clone the state data before using it
export const SingleTable = ({data})=>{

   
    console.log("props data",data);

    const [propData,setPropsData] = useState([])
    const [sorting,setSorting] =  useState({
        column : "",
        order : "ASC"
    })
    
    // intially when page is loaded the store thr pors data in state
    useEffect(()=>{
        const getData = data;
        setPropsData(getData);
    },[data])

    //sorting function
    const handleSort = (colName,type) =>{
        console.log('cloName',colName ,"type",type );

        const cloneData = [...propData];
        // sorting logic
        switch(type){
            case "string" :

            if(!(sorting.column === colName) || sorting.order === "ASC")
            {
                cloneData.sort((a,b)=>{
                    if(a[colName][0] < b[colName][0])return -1
                    if(a[colName][0] > b[colName][0])return 1
                    return 0
                })

                setPropsData(cloneData)
                setSorting({column : colName , order : "DSC"})

                console.log(sorting);
            }else if( sorting.order === "DSC")
            {
                
                cloneData.sort((a, b) => {
                    if (a[colName][0] > b[colName][0]) return -1;
                    if (a[colName][0] < b[colName[0]]) return 1;
                    return 0;
                  });
                 
                  setPropsData(cloneData)
                 setSorting({column : colName , order : null})

            }else{
                setPropsData(data)
                setSorting({column : colName ,order : "ASC"})
            }
            
             console.log("youa re the string type");

             break;

             case "number" :
                if (!(sorting.column === colName) || sorting.order === "ASC") {
                    cloneData.sort((a, b) => {
                      return a[colName] - b[colName];
                    });
          
                    setPropsData(cloneData);
                    setSorting({ column: colName, order: "DSC" });
                  } else if (sorting.order === "DSC") {
                    cloneData.sort((a, b) => {
                      return b[colName] - a[colName];
                    });
                    setPropsData(cloneData);
                    setSorting({ column: colName, order: null });
                  } else {
                    // setData(local_Data);
                    
                    setPropsData(data)
                    setSorting({column : colName, order: "ASC" });
                  }
                  break;
            
            case "date" :
                if (!(sorting.column === colName) || sorting.order === "ASC") {
                    cloneData.sort((a, b) => {
                      return new Date(a[colName]) - new Date(b[colName]);
                    });
          
                    setPropsData(cloneData);
                    setSorting({ column: colName, order: "DSC" });
                  } else if (sorting.order === "DSC") {
                    cloneData.sort((a, b) => {
                      return new Date(b[colName]) - new Date(a[colName]);
                    });
                    setPropsData(cloneData);
                    setSorting({column: colName, order: null });
                  } else {
                    //setData(local_Data);
                    
                    setSorting({ column : colName, order: "ASC" });
                  }
                  break;
            default :
            break;
        }
    }
    
    return(
        <div>
            <table className="table">
                        <thead className="table-dark">
                            <tr >
                            <th scope="col" onClick={() => handleSort("transactionDate","date")}>Transaction Date</th>
                            <th scope="col" onClick={() => handleSort("monthYear","date")}>Month Year</th>
                            <th scope="col" onClick={() => handleSort("transactionType","string")}>Transaction Type</th>
                            <th scope="col" onClick={() => handleSort("fromAccount","string")}>From Account</th>
                            <th scope="col" onClick={() => handleSort("toAccount","string")}>To Account</th>
                            <th scope="col" onClick={() => handleSort("amount","number")}>Amount</th>
                            <th scope="col"  >Recepit</th>
                            <th scope="col" onClick={() => handleSort("notes","string")}>notes</th>
                            </tr>
                        </thead>

                        <tbody>

                            {propData.map((keys,index)=>(
                                  <tr key={index}>
                                  <th name="transactionDate">{keys.transactionDate}</th>
                                  <th name="transactionDate">{keys.monthYear}</th>
                                  <th name="transactionDate">{keys.transactionType}</th>
                                  <th name="transactionDate">{keys.fromAccount}</th>
                                  <th name="transactionDate">{keys.toAccount}</th>
                                  <th name="transactionDate">{keys.amount}</th>
                                  <th name="transactionDate"><img src={keys.receipt} alt="images" style={{height:"100px",width:"100px"}}/></th>
                                  <th name="transactionDate">{keys.notes}</th>
                                  </tr>
                            ))}
                           
                                  
                       
                            
                        </tbody>
        </table>
        </div>
    )
}