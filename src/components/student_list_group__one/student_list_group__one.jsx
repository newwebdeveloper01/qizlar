import React from 'react'
import './student_list_group__one.scss'
import useFetchData from '../../hooks/useFetchData'


const Student_list = () => {
  let raqam =1
  let idcha=window.location.href.split("").reverse().join("").split('/')
  const [data , isLoding]=useFetchData(`/groups/${idcha[0]}`);
  //  console.log(data)
const ustoz=data?.Users?.filter(user=>user.pos_ref_id!=1)
console.log(ustoz)
  return (
    <>
        
      
      <div className='d-flex w-100 flex-wrap'>

      {!isLoding ? (
        <table className='table table-striped table-hover accordion '>
          <thead>
            <tr>
              <th scope='col'>№</th>
              <th scope='col'>O’quvchi ismi</th>

              <th scope='col'>Ota-ona(F.I.SH)</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
         {ustoz?.map(users=>
            <tr key={users.users_id} >
              <th scope='row'>{raqam++}</th>
              <td>{users.fist_name}</td>
              
            <td>{users.last_name}</td>
              <td>
               <input type='checkbox'></input>
              </td>
            </tr>
           
          )}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
      <button className='ms-auto w-25 me-5' type='submit'>Saqlash</button>
      </div>

    </>
  )
}

export default Student_list
