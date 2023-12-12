import React, { useState } from 'react'
import "./styled.css"
import { useNavigate} from 'react-router-dom';
import { instanse } from '../../../api/instanse';

const Registration = () => {
  const navigate=useNavigate();
  // "gmail":"nurullayevakbar30@gmail.com",
  // "contact":"`998913340282`"
  const [userData , setUserData]=useState({
    gmail:"",
    contact:""
  });
  console.log(userData);
  const login=(e)=>{
    e.preventDefault();
    // console.log(userData)
    instanse.post("/admin",userData)
    .then(response=>
      {
        console.log(response)
      if(response.status==200){
        navigate("/")
      }

    }
    )
    .catch(err=>console.log(err))

  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={login}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Ism</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ism"
              onChange={e =>{setUserData({...userData ,gmail:e.target.value})}} 

            />
          </div>
          <div className="form-group mt-3">
            <label>Familiya</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Familiya"
              onChange={e =>{setUserData({...userData ,gmail:e.target.value})}} 

            />
          </div>
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

export default Registration