import React, { useState } from 'react'
import "./Auth.scss"
import { useNavigate} from 'react-router-dom';
import { instanse } from '../../api/instanse';

const Auth = () => {
  const navigate=useNavigate();
  // "gmail":"nurullayevakbar30@gmail.com",
  // "contact":"`998913340282`"
  const [userData , setUserData]=useState({
    gmail:"",
    contact:""
  });
  // console.log(userData);

  const login=(e)=>{
    e.preventDefault();
    instanse.post('/admin',userData).then(res=>{
      console.log(res.data);
      if(res.data.status==200){
        localStorage.setItem('token',res.data.access__token);
        navigate('/');
      }
    })
  }
  
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={login}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={e =>{setUserData({...userData ,gmail:e.target.value})}} 

            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={e =>{setUserData({...userData ,contact:e.target.value})}} 

            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Auth