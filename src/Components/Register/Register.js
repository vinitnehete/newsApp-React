
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

import './Register.css'
const Register = () => {

    const navigate = useNavigate()
  const [values, setValues] = useState({
    name : "",
    email : "",
    password :""
  });

  const handleNameChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };
  
  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  
  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your registration logic here

    if(!values.email || !values.name || !values.password){
        alert("Fill all the fields")
    }

    createUserWithEmailAndPassword(auth, values.email , values.password).then(async(res)=>{
        console.log(res)
        const user = res.user
       await updateProfile(user,{
            displayName:values.name
        })
        navigate("/login")
    })
        .catch((e)=>console.log(e))
  };

  console.log(values)

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleNameChange}
        />
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

        <p >
            <Link to="/login">Already have an Account </Link>
            
            </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
