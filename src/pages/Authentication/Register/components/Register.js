import React, { useEffect, useState } from "react";

export const Register = () => {
  //get the user values and store it in the state

  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [validation,setValidation] = useState({
    userName : "",
    email : "",
    password : ""
  })

  //store all the values in state
  const handleValues = (e) => {
    const setObj = {
      ...userData,
      [e.target.name]: e.target.value,
    };

    setUserData(setObj);

    switch(e.target.name){

        case 'uesrName' :
         const userName = e.target.value;
         const validUser = userName.match(/^([a-z0-9]*[a-z]){4,15}[a-z0-9]*$/i) ? "" :"The user name charcter must atleast 4 character and alpabets and digits only"
         console.log("valid user",validUser);
         setValidation({...validation,userName : validUser})
        break;
        
        case 'email' :
          const email = e.target.value;
          const validEmail = !e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? "It must be in @gmail format" : "";
          setValidation({...validation,email : validEmail})
          break;

        case 'password' : 
          const validPassword = !e.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) ? "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number" : ""
          setValidation({...validation, password : validPassword})
         break;

        default:
        break;
    }

  };


  const handleSubmit = (e) => {
    let fetchAllValues = {...userData}
    let sendErrors = {...validation}

    Object.keys(fetchAllValues).map((items)=>{
        if(fetchAllValues[items] === "")
        {
            sendErrors = {...sendErrors, [items] : "Field is required*"}
        }
        else{
            sendErrors = {...sendErrors, [items] : ""}
        }

        setValidation(sendErrors)   
    })
    console.log("fetching all values", fetchAllValues);


    e.preventDefault()

  }


  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label style={{color:"red"}}>{validation.userName ? validation.userName : ""}</label>
                            <input
                              type="text"
                              name="uesrName"
                              onBlur={handleValues}
                              id="userName"
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <label style={{color:"red"}}>{validation.email ? validation.email : ""}</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              onBlur={handleValues}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <label style={{color:"red"}}>{validation.password ? validation.password : ""}</label>
                            <input
                              type="password"
                              id="password"
                              name="password"
                              onChange={handleValues}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
