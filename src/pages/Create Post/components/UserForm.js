import React, { useState } from "react";

const UserForm =  () =>{

   // const [counter, setCounter] = useState(0);

    const [getAchiv,setAchiv] =useState([{Achievements : ""}]);

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
        achievements : [{}],
    });

    console.log(getFormData);
    const increment = () =>{
      setAchiv([...getAchiv,{Achievements : ""}]);
    }
   

    const Remove = (e) =>{
        console.log("id:",e);
        const removeObj = [...getAchiv];
        removeObj.splice(e,1);
        setAchiv(removeObj);
    }

    const getAchivValues = (e,i) =>{

        //const errorArr = [];
        const newAchivData = [...getAchiv];

        newAchivData[i][e.target.name] = e.target.value;

        setAchiv(newAchivData);
        console.log(getAchiv);
        

        for(let index = 0 ;index < newAchivData.length;index++)
        {
            if(!newAchivData[i].Achievements.match(/^[A-Za-z]*$/))
            {
                newAchivData[index].checkAcievements = "This should be in text only"
            }else{
                newAchivData[index].checkAcievements = ""
            }
        }
        
        // const checkAcievements = newAchivData[i].Achievements.match(/^[A-Za-z]*$/) ? " " : "should be text only for : " ;
        // //console.log({checkAcievements},getErrors.achievements[i], {i});
        // //setErrors({...getErrors,achievements : [{...getErrors.achievements[i],achievements:checkAcievements}]});

        // setErrors({
        //     ...getErrors,
        //     achievements : [{...getErrors.achievements[i] , achievements : checkAcievements}]
        // });

        // console.log("errors",{...getErrors,achievements : [{...getErrors.achievements[i],achievements:checkAcievements}]});

    }

    console.log("Achivements",getAchiv);
    console.log("getErros",getErrors);

    
    // onchange validation on name
    const getFormValues = e =>{
        console.log("getFormValues");
        const newFormData = {
            ...getFormData,
            [e.target.name]: e.target.value,
        };
        setFormData(newFormData);

        

        //validation for the name

        
       
            const checkFirstName = newFormData.firstname.match(/^[A-Za-z]*$/) ?  "" : "It must be letter only";

        // validation for name
            const checkLastName = newFormData.lastname.match(/^[A-Za-z]*$/) ?  "" : "It must be letter only";

        // validation for phone number 
            const checkPhoneNumber = newFormData.phoneNumber.match(/^[0-9]{0,10}$/) ?  "" : "It should be only of 10 digits";
            console.log("check phone number",checkPhoneNumber);
        
        // validation for email
            const checkEmail = newFormData.email.match(/^[a-z0-9]+$/) ?  "" : "Email must be @gmail.com format";    

        // validation for date 
            const getDate = new Date(newFormData.dob);
            const checkDate= getDate.getFullYear() < 1980 ? "You age must be valid to fill this fomr" : "";                    

        // validation for Acheivements
            const Achievements = newFormData.Achievements
            const checkAcievements = typeof Achievements === "object" ? [Achievements] : Achievements;
            console.log("check Acheivements",checkAcievements);

            setErrors({"firstname" : checkFirstName,"lastname" : checkLastName,"phoneNumber" : checkPhoneNumber,"email" : checkEmail,"dob" : checkDate});



        console.log("get erros object ",getErrors);
       

       

     
    }

    const AchievementsValidations = () =>{

        

    }

    const submit = (e) =>{
        e.prevenetDefault();
        AchievementsValidations()
    }

  
  
    return(
        <div>
            <div className="UserForm">
                <h1>User Information</h1>
                
                <label>name : </label>{console.log(getErrors)}
                <input className="firstname" name="firstname" type="text" placeholder="Enter your name" value={getFormData.firstname } onChange={getFormValues}/>
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

                
                

                <button onClick={increment}>+</button>

                {getAchiv.map((item,i) => (
                        <div>   
                            <label>Achievements</label>
                            <input type="text" id={i} placeholder="Your Achievements" name="Achievements" value={getAchiv[i].Achievements} onChange={(e) => getAchivValues(e,i)} />
                             
                            {
                                !i == 0 ? <button id={i} onClick={() => Remove(i)}>Remove</button> : ""
                            }
                            <span>{item.checkAcievements}</span>
                        </div>
                        
                ))}

                <button type="submit" onClick={(e)=> submit}>Submit</button>
            </div>
            


        </div>
    )
}

export default UserForm;