import React, { useContext, useEffect, useState } from 'react'
// import { Container } from '../../utils/Container'
import './Add_student.scss'
import { instanse } from '../../api/instanse'
import useFetchData from '../../hooks/useFetchData'
import { userContextData } from '../../Contexts/userContext'
const Add_student = () => {
  
  const [data, isLoading, refreshData] = useFetchData('/users');
  // const [{userDataContext},dispatch]=userContextData();
  const [nameInput , setNameInput]=useState()
  const [userData, setUserData] = useState({
    pos_ref_id: '2',
    fist_name: '',
    last_name: '',
    gender: '',
    contact: '',
    email: '',
    group_ref_id: 1
  });

  // const getList = ()=>{
  //   instanse
  //   .get('/users')
  //   .then((response)=>{
  //     dispatch(
  //       {
  //         type:"userDataContext",
  //         payload:response.data
  //       }
  //     )
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // }
  // useEffect(()=>{
  //   getList()
  // },[])

  // const createUser = (e) => {
  //   e.preventDefault();

  //   instanse
  //     .post('/users', userData)
  //     .then((response) => {
        
  //   getList()
       
  //   setNameInput("")
        
  //     })
  //     .catch((err) => console.log(err));
  // };


//  console.log(userDataContext)


  return (
    <form className='row g-3 form m-auto pb-5' onSubmit={createUser}>
      <p className='form__title'>Yangi oquvchi qoshish</p>
      <div className='col-md-4'>
        <label htmlFor='name' className='form-label'>
          O'quvchi ismi
        </label>
        <input 
          type='text'
          className='form-control' 
          id='name'
          value={nameInput}
          onChange={e =>{setUserData({...userData ,fist_name:e.target.value})}} 
           />
      </div>
      <div className='col-md-4'>
        <label htmlFor='tel' className='form-label'>
          Telefon raqami
        </label>
        <input 
          value={nameInput}

        type='tel' 
        className='form-control' 
        id='tel'
        onChange={e =>{setUserData({...userData ,contact:e.target.value})}} 
         />
      </div>
      <div className='col-md-4'>
        <label htmlFor='yonalish' className='form-label'>
          Yo'nalish
        </label>
        <select 
        id='yonalish' 
        className='form-select'
        onChange={e =>{setUserData({...userData ,group_ref_id:e.target.value})}} 
        >
          <option value='1' defaultValue>
            Dasturlash
          </option>
          <option value='2'>Grafig dzayner</option>
          <option value='3'>Java</option>
          <option>Python</option>
        </select>
      </div>
      <div className='col-md-4'>
        <label htmlFor='ota_name' className='form-label'>
          Ota-onasi ismi
        </label>
        <input 
          value={nameInput}

        type='text' 
        className='form-control' 
        id='ota_name' 
        onChange={e =>{setUserData({...userData ,last_name:e.target.value})}} 
        />
      </div>
      <div className='col-md-4'>
        <label htmlFor='ota_tel' className='form-label'>
          Jinsi
        </label>
        <select 
        id='jinsi' 
        className='form-select'
        onChange={e =>{setUserData({...userData ,gender:e.target.value})}} 
        >
          <option value='1' defaultValue>
            Erkak
          </option>
          <option value='2'>Ayol</option>
        </select>
      </div>
      <div className='col-md-4'>
        <label htmlFor='Email' className='form-label'>
          Email
        </label>
        <input 
          value={nameInput}
        
        type='email' 
        className='form-control' 
        id='Email' 
        onChange={e =>{setUserData({...userData ,email:e.target.value})}} 
        />
      </div>

      <div className='col-12 d-flex'>
        <button type='submit'  className='btn btn__add btn-primary ms-auto'>
          Qo'shish
        </button>
      </div>
    </form>
  )
}

export default Add_student
