import React from 'react'
import './Student_list_pay.scss'
import {MdDeleteOutline , MdOutlineSearch , MdDoneAll} from  "react-icons/md"
import useFetchData from '../../hooks/useFetchData'

const   Student_list = () => {
  let raqam=1
  const [data , isLoding]=useFetchData("/incomes");
  console.log(data)
  return (
    <>
        <div className='d-flex w-100'>
        <p className='student_list__title'>To’lov qilganlar (shu oy bo’yicha) </p>
        

            <div className="w-25 ms-auto me-5 pe-4">


                <div className="form">
                  <i className="fa fa-search"><MdOutlineSearch/></i>
                  <input type="text" className="form-control form-input" placeholder="Search anything..."/>
                  
                </div>
                
              
            </div>
            
          </div>
       {!isLoding ? (
 <table className='table table-striped table-hover accordion '>
        <thead>
          <tr>
            <th scope='col'>№</th>
            <th scope='col'>O’quvchi ismi</th>
            <th scope='col'>Telefon nomer</th>
            <th scope='col'>Yo’nalish</th>
            <th scope='col'>To'lov miqdori</th>
            <th>To’lov vaqti</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='tbody'>
        {
          data.map(user=> 
          <tr key={user.User.users_id}>
            <th scope='row'>{raqam++}</th>
            <td>{user.User.fist_name}</td>
            <td>{user.User.contact}</td>
            <td>{user.User.Group.Direction.dir_name} {user.User.Group.gr_number}</td>
            <td>{user.amount}</td>
            <td>{user.inc_time}</td>
            <td>
            <MdDoneAll/>
            </td>

          </tr>
        
       )
        }
        </tbody>
      </table>
       ):(
        <p>Loding...</p>
       )

       }
     
    </>
  )
}

export default Student_list
