import React, { useState } from 'react';
import './Login.css'; 
import { auth } from '../../firebase';
import {  signInWithEmailAndPassword } from 'firebase/auth';

import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
     
      email : "",
      password :""
    });
  
    
    
    const handleEmailChange = (event) => {
      setValues({ ...values, email: event.target.value });
    };
    
    const handlePasswordChange = (event) => {
      setValues({ ...values, password: event.target.value });
    };
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
  
      if(!values.email || !values.password){
          alert("Fill all the fields")
      }
  
      signInWithEmailAndPassword(auth, values.email , values.password).then(async(res)=>{
         
          navigate("/news")
      })
          .catch((e)=>console.log(e))
    };
  
    console.log(values)
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
