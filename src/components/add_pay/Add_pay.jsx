import React from 'react'
// import { Container } from '../../utils/Container'
import "./Add_pay.scss"
import { instanse } from '../../api/instanse'
import { useState } from 'react'
const Add_pay = () => {
  const [userData, setUserData] = useState({
    user_ref_id:"",
    reason:"",
    amount:"",
    inc_time:""
  })

  const createUser=(e)=>{
    e.preventDefault();
    // console.log(userData)
    instanse.post("/incomes",userData)
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

  // console.log(data)
  return (
    <form className="row g-3 form m-auto pb-5" onSubmit={createUser}>
    <p className='form__title'>To’lov qilish</p>
  <div className="col-md-4">
    <label htmlFor="name" className="form-label">O’quvchi id</label>
          
    <input type="text" className="form-control" id="name" onChange={e =>{setUserData({...userData ,user_ref_id:e.target.value})}} />
  </div>
  <div className="col-md-4">
    <label htmlFor="text" className="form-label">Holat</label>
    <input type="text" className="form-control" id="text" onChange={e =>{setUserData({...userData ,reason:e.target.value})}}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="tel" className="form-label">Miqdori %</label>
    <input type="tel" className="form-control" id="tel" onChange={e =>{setUserData({...userData ,amount:e.target.value})}}/>

  </div>    
  
  <div className="col-md-4">
    <label htmlFor="date" className="form-label">To’lov qilayotgan kun</label>
    <input type="date" className="form-control" id="date" onChange={e =>{setUserData({...userData ,inc_time:e.target.value})}}/>
  </div>
   
 
  <div className="col-md-4 mt-5 d-flex">
    <button type="submit" className="btn btn__add btn-primary ms-auto">Qo'shish</button>
  </div>
</form>

  )
}

export default Add_pay
