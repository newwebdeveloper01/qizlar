import React from 'react'
// import { Container } from '../../utils/Container'
import "./Add_group.scss"
import { useState } from 'react'
import { instanse } from '../../api/instanse'
const Add_group = () => {
  const [userData, setUserData] = useState({
    gr_number: "",
    dir_ref_id: "",
    gr_kuni:"",
    gr_vaqt:""
  })

  const createUser=(e)=>{
    e.preventDefault();
    // console.log(userData)
    instanse.post("/groups",userData)
    .then(response=>
      {
        console.log(response)
      

    }
    )
    .catch(err=>console.log(err))

  }
  return (
    <form className="row g-3 form m-auto pb-5" onSubmit={createUser}>
    <p className='form__title'>Yangi guruh qo’shish</p>
  <div className="col-md-4">
    <label htmlFor="yonalish" className="form-label"> Guruh yo’nalishi</label>    
    <select id="yonalish" className="form-select" onChange={e =>{setUserData({...userData ,dir_ref_id:e.target.value})}}>
      <option value="1" defaultValue>Java</option>
      <option value="2">Node Js</option>
      <option value="3">Python</option>
      <option value="5"> Grafig dzayner</option>
    </select>
  </div>
   <div className="col-md-4">
    <label htmlFor="gr_number" className="form-label">Guruh raqami</label>
    <input type="text" className="form-control" id="gr_number" onChange={e =>{setUserData({...userData ,gr_number:e.target.value})}}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="tel" className="form-label">  Dars kunlari</label>
    <input type="tel" className="form-control" id="tel" onChange={e =>{setUserData({...userData ,gr_kuni:e.target.value})}}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="gr_vaqt" className="form-label">  Dars vaqti</label>
    <input type="text" className="form-control" id="gr_vaqt" onChange={e =>{setUserData({...userData ,gr_vaqt:e.target.value})}}/>
    
  </div>    
 
  {/* <div className="col-md-4">
    <label htmlFor="ota_tel" className="form-label"> O’qituvchi tell nomeri</label>
    <input type="tel" className="form-control" id="ota_tel" onChange={e =>{setUserData({...userData ,fist_name:e.target.value})}}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="rasm" className="form-label">  O’qituvchi rasmi (3x4)</label>
    <input type="file" className="form-control" id="rasm" onChange={e =>{setUserData({...userData ,fist_name:e.target.value})}}/>
    
  </div>  */}
 
  <div className="col-12 d-flex">
    <button type="submit" className="btn btn__add btn-primary ms-auto">Qo'shish</button>
  </div>
</form>

  )
}

export default Add_group
