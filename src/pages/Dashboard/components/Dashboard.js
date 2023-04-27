/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


let globalFlag = 1;
let globBoolean = true;
let setTo1 = true

const Dashboard = () => {

    const navigate = useNavigate(); 
    const [getStateLocalStorage,setLocalStorage] = useState([]);
    
    //setting the old Data from local Storage
    //const [getOldData,setOldData] = useState([])
    const oldData = JSON.parse(localStorage.getItem('FormData'));
    console.log("old Data ",oldData);



    const toHome = ()=>{
        navigate('/dashboard');
    }

    const toPay = ()=>{
        navigate('/Transcform')
    }


    useEffect(()=>{
        try{
           const tableData =  JSON.parse(localStorage.getItem('FormData'))
           setLocalStorage(tableData)
           

        }catch(error){
            console.log(error);
        }
    },[])
    
    const handleSort = (e) =>{
        // eslint-disable-next-line default-case
        switch(e){
            case "transaction date":

               
                if(globalFlag === 1 && globBoolean)
                {
                const sortedDESC = [...getStateLocalStorage].sort((a,b)=> new Date(b.transactionDate).getTime() > new Date(a.transactionDate).getTime()  ? -1  : 1 );
                 setLocalStorage(sortedDESC);
                globalFlag = 2; 
                globBoolean = false;
                 console.log("flag",globalFlag);
                 console.log("in if only");
            }
            else if(globalFlag === 2 && globBoolean === false){

                console.log("in else only"); 
                const sortedDESC = [...getStateLocalStorage].sort((a,b)=> new Date(a.transactionDate).getTime() > new Date(b.transactionDate).getTime()  ? -1  : 1 );
                setLocalStorage(sortedDESC)
                globalFlag = 3; 
                globBoolean = true
            } else if(globalFlag === 3)
            {
                
                setLocalStorage(oldData);
                console.log("getOldData in set state",getStateLocalStorage);
                globalFlag = 1
            }
               break;

           case "month year":
               


            if(globalFlag ===1 && globBoolean)
            {
                const sortedDESC = [...getStateLocalStorage].sort((a,b)=> new Date(b.monthYear).getMonth()> new Date(a.monthYear).getMonth()  ? -1  : 1 );
                 setLocalStorage(sortedDESC);
                globalFlag = 2; 
                globBoolean = false
                 console.log("flag",globalFlag);
                 console.log("in if only");
            }
            else if(globalFlag === 2 && globBoolean === false){

                console.log("in else only"); 
                const sortedDESC = [...getStateLocalStorage].sort((a,b)=> new Date(a.monthYear).getMonth() > new Date(b.monthYear).getMonth()  ? -1  : 1 );
                setLocalStorage(sortedDESC)
                globalFlag = 3;
                globBoolean = true
            }
            else if(globalFlag === 3)
            {
                
                setLocalStorage(oldData);
                console.log("getOldData in set state",getStateLocalStorage);
                globalFlag = 1
            }
               break;
             
            case "transaction type":
                


            if(globalFlag === 1 && globBoolean)
            {
                
                const sortedASC = [...getStateLocalStorage].sort((a,b)=>a.transactionType.localeCompare(b.transactionType));
                 setLocalStorage(sortedASC);
                 globalFlag = 2; 
                 globBoolean = false
                 console.log("flag",globalFlag);
                 console.log("in if only");
            }
            else if(globalFlag === 2 && globBoolean === false){

                console.log("in else only");
                
                const sortedDESC = [...getStateLocalStorage].sort((a,b)=>a.transactionType.localeCompare(b.transactionType)).reverse();
                setLocalStorage(sortedDESC)
                globalFlag = 3;
                globBoolean = true
            }else if(globalFlag === 3)
            {
                
                setLocalStorage(oldData);
                console.log("getOldData in set state",getStateLocalStorage);
                globalFlag = 1
            }
                break;
            
            case "from account" :
                


                console.log("else flag",globalFlag);
                if(globalFlag === 1 && globBoolean)
                {
                    
                    const sortedASC = [...getStateLocalStorage].sort((a,b)=>a.fromAccount.localeCompare(b.fromAccount));
                     setLocalStorage(sortedASC);
                    globalFlag = 2; 
                    globBoolean = false
                     console.log("flag",globalFlag);
                     console.log("in if only");
                }
                else if(globalFlag === 2 && globBoolean === false){

                    console.log("in else only");
                    
                    const sortedDESC = [...getStateLocalStorage].sort((a,b)=>a.fromAccount.localeCompare(b.fromAccount)).reverse();
                    setLocalStorage(sortedDESC)
                    globalFlag = 3;
                    globBoolean =  true;
                }else if(globalFlag === 3)
                {
                    
                    setLocalStorage(oldData);
                    console.log("getOldData in set state",getStateLocalStorage);
                    globalFlag = 1
                }
                 
             break;
             case  "to account":

             

                if(globalFlag === 1 && globBoolean)
                {
                    
                    const sortedASC = [...getStateLocalStorage].sort((a,b)=>a.toAccount.localeCompare(b.toAccount));
                     setLocalStorage(sortedASC);
                    globalFlag = 2; 
                    globBoolean = false
                     console.log("flag",globalFlag);
                     console.log("in if only");
                }
                else if(globalFlag === 2 && globBoolean === false){

                    console.log("in else only"); 
                    const sortedDESC = [...getStateLocalStorage].sort((a,b)=>a.toAccount.localeCompare(b.toAccount)).reverse();
                    setLocalStorage(sortedDESC)
                    globalFlag = 3;
                    globBoolean = true
                }else if(globalFlag === 3)
                {
                    
                    setLocalStorage(oldData);
                    console.log("getOldData in set state",getStateLocalStorage);
                    globalFlag = 1
                } 
                break;
            case "amount" :
               
                
                if(globalFlag ===  1 && globBoolean)
                {
                    const sortedASC = [...getStateLocalStorage].sort((a,b)=> a.amount - b.amount )
                     setLocalStorage(sortedASC);
                     globalFlag = 2; 
                     globBoolean = false
                     console.log("flag",globalFlag);
                     console.log("in if only");
                }
                else if(globalFlag === 2 && globBoolean === false){

                    console.log("in else only"); 
                    const sortedDESC = [...getStateLocalStorage].sort((a,b)=> b.amount - a.amount );
                    setLocalStorage(sortedDESC)
                    globalFlag = 3;
                    globBoolean = true

                }else if(globalFlag === 3)
                {
                    
                    setLocalStorage(oldData);
                    console.log("getOldData in set state",getStateLocalStorage);
                    globalFlag = 1
                } 
                break;
            case "notes" :
               
            
            if(globalFlag ===  1 && globBoolean)
            {
                
                const sortedASC = [...getStateLocalStorage].sort((a,b)=>a.notes.localeCompare(b.notes));
                 setLocalStorage(sortedASC);
                globalFlag = 2; 
                globBoolean = false;
                 console.log("flag",globalFlag);
                 console.log("in if only");
            }
            else if(globalFlag === 2 && globBoolean === false){

                console.log("in else only"); 
                const sortedDESC = [...getStateLocalStorage].sort((a,b)=>a.notes.localeCompare(b.notes)).reverse();
                setLocalStorage(sortedDESC)
                globalFlag = 3;
                globBoolean = true;
            } else if(globalFlag === 3)
            {
                
                setLocalStorage(oldData);
                console.log("getOldData in set state",getStateLocalStorage);
                globalFlag = 1
            }
                break;
            }
    }

    //console.log("state tramnsaction date",getStateLocalStorage.map((date)=>date.transactionDate));
  return (
    <div className="dashboradContainer">
      <header>
        <nav className="navbar " style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container-fluid">
            <a href="#!" className="navbar-brand">Navbar</a>
            <form className="d-flex">
            <div style={{display:"flex",justifyContent:"space-around",gap:"40px"}}>
              <button
                className="btn btn-outline-dark"
                style={{ textDecoration: "none" }}
                onClick={toPay}
                type="button"
              >
               Make Payment
              </button>

              <button
                className="btn btn-outline-dark"
                style={{ textDecoration: "none" }}
                onClick={toHome}
                type="button"
              >
                Home
              </button>
              </div>
            </form>
          </div>
        </nav>
      </header>


      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col" >Transaction Date <i className="fa-solid fa-arrow-down-a-z" onClick={() => handleSort("transaction date")} ></i></th>
            <th scope="col" >Month Year <i className="fa-solid fa-arrow-down-a-z" onClick={() => handleSort("month year")} ></i></th>
            <th scope="col">Transaction Type <i className="fa-solid fa-arrow-down-a-z" onClick={() => handleSort("transaction type")} ></i></th>
            <th scope="col" >From Account <i className="fa-solid fa-arrow-down-a-z"   onClick={() => handleSort("from account")}></i></th>
            <th scope="col">To Account <i className="fa-solid fa-arrow-down-a-z"   onClick={() => handleSort("to account")}></i></th>
            <th scope="col">Amount <i className="fa-solid fa-arrow-down-a-z"   onClick={() => handleSort("amount")}></i></th>
            <th scope="col">Recepit</th>
            <th scope="col">Notes <i className="fa-solid fa-arrow-down-a-z"   onClick={() => handleSort("notes")}></i></th>
          </tr>
        </thead>
        <tbody>
        {getStateLocalStorage.length > 0 ? getStateLocalStorage.map((data,index)=>{
           
            return(<tr>
                <td key={index}>{data.transactionDate}</td>
                <td>{data.monthYear}</td>
                <td>{data.transactionType}</td>
                <td>{data.fromAccount}</td>
                <td>{data.toAccount}</td>
                <td>{Number(data.amount).toLocaleString('er-IN')}</td>
                <td><img src={data.receipt} alt="Image" style={{height:"100px",width:"100px"}}/></td>
                <td>{data.notes}</td>
            </tr>)
        }):""}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
