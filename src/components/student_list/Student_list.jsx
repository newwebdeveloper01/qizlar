import React, { useEffect, useState } from 'react'
import './Student_list.scss'
import { MdDeleteOutline, MdOutlineSearch } from 'react-icons/md'
import useFetchData from '../../hooks/useFetchData'
import { instanse , data_delete } from '../../api/instanse'
import { userContextData } from '../../Contexts/userContext'

const Student_list = () => {
  let raqam = 1;

  const [data, isLoading] = useFetchData('/users')
  // // const [{userDataContext} , dispatch]=userContextData();
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

  
  // const deleteUser = (e) => {
  //   data_delete
  //     .delete(`/users/${e}`)
  //     .then((response) => {

        
  //       getList()
       
  //     })
  //     .catch((err) => console.log(err));
  // };


  // console.log(userDataContext)

  

  return (
    <>
      <div className='d-flex w-100'>
        <p className='student_list__title'>Bizning o’quvchilar</p>

        <div className='w-25 ms-auto me-5 pe-4'>
          <div className='form'>
            <i className='fa fa-search'>
              <MdOutlineSearch />
            </i>
            <input
              type='text'
              className='form-control form-input'
              placeholder='Search anything...'
            />
          </div>
        </div>
      </div>
      {!isLoading ? (
        <table className='table table-striped table-hover accordion '>
          <thead>
            <tr>
              <th scope='col'>№</th>
              <th scope='col'>O’quvchi ismi</th>
              <th scope='col'>Telefon nomer</th>
              <th scope='col'>Yo’nalish</th>
              <th scope='col'>Ota-ona(F.I.SH)</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
         {userDataContext.map(users=>
            <tr key={users.users_id} >
              <th scope='row'>{raqam++}</th>
              <td>{users.fist_name}</td>
              <td>{users.contact}</td>
              <td>{users.group_id}</td>
            <td>{users.last_name}</td>
              <td>
                <MdDeleteOutline 
                onClick={e=>{deleteUser(users.users_id)}}

                />
              </td>
            </tr>
           
          )}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Student_list
