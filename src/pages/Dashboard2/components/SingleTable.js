import React, { useEffect } from "react";
import { useState } from "react";

// // stpes for sorting
// make empty state for sotring the data of props 
// make the another state for the sorting keep cloumn name ad order in that state
// notes always clone the state data before using it


//todays lernings 
// fill method this mesthod is use to fill the value insdie the array
// eg arr.fil(0) output will be the [0,0,0]
export const SingleTable = ({data})=>{

   
    console.log("props data",data);

    //show the recordes per page
    let recordPerPage = 2;
    //console.log(data.length);
    let startpage = 0 ;
    let endpage = recordPerPage;

    const totalCount  =  Math.ceil(data.length / recordPerPage);
   // console.log("Array",Array(totalCount));
    //console.log("total count",totalCount);

    //set turn for the array


    const [propData,setPropsData] = useState(data)
    const [filterData,setfilterdata] =  useState([])
    const [currentPage,setcurrentPage] = useState(0)
    const [sorting,setSorting] =  useState({
        column : "",
        order : "ASC"
    })

    // let checkTurn = []; 
    // useEffect(()=>{
    //     if(propData)
    //     {
    //         checkTurn = [...propData]
    //     }else{
    //         checkTurn = [...filterData]
    //     }
    // },[]);
    //intitally load the pager per data

    // useEffect(()=>{
    //         const localStorage  = data.slice(0,recordPerPage)
    //         setPropsData(localStorage)
        
    // }, [data])
    
    // useEffect(()=>{
    //     const globalData =  data;
    //     setPropsData(globalData)
    // },[])
    
    //sorting function
    const handleSort = (colName,type) =>{
        //console.log('cloName',colName ,"type",type );

        const cloneData = [...data];
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

                console.log("props data 1",propData);   
                setfilterdata(cloneData)
                

                setSorting({column : colName , order : "DSC"})

                console.log(sorting);
            }else if( sorting.order === "DSC")
            {
                
                cloneData.sort((a, b) => {
                    if (a[colName][0] > b[colName][0]) return -1;
                    if (a[colName][0] < b[colName[0]]) return 1;
                    return 0;
                  });
                 
                    
                  
                 setSorting({column : colName , order : null})

            }else{
                handlePagination(currentPage)

                setSorting({column : colName ,order : "ASC"})
            }
            
             

             break;

             case "number" :
                if (!(sorting.column === colName) || sorting.order === "ASC") {
                    cloneData.sort((a, b) => {
                      return a[colName] - b[colName];
                    });
          
                    setfilterdata(cloneData);
                   
                    setSorting({ column: colName, order: "DSC" });
                    
                  } else if (sorting.order === "DSC") {
                    cloneData.sort((a, b) => {
                      return b[colName] - a[colName];
                    });
                    setfilterdata(cloneData);
                    
                    setSorting({ column: colName, order: null });

                    
                  } else {
                    // setData(local_Data);
                    
                    handlePagination(currentPage)
                    
                    setSorting({column : colName, order: "ASC" });
                  }
                  break;
            
            case "date" :
                if (!(sorting.column === colName) || sorting.order === "ASC") {
                    cloneData.sort((a, b) => {
                      return new Date(a[colName]) - new Date(b[colName]);
                    });
          
                    setfilterdata(cloneData);
                    
                    setSorting({ column: colName, order: "DSC" });
                  } else if (sorting.order === "DSC") {
                    cloneData.sort((a, b) => {
                      return new Date(b[colName]) - new Date(a[colName]);
                    });
                    setfilterdata(cloneData);
                    
                    setSorting({column: colName, order: null });
                  } else {
                    //setData(local_Data);
                    handlePagination(currentPage)
                    setSorting({ column : colName, order: "ASC" });
                  }
                  break;
            default :
            break;
        }
    }


    //handle pagination function
    const handlePagination  = (index)=>{
        
       

        startpage = recordPerPage * index ;
        
        
        endpage = recordPerPage * index + recordPerPage;
        
        
        
        // console.log("pagination prop data",propData);

        const sortedData = [...filterData];
        const globalData =  [...propData];
        //console.log("global data og pagination",globalData);

      if(sortedData.length>0)  
      {

            setfilterdata(sortedData.slice(
            startpage , endpage
     )) 
     
            console.log("sortded state",propData);
      }else{
        
        setPropsData(data.slice(
            startpage , endpage
     )) 

        // setPropsData([...propData, sliceGlobData]) 
        // console.log("glob pagination ",propData);
      }
        

        setcurrentPage(index)
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

                            
                            {filterData.length>0 ? 
                            
                            filterData.slice(startpage,endpage).map((keys,index)=>(
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
                             ))
                            
                            :
                            
                            propData.slice(startpage,endpage).map((keys,index)=>(
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
                        <div style={{display:"flex",justifyContent:"center",margin:"auto"}}>
                        {Array(totalCount).fill(0).map((page,index)=>(
                            
                                <button className="page-link" key={index} onClick={()=> handlePagination(index)}>{index + 1}</button>
                            
                        ))}
                        </div>
        </div>
    )
}