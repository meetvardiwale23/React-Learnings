import React, { useState } from "react";

const UserForm =  () =>{

    const [counter, setCounter] = useState(0);
    const [getFormData,setFormData] = useState({
        firstname :"",
        lastname :"",
        phoneNumber : "",
        email : "",
        dob : "",
        gender : "",
        Achievements : ""
        
    }); 

    const [getErrors,setErrors] = useState({
        firstname : "",
        lastname : "",
        phoneNumber : "",
        email : "",
        dob : "",
    });

    console.log(getFormData);
    const increment = () =>{
        setCounter(counter  + 1);
        console.log("counter",counter);
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }

    // onchange validation on name
    const getFormValues = e =>{
        
        const newFormData = {
            ...getFormData,
            [e.target.name]: e.target.value,
        };
        setFormData(newFormData);

        //validation for the name

        
       
            const checkFirstName = newFormData.firstname.match(/^[A-Za-z\s]*$/) ?  "" : "It must be letter only";

        // validation for name
            const checkLastName = newFormData.lastname.match(/^[A-Za-z\s]*$/) ?  "" : "It must be letter only";

        // validation for phone number 
            const checkPhoneNumber = newFormData.phoneNumber.match(/^[0-9\s]{0,10}$/) ?  "" : "It should be only of 10 digits";
            console.log("check phone number",checkPhoneNumber);
        
        // validation for email
            const checkEmail = newFormData.email.match(/^[a-z0-9\s]+$/) ?  "" : "Email must be @gmail.com format";    

        // validation for date 
            const getDate = new Date(newFormData.dob);
            const checkDate= getDate.getFullYear() < 1980 ? "You age must be valid to fill this fomr" : "";                    

        // validation for Acheivements
            const Achievements = newFormData.Achievements
            const checkAcievements = typeof Achievements === "object" ? [Achievements] : Achievements;
            console.log("check Acheivements",checkAcievements);

            setErrors({"firstname" : checkFirstName,"lastname" : checkLastName,"phoneNumber" : checkPhoneNumber,"email" : checkEmail,"dob" : checkDate});



        console.log("get erros object ",getErrors);
        // const checkLastName = newFormData.lastname.match(/^[a-zA-Z]+$/) ?  "" : "It must be letter only";
        // setErrors(checkLastName)


        console.log("getFormData",getFormData);
        console.log("first name :",getFormData.firstname);
        console.log(getFormData.firstname.match(/^[a-zA-Z]+$/) ? 
        "": "only letters");


        // setErrors('Erros')
        // console.log("getErrors",getErrors);
        //console.log("form data",newFormData);
    }

  
  
    return(
        <div>
            <div className="UserForm">
                <h1>User Information</h1>
                
                <label>name : </label>
                <input className="firstname" name="firstname" type="text" placeholder="Enter your name" value={getFormData.firstname} onChange={getFormValues}/>
                {getErrors.firstname ? <span style={{color:'red'}}>{getErrors.firstname}</span> : ""} 
                <br/>      

                <label>last name : </label>
                <input className="last_name" name="lastname" type="text" placeholder="Enter your last name" value={getFormData.lastname} onChange={getFormValues}/>
                {getErrors.lastname ? <span style={{color:'red'}}>{getErrors.lastname}</span> : ""}
                <br/>

                <label>phone number :  </label>
                <input className="name" type="number" name="phoneNumber"placeholder="Enter your phone number" value={getFormData.phoneNumber} onChange={getFormValues}/>
                {getErrors.phoneNumber ? <span style={{color:'red'}}>{getErrors.phoneNumber}</span> : ""}
                <br/>

                <label>email : </label>
                <input className="name" type="email" name="email" placeholder="Enter your email" value={getFormData.email} onChange={getFormValues} />
                {getErrors.email ? <span style={{color:'red'}}>{getErrors.email}</span> : ""}
                <br/>

                <label>D.O.B : </label>
                <input className="name" type="date" name="dob" value={getFormData.dob} onChange={getFormValues} />
                {getErrors.dob ? <span style={{color:'red'}}>{getErrors.dob}</span> : ""}
                <br/>

                <label>
                <input type="radio" value='male' checked={getFormData.gender === 'male'} onChange={getFormValues} name="gender" />
                    male
                </label>

                <label>
                <input type="radio" value="female" checked={getFormData.gender === 'female'} onChange={getFormValues} name="gender"/>
                   Female
                </label>

                <label>
                <input type="radio" value="other" checked={getFormData.gender === 'other'} onChange={getFormValues} name="gender" />
                   Others
                </label>
                <br/>

                <label>Achievements</label>
                <input  type="text" placeholder="Your Achievements" name="Achievements" value={getFormData.Achievements} onChange={getFormValues} />

                <button onClick={increment}>+</button>

                {Array.from(Array(counter)).map((id,index) =>{
                    return (
                    <div>
                        <label>Achievements</label>
                        <input key={id} id={index} type="text"placeholder="
                        Your Achievements" name="Achievements" value={getFormData.Achievements} onChange={getFormValues} />
                        <button onClick={decrement}>-</button>
                    </div>
                    )
                })}
            </div>
            


        </div>
    )
}

export default UserForm;