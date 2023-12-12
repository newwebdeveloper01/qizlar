import React from 'react'
import './Group_list_atten.scss'
import {MdDeleteOutline , MdOutlineSearch} from  "react-icons/md"
import Card_group_atten from '../atten_card_group/Card_group_atten'

const Group_list_atten = () => {
  return (
    <>
        <div className='d-flex w-100'>
        <p className='Group_list_atten__title'>Mavjud guruhlar</p>
        

            <div className="w-25 ms-auto me-5 pe-4">


                <div className="form">
                  <i className="fa fa-search"><MdOutlineSearch/></i>
                  <input type="text" className="form-control form-input" placeholder="Search anything..."/>

                  
                  
                </div>
                
              
            </div>
            
          </div>
          <div className='d-flex card_list align-items-center justify-content-center'>
          <Card_group_atten/>

          
          </div>
     
    </>
  )
}

export default Group_list_atten
