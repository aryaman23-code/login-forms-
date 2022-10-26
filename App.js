
import './App.css';
import {useState,useRef} from "react"
import FormInputs from './components/FormInputs';
function App() {
  const [values, setValues]=useState({
    username:"",
    password:"",
    errorMessage:"",
    confirmPassword:"",
    

});

const inputs=[{
  id:1,
  name:"Username",
  type:"text",
  placeholder:"username",
  errorMessage:"Username should be between 5-16 characters long and shouldn't include special character ",
  label:"Username",
  required:true,
  pattern:"^[a-zA-Z0-9]{3,16}$",

},
{
  id:2,
  name:"password",
  type:"password",
  placeholder:"password",
  errorMessage:"Password should be 8-20 characters and include 1 letter, 1 number and 1 special character ",
  label:"Password",
  required:true,
  pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
},
{
  id:3,
  name:"confirmPassword",
  type:"password",
  placeholder:"confirm password",
  errorMessage:"Passwords don't match",
  label:"Confirm Password",
  pattern:values.password,
  required:true,
}
]
  const handleSubmit =(e) =>{
      e.preventDefault();
      const data= new FormData(e.target.value );
    
  }

  const onChange=(e) =>{
    setValues({...values,[e.target.name] : e.target.value})

  }
  return (
   
    <div className="login">
      <div className="login__container">
      {/* <img src="https://images-platform.99static.com//Iu3_S2uU_rMffo4gBCEukpd6yQE=/500x185:1203x888/fit-in/500x500/99designs-contests-attachments/79/79995/attachment_79995130" alt="" /> */}
       <form onSubmit={handleSubmit}>
       {inputs.map((input) =>(
        <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
       ))}
        <button type="submit" >Submit</button>
       </form>
       </div>
    </div>
  );
}

export default App;
