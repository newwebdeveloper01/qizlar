import React from 'react'
import './Group_list.scss'
import {MdDeleteOutline , MdOutlineSearch} from  "react-icons/md"
import Card_group from '../card_group/Card_group'
import useFetchData from '../../hooks/useFetchData'

const Group_list = () => {
  const [data , isLoding]=useFetchData("/groups");
  console.log(data)
  return (
    <>
        <div className='d-flex w-100'>
        <p className='Group_list__title'>Mavjud guruhlar</p>
        

            <div className="w-25 ms-auto me-5 pe-4">


                <div className="form">
                  <i className="fa fa-search"><MdOutlineSearch/></i>
                  <input type="text" className="form-control form-input" placeholder="Search anything..."/>

                  
                  
                </div>
                
              
            </div>
            
          </div>
          <div className='d-flex card_list align-items-center justify-content-center'>

          
            {!isLoding ? (
            data.map(product =><Card_group key={product.gr_id} product={product} /> )
          ) : (
            <p className='loding'>Loding...</p>
          )}
          </div>
     
    </>
  )
}

export default Group_list
