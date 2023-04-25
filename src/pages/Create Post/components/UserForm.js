import React, { useState } from "react";

const UserForm =  () =>{

   // const [counter, setCounter] = useState(0);

    const [getAchiv,setAchiv] =useState([{Achievements : "",checkAcievements : ""}]);

    const [getFormData,setFormData] = useState({
        firstname :"",
        lastname :"",
        phoneNumber : "",
        email : "",
        dob : "",
        gender : "",
    }); 

    const [getErrors,setErrors] = useState({
        firstname : "",
        lastname : "",
        phoneNumber : "",
        email : "",
        dob : "",
        gender : "",
    });

    // console.log(getFormData);
    const increment = () =>{
      setAchiv([...getAchiv,{Achievements : ""}]);
    }
   

    const Remove = (e) =>{
        // console.log("id:",e);
        const removeObj = [...getAchiv];
        removeObj.splice(e,1);
        setAchiv(removeObj);
    }

    const getAchivValues = (e,i) =>{

        //const errorArr = [];
        const newAchivData = [...getAchiv];

        newAchivData[i][e.target.name] = e.target.value;

        setAchiv(newAchivData);
        // console.log(getAchiv);
        

        for(let index = 0 ;index < newAchivData.length;index++)
        {
            if(!newAchivData[index].Achievements.match(/^[A-Za-z]*$/))
            {
                newAchivData[index].checkAcievements = "This should be in text only"
            }else{
                newAchivData[index].checkAcievements = ""
            }
        }
        
        

    }

    // console.log("Achivements",getAchiv);
    // console.log("getErros",getErrors);

    
    // onchange validation on name
    const getFormValues = e =>{
        // console.log("getFormValues");
        const newFormData = {
            ...getFormData,
            [e.target.name]: e.target.value,
        };


        let getErrorsMessage = {};

        setFormData(newFormData);

        console.log(newFormData);

        switch (e.target.name) {
            case 'firstname':
                if(!e.target.value.match(/^[A-Za-z]*$/))
                {
                    setErrors({
                        ...getErrors,
                        firstname : "The First name must be alpabets only"
                    })
                }else{
                    setErrors({
                        ...getErrors,
                        firstname : ""
                    })
                }
                break;
            case 'lastname':
                if(!e.target.value.match(/^[A-Za-z]*$/))
                {
                    setErrors({
                        ...getErrors,
                        lastname : "The Last Name must be alpabets only"
                    })
                }else{
                    setErrors({
                        ...getErrors,
                        lastname : ""
                    })
                }
                break;

            case 'phoneNumber':
                if(!e.target.value.match(/^[0-9]{0,10}$/))
                {
                    setErrors({
                        ...getErrors,
                        phoneNumber : "The range is valid upto 10 digits"
                    })
                }else{
                    setErrors({
                        ...getErrors,
                        phoneNumber : ""
                    })
                }
                break;

            case 'email' :
                if(!e.target.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
                {
                    setErrors({
                        ...getErrors,
                        email : "The email must be in @gmail.com format only"
                    })
                }else{
                    setErrors({
                        ...getErrors,
                        email : ""
                    })
                }
                break;
            case 'dob' :
                const date =new Date(e.target.value) 

                if(date.getFullYear() < 1980)
                {
                    setErrors({
                        ...getErrors,
                        dob : "Your Age is not valid to fill this form !"
                    })
                }else{
                    setErrors({
                        ...getErrors,
                        dob : ""
                    })
                }
                break;
                case 'gender' :
                

                if(e.target.value = "")
                {
                    setErrors({
                        ...getErrors,
                        gender : "required"
                    })
                }else{
                    setErrors({
                        ...getErrors,
                        gender : ""
                    })
                }
                break;
            default:
                break;
        }

        console.log(getErrors);

        // Object.keys(newFormData).map((key,index)=>{

        //     console.log("Selected key",key);

        //     if(newFormData["firstname"])
        //     {
        //         console.log("inside firstname")
        //         const checkFirstName = newFormData.firstname.match(/^[A-Za-z]*$/) ?  "" : "It must be letter only";
        //         getErrorsMessage = {...getErrorsMessage,[key] : checkFirstName}
        //         //setErrors({...getErrors,"firstname" : checkFirstName})
        //     }
        //     if(newFormData["lastname"])
        //     {
        //         const checkLastName = newFormData.lastname.match(/^[A-Za-z]*$/) ?  "" : "It must be letter only";
        //         getErrorsMessage = {...getErrorsMessage,[key] : checkLastName}
        //         //setErrors({"lastname" : checkLastName})
        //     }
        //     if(newFormData["number"])
        //     {
        //         const checkPhoneNumber = newFormData.phoneNumber.match(/^[0-9]{0,10}$/) ?  "" : "It should be only of 10 digits";
        //         getErrorsMessage = {...getErrorsMessage,[key] : checkPhoneNumber}
        //         //setErrors({"phoneNumber" : checkPhoneNumber})
        //     }
        //     if(newFormData["email"])
        //     {
        //         const checkEmail = newFormData.email.match(/^[a-z0-9]+$/) ?  "" : "Email must be @gmail.com format";    
        //         getErrorsMessage = {...getErrorsMessage,[key] : checkEmail}
        //         //setErrors({"email" : checkEmail})
        //     }
        //     if(newFormData["dob"])
        //     {
        //         const getDate = new Date(newFormData.dob);
        //         const checkDate= getDate.getFullYear() < 1980 ? "You age must be valid to fill this fomr" : ""; 
        //         getErrorsMessage = {...getErrorsMessage,[key] : checkDate}

        //         //setErrors({"dob" : checkDate})  
        //     }

        //     console.log("getErrorsMessage",getErrorsMessage);
        // })

        

        //validation for the name
       
            

        // validation for name
          

        // validation for phone number 
           
            // console.log("check phone number",checkPhoneNumber);
        
        // validation for email
            

        // validation for date 
                              

        // validation for Acheivements
          //  const Achievements = newFormData.Achievements
            //const checkAcievements = typeof Achievements === "object" ? [Achievements] : Achievements;
            // console.log("check Acheivements",checkAcievements);

            //setErrors({"firstname" : checkFirstName,"lastname" : checkLastName,"phoneNumber" : checkPhoneNumber,"email" : checkEmail,"dob" : checkDate});



            //console.log("get erros object ",getErrors);
       

       

     
    }

    const submitValidations = (e) =>{

        console.log("inside the validation");
        const validateAchievements = [...getAchiv]
       const validateFormValues = {...getFormData}
       let errorsState = {...getErrors}
        
        console.log("validate Achievements", validateFormValues);
        for(let index = 0 ; index<validateAchievements.length; index++)
        {
            if(validateAchievements[index].Achievements == "")
            {
                e.preventDefault();
                validateAchievements[index].checkAcievements ="Achievements are required";
              
            }else{
                validateAchievements[index].checkAcievements ="";
            }
        }
        setAchiv(validateAchievements);
        console.log("validate foprm cvalues",validateFormValues);
        console.log("validate error values",errorsState);

        Object.keys(validateFormValues).map((value,formindex)=>{
            if(validateFormValues[value] == "")
            {
                e.preventDefault();
                errorsState = {...errorsState,[value]:"required * "};
            }
        })
        setErrors(errorsState)
       
    }

    console.log({getErrors});


    const submitBTN = (e) =>{
        
        submitValidations(e)
    }

  
  
    return(
        <div style={{ color:"white",display:"flex",justifyContent:"center",height :"maxContent"}}>
            <div className="UserForm" style={{border:"3px solid white",borderRadius:"5px",margin:"15px",padding:"1rem"}}>
                <h1>User Info!!</h1>
                
                
                <input style={{width:"100%",height:"40px", borderRadius:"8px",padding:"1rem"}} className="firstname" name="firstname" type="text" placeholder="Enter your name" value={getFormData.firstname } onChange={getFormValues}/>
                <div>
                    {getErrors.firstname ? <span style={{color:'white'}}>{getErrors.firstname}</span> : ""}     
                </div>
                
                <br/>      

                
                <input style={{width:"100%",height:"40px", borderRadius:"8px",padding:"1rem"}} className="last_name" name="lastname" type="text" placeholder="Enter your last name" value={getFormData.lastname} onChange={getFormValues}/>
                <div>
                {getErrors.lastname ? <span style={{color:'white'}}>{getErrors.lastname}</span> : ""}    
                </div>
                
                <br/>

                
                <input style={{width:"100%",height:"40px", borderRadius:"8px",padding:"1rem"}} className="name" type="number" name="phoneNumber"placeholder="Enter your phone number" value={getFormData.phoneNumber} onChange={getFormValues}/>
                <div>
                {getErrors.phoneNumber ? <span style={{color:'white'}}>{getErrors.phoneNumber}</span> : ""}
                </div>
                
                <br/>

                
                <input style={{width:"100%",height:"40px", borderRadius:"8px",padding:"1rem"}} className="name" type="email" name="email" placeholder="Enter your email" value={getFormData.email} onChange={getFormValues} />
                <div>
                {getErrors.email ? <span style={{color:'white'}}>{getErrors.email}</span> : ""}
                </div>
                
                <br/>

                
                <input style={{width:"100%",height:"40px", borderRadius:"8px",padding:"1rem"}} className="name" type="date" name="dob" value={getFormData.dob} onChange={getFormValues} />
                 <div>
                 {getErrors.dob ? <span style={{color:'white'}}>{getErrors.dob}</span> : ""}    
                 </div>
                 
                 <br/>

                 <div className="RadioGroup" style={{display:"flex",justifyContent:"space-between"}}>

                            <div className="form-check">
                            <label>                    
                            <input className="form-check-input" type="radio" value='male' checked={getFormData.gender === 'male'} onChange={getFormValues} name="gender" />
                                male
                            </label>
                            </div>
                            <div className="form-check">
                            <label>
                            <input className="form-check-input" type="radio" value="female" checked={getFormData.gender === 'female'} onChange={getFormValues} name="gender"/>
                               Female
                            </label>
                            </div>

                            <div className="form-check">
                                <label>
                            <input className="form-check-input" type="radio" value="other" checked={getFormData.gender === 'other'} onChange={getFormValues} name="gender" />
                               Others
                            </label>
                            </div>
                            
                            
                </div>
                            <div>
                                {getErrors.gender ? <span style={{color:'white'}}>{getErrors.gender}</span> : ""}
                            </div>
                
                <br/>

                
                {getAchiv.map((item,i) => (
                        <div>   
                            <div>
                            <input style={{height:"40px", borderRadius:"8px",padding:"1rem",marginTop:"10px"}} type="text" id={i} placeholder="Your Achievements" name="Achievements" value={item.Achievements|| ""} onChange={(e) => getAchivValues(e,i)} /> 
                            {
                                !i == 0 ? <button className="btn btn-warning" style={{marginLeft:"5px"}} id={i} onClick={() => Remove(i)}>Remove</button> : ""
                            }
                            </div>
            
                            <div>
                                {/* {console.log("check",item.checkAcievements)} */}
                            <span>{item.checkAcievements}</span>
                            </div>

                            
                        </div>
                        
                ))}
                
                <div style={{marginTop:"8px"}}>
                    <button className="btn btn-light" onClick={increment}>Add More</button>
                </div>
                <div style={{marginTop:"10px",display:"flex",justifyContent:"center"}}>
                    <input type="submit" className="btn btn-success"  onClick={ submitBTN} value="Submit" />
                </div>
                
            </div>
            


        </div>
    )
}

export default UserForm;