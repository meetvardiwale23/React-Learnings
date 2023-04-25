import React from "react";
const months = ["JAN 2023","FEB 2023","MARCH 2023","APR 2023","MAY 2023","JUNE 2023","JULY 2023","AUG 2023","SEPT 2023","OCT 2023","NOV 2023","DEC 2023"]
const transactionType = ["Home Expense","Personal Expense","Income"];

const TransacForm = () =>{
    return(
        <section class="gradient-custom">
  <div class="container my-5 py-5">
    <div class="row d-flex justify-content-center py-5">
      <div class="col-md-7 col-lg-5 col-xl-4">
        <div class="card" style={{bordeRadius: "15px;"}}>
          <div class="card-body p-4">
            <form>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="form-outline">
                <label class="form-label" for="typeText">Card Number</label>
                  <input type="date" id="transactionDate" name="transactionDate" class="form-control form-control-lg" siez="17" />
 
                </div>
                
              </div>

             {/* Month Year */}
              <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="form-outline">
                  
                  <label class="form-label">Month Year</label>
                  <div>
                  <select className="transactionName">
                    <option value="" disabled selected hidden>Select Month Year</option>
                    {months.map((key,index)=>(
                        <option key={index} value={index}>{key}</option>
                    ))}
                  </select>
                  </div>
                  
                </div>
              </div>

              {/* Transaction type */}
              <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="form-outline">
                  
                  <label class="form-label">Transaction Type</label>
                  <div>
                  <select>
                    <option value="" disabled selected hidden>Select Month Year</option>
                    {months.map((key,index)=>(
                        <option key={index} value={index}>{key}</option>
                    ))}
                  </select>
                  </div>
                  
                </div>
              </div>


              <div class="d-flex justify-content-between align-items-center pb-2">
                <div class="form-outline">
                  <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="MM/YYYY"
                    size="7"  minlength="7" maxlength="7" />
                  <label class="form-label" for="typeExp">Expiration</label>
                </div>
                <div class="form-outline">
                  <input type="password" id="typeText2" class="form-control form-control-lg"
                    placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                  <label class="form-label" for="typeText2">Cvv</label>
                </div>
                <button type="button" class="btn btn-info btn-lg btn-rounded">
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

export default TransacForm;