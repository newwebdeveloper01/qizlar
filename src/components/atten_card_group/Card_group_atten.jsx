import React from 'react'
import "./Card_group_atten.scss"
import { NavLink } from 'react-router-dom'

const Card_group = ({product}) => {
  return (
    <>
     <div className='card  col-3 m-2'>
      <NavLink  to={`/davomat/${1}`}>
       
            <div className='card__title2  d-flex align-items-center justify-content-center'>
                <p>akbar nuru</p>
            </div>
            <div className='card__info d-flex align-items-center'>
            <img className='teacher__images m-2 ' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="rasm" />

            {/* { product.images.length>0 && product.images[0].startsWith("https://") ?
                                <img className='productt__top__images' src={product.images} alt="rasms" />
                                :
                                <img className='productt__top__images' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="rasm" />
                                } */}
            <div className='card__info__right ms-4'>
            <div className='d-flex card__info__right__dec  d-flex mb-2'><p className='card__info__right__dec__bold me-2'>O'qtuvchi:</p><p  className='d-flex align-items-end'>akbarergrubrt8hbib 8h777g nuru</p></div>
            <div className='d-flex card__info__right__dec'><p className='card__info__right__dec__bold me-2'>Tel raqam:</p><p className='d-flex align-items-end'>922944654</p></div>

                
                
                

            </div>
            

            </div>
            <div className='card__bottom'>
            <div className='d-flex justify-content-between me-5 pe-5 ps-3 pb-2 '> <p className='card__bottom__title'>O'qtuvchi:</p><p className='card__bottom__dec' >akbar nuru</p></div>
            <div className='d-flex justify-content-between me-5 pe-5 ps-3 pb-2 '> <p className='card__bottom__title'>Tel raqam</p><p className='card__bottom__dec' >922944654</p></div>
            <div className='d-flex justify-content-between me-5 pe-5 ps-3 pb-2 '>  <p className='card__bottom__title'>O'qtuvchi:</p><p className='card__bottom__dec' >akbar nuru</p></div>
           
            <div className='d-flex justify-content-between me-5 pe-5 ps-3 pb-2 '> <p className='card__bottom__title'>Tel raqam</p><p className='card__bottom__dec' >922944654</p></div>
                
               
                
              
                
               
            </div>
        
      </NavLink>
      </div>
    </>
  )
}

export default Card_group
