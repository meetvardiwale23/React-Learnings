//Number(nm).toLocaleString("en-IN") converting it it currency

import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";


export const months = [
  "JAN 2023",
  "FEB 2023",
  "MARCH 2023",
  "APR 2023",
  "MAY 2023",
  "JUNE 2023",
  "JULY 2023",
  "AUG 2023",
  "SEPT 2023",
  "OCT 2023",
  "NOV 2023",
  "DEC 2023",
];
export const transactionTypeArr = ["Home Expense", "Personal Expense", "Income"];

export const fromAccount = [
  "Personal Account",
  "Real Living",
  "My Dream Home",
  "Full Circle",
  "Core Relators",
  "Big Block",
];

export const fileType = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];

// eslint-disable-next-line no-unused-vars
//let fileName = "";

const TransacForm = () => {
  // state for form values
  const [getFormValues, setFormValues] = useState({
    transactionDate: "",
    monthYear: "",
    transactionType: "",
    fromAccount: "",
    toAccount: "",
    amount: "",
    receipt: "",
    notes: "",
  });

  const [getErros, setErrors] = useState({
    transactionDate: "",
    monthYear: "",
    transactionType: "",
    fromAccount: "",
    toAccount: "",
    amount: "",
    receipt: "",
    notes: "",
    checkAccounts: "",
  });

  // collecting the fomr values
  const handleValues = (e) => {
    

    const storeFomValues = {
      ...getFormValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(storeFomValues);
    switch (e.target.name) {
      case "transactionDate":
        //const trnsactionDate = e.target.value
        if (e.target.value) {
          setErrors({
            ...getErros,
            transactionDate: "",
          });
        }

        break;
      case "monthYear":
        //const monthYear = e.target.value

        if (e.target.value) {
          setErrors({
            ...getErros,
            monthYear: "",
          });
        }
        break;

      default:
        break;

      case "transactionType":
        
        if (e.target.value) {
          setErrors({
            ...getErros,
            transactionType: "",
          });
        }
        break;

      case "fromAccount":
        
        if (e.target.value) {
          setErrors({
            ...getErros,
            fromAccount: "",
          });
        }
        break;

      case "toAccount":
        
        if (e.target.value) {
          setErrors({
            ...getErros,
            toAccount: "",
          });
        }

        break;

      case "amount":
        if (e.target.value < 0) {
          setErrors({
            ...getErros,
            amount: "The Ampunt must be atleast greater then 0",
          });
        } else {
          setErrors({
            ...getErros,
            amount: "",
          });
        }
        break;

      case "notes":
        
        if (e.target.value.length < 240) {
          setErrors({
            ...getErros,
            notes: "",
          });
        } else {
          setErrors({
            ...getErros,
            notes: "The length of your notes must be less then 240",
          });
        }

        break;
    }
  };

  const version2 = ()=>{
    navigate('/version2');
  }

  const submit = (e) => {
    const validateFormValues = { ...getFormValues };
    let sendError = { ...setErrors };
    let errorExist = {...getErros}

    Object.keys(validateFormValues).map((key, index) => {

      if (validateFormValues[key] === "") {
       
        sendError = { ...sendError, [key]: "required*" };
      }
      else if(validateFormValues['fromAccount'] === validateFormValues['toAccount']){
        sendError = { ...sendError, 'checkAccounts': "From account and to account can not be same" };
      }else{
        sendError = { ...sendError, [key]: "" };
      }

      e.preventDefault();

    });
    
  
      setErrors(sendError);

    // checking the error values and pushed data into the local storage

    const checkError  = Object.values(errorExist).filter((item) => item !== "") 

    if(checkError.length === 0){
     
      console.log("check local ", localStorage.getItem('FormData'));
      if(localStorage.getItem('FormData'))
      {
      
        let get = JSON.parse(localStorage.getItem('FormData'));
        let addData = [...get]
        if(addData)
        {
          addData.push(getFormValues);

          
          localStorage.setItem("FormData", JSON.stringify(addData));
        }
        else{

  

          console.log("still fetching the value");
        }
        
      }else{

    
        
        localStorage.setItem("FormData",JSON.stringify([getFormValues]));
      }
    }else{
      return;
    }
   
  };
  const navigate = useNavigate()
  const toHome = ()=>{
    navigate('/dashboard')
  }
  const toPay = ()=>{
    navigate('/Transcform')
}

  return (
    <div>

<header>
        <nav class="navbar " style={{ backgroundColor: "#e3f2fd" }}>
          <div class="container-fluid">
            <a class="navbar-brand">Navbar</a>
            <form class="d-flex">
              <div style={{display:"flex",justifyContent:"space-around",gap:"40px"}}>
              <button
                class="btn btn-outline-dark"
                style={{ textDecoration: "none" }}
                onClick={toPay}
                type="button"
              >
               Make Payment
              </button>

              <button
                class="btn btn-outline-dark"
                style={{ textDecoration: "none" }}
                onClick={toHome}
                type="button"
              >
                Home
              </button>

              <button
                class="btn btn-outline-dark"
                style={{ textDecoration: "none" }}
                onClick={version2}
                type="button"
              >
                version2
              </button>
              </div>
           
            </form>
          </div>
        </nav>
      </header>
      
      <section className="gradient-custom">
      <div className="container ">
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-7 col-lg-5 col-xl-7">
            <div className="card" style={{ bordeRadius: "15px;" }}>
              <div className="card-body p-4">
                <form>
                  <div
                    className="section1"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    {/* Transaction Date */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="form-outline">
                        <label className="form-label" for="typeText">
                          Transaction Date
                        </label>
                        <input
                          type="date"
                          id="transactionDate"
                          name="transactionDate"
                          className="form-control form-control-lg"
                          value={getFormValues.transactionDate}
                          onChange={handleValues}
                        />
                      </div>
                      <div>
                        {getErros.transactionDate ? (
                          <label style={{ color: "red" }}>
                            Date is {getErros.transactionDate}
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="section2"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    {/* Month Year */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-outline">
                        <label className="form-label">Month Year</label>
                        <div>
                          <select
                            classNameName="transactionName"
                            name="monthYear"
                            value={getFormValues.monthYear}
                            onChange={handleValues}
                          >
                            <option value="" disabled selected hidden>
                              Select Month Year
                            </option>
                            
                            {months.map((key, index) => (
                              <option key={index} value={key}>
                                {key}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          {getErros.monthYear ? (
                            <label style={{ color: "red" }}>
                              Month Year is {getErros.monthYear}
                            </label>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Transaction type */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-outline">
                        <label className="form-label">Transaction Type</label>
                        <div>
                          <select
                            className="transactionType"
                            name="transactionType"
                            value={getFormValues.transactionType}
                            onChange={handleValues}
                          >
                            <option value="" disabled selected hidden>
                              Select Transaction Type
                            </option>
                            {transactionTypeArr.map((key, index) => (
                              <option key={index} value={key}>
                                {key}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          {getErros.transactionType ? (
                            <label style={{ color: "red" }}>
                              transaction Type is {getErros.transactionType}
                            </label>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="section3"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    {/* from Account */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-outline">
                        <label className="form-label">From Account</label>
                        <div>
                          <select
                            className="fromAccount"
                            name="fromAccount"
                            value={getFormValues.fromAccount}
                            onChange={handleValues}
                          >
                            <option value="" disabled selected hidden>
                              Select From Account
                            </option>
                            {fromAccount.map((key, index) => (
                              <option key={index} value={key}>
                                {key}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
              
                          {getErros.fromAccount ? (
                            <label style={{ color: "red" }}>
                              Account is {getErros.fromAccount}
                            </label>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    {/* To Account */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-outline">
                        <label className="form-label">To Account</label>
                        <div>
                          <select
                            className="toAccount"
                            name="toAccount"
                            value={getFormValues.toAccount}
                            onChange={handleValues}
                          >
                            <option value="" disabled selected hidden>
                              Select To Account
                            </option>
                            {fromAccount.map((key, index) => (
                              <option key={index} value={key}>
                                {key}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          {getErros.toAccount ? (
                            <label style={{ color: "red" }}>
                              Account is {getErros.toAccount}
                            </label>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {getErros.checkAccounts ? (
                    
                    <div className="sameAccountError">
                      <label style={{ color: "red" }}>
                        {getErros.checkAccounts}
                      </label>
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    class="section4"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    {/* amount */}
                    <div className="d-flex justify-content-between align-items-center pb-2">
                      <div className="form-outline">
                        <label className="form-label" for="typeExp">
                          Amount
                        </label>
                        <input
                          type="number"
                          id="Amount"
                          name="amount"
                          value={getFormValues.amount}
                          onChange={handleValues}
                          className="form-control form-control-lg"
                          placeholder="Enter Amount"
                        />
                      </div>
                      <div>
                        {getErros.amount ? (
                          <label style={{ color: "red" }}>
                            Ammount is {getErros.amount}
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    {/* base64 image */}
                    <div className="d-flex justify-content-between align-items-center pb-2">
                      <div className="form-outline">
                        <label className="form-label" for="typeExp">
                          Receipt
                        </label>

                        <FileBase64
                          type="file"
                          name="file"
                          value={getFormValues.receipt}
                          multiple={false}
                          onDone={(file) => {
                        
                            if (fileType.includes(file.type)) {
                              //fileName = file;

                              setFormValues((prev) => ({
                                ...prev,
                                receipt: file.base64,
                              }));
                        
                              setErrors({ ...getErros, receipt: "" });
                             
                            } else {
                              alert("The image dould be only this format");
                            }
                          }}
                        ></FileBase64>
                      </div>
                      <div>
                        {getErros.receipt ? (
                          <label style={{ color: "red" }}>
                            Image file is {getErros.receipt}
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="section5"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    {/* notes */}
                    <div className="d-flex justify-content-between align-items-center pb-2">
                      <div className="form-outline">
                        <label className="form-label" for="typeExp">
                          Notes
                        </label>
                        <input
                          type="textArea"
                          id="notes"
                          name="notes"
                          value={getFormValues.notes}
                          onChange={handleValues}
                          className="form-control form-control-lg"
                          notes
                          placeholder="Enter Notes"
                        />
                      </div>
                      <div>
                        {getErros.notes ? (
                          <label style={{ color: "red" }}>
                            Ammount notes is {getErros.notes}
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    {/* submit */}
                    <div>
                      <button
                        type="submit"
                        onClick={submit}
                        className="btn btn-info btn-lg btn-rounded"
                        style={{ marginTop: "50px" }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </div>

 
   
  );
};

export default TransacForm;
