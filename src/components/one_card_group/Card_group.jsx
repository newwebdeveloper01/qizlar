import React, { useEffect, useState } from 'react'
import "./Card_group.scss"
import { NavLink, useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'

const Card_group = () => {
  const {id} = useParams()
const [users, setUsers] = useState([])

     const [data , isLoding]=useFetchData(`/groups/${id}`);

// console.log(data);

 return (
   <>
    <div className='card  m-2'>
    <NavLink  to={`/guruh/${data.gr_id}`}>
       
            <div className='card__title  d-flex align-items-center justify-content-center'>

          {data?.Direction?.dir_name}
                
            </div>
            <div className='card__info d-flex align-items-center'>
            <img className='teacher__images m-2 ' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="rasm" />

            {/* { product.images.length>0 && product.images[0].startsWith("https://") ?
                                <img className='productt__top__images' src={product.images} alt="rasms" />
                                :
                                <img className='productt__top__images' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="rasm" />
                                } */}
            <div className='card__info__right ms-4'>
            <div className='d-flex card__info__right__dec  d-flex mb-2'><p className='card__info__right__dec__bold me-2'>O'qtuvchi:</p>
   {
      isLoding ? (
       <p>Loading</p>
    )
    :
    (
      <p  className='d-flex align-items-end'>{data.Users && (<span>{data?.Users[0]?.last_name}</span>)}</p>

    )
   }

       
             
            
                                
           
           
           
           
            </div>
            <div className='d-flex card__info__right__dec'><p className='card__info__right__dec__bold me-2'>Tel raqam:</p>
            
            {

            }
            <p className='d-flex align-items-end'>{data.Users && (<span>{data?.Users[0]?.contact}</span>)}</p></div>

                
                
                

            </div>
            

            </div>
            <div className='card__bottom'>
         
              
                <div className='d-flex justify-content-between me-5 pe-5 ps-3 pb-2 '> <p className='card__bottom__title'>Dars kuni</p>
                <p className='card__bottom__dec' >{data.Users && (<span>{data?.Users[0]?.gr_kuni}</span>)}</p></div>
            <div className='d-flex justify-content-between me-5 pe-5 ps-3 pb-2 '> <p className='card__bottom__title'>Dars vaqti</p>
            <p className='card__bottom__dec' >{data.Users && (<span>{data?.Users[0]?.gr_vaqt}</span>)}</p></div>
            <div className='d-flex justify-content-between me-5 pe-5 ps-3 pb-2 '>  <p className='card__bottom__title'>O'quvchilar soni</p>
            <p className='card__bottom__dec' >{data?.Users?.length}</p></div>
           
            <div className='d-flex justify-content-between me-5 pe-5 ps-3 pb-2 '> <p className='card__bottom__title'>To'lov qilganlar</p>
            <p className='card__bottom__dec' >{data?.Users?.length}</p></div>
          
                
               
                
              
                
               
            </div>
        
      </NavLink>
     </div>
   </>
 )
}


export default Card_group
