import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../landing/Landing.css';


export default function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Email/Password is required!");
      return;
    } 
    else if(email != "abc@gmail.com" || password != "pass") {
      setError("Incorrect Email/Password!");
      return;
    }
    else {
      navigate("/dashboard");
    }
  };

  return (
    <div className='landing__page-container'>
      <div className='landing__page-empty'></div>
      <div className='landing__page-form'>     
        <h2 className='login__heading'>Login</h2>
        {error && <p className="error" >
        Email/Password is Incorrect!
          </p>
        }
        <form className='login-form'>
          <label className='login__label'>
            Email Address
            <input type="email" className="login__input" value={email} onChange={e => setEmail(e.target.value)} required />   
          </label>    
          <label className='login__label'>
            Password
            <input type="password" className='login__input' value={password} onChange={e => setPassword(e.target.value)} required /> 
          </label>        
          <label className='login__label-check'>
            <input type="checkbox" className='login__checkbox' />
            Remember Password
          </label>
          <button className='login__btn' type="button" onClick={submitForm}>Login</button>
        </form>
      </div> 
    </div>
  )
}
