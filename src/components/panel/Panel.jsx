import React, { useRef , useEffect, useState } from 'react'
import{BiSolidContact, BiSolidHome  } from "react-icons/bi"
import {BsFolder2Open} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {PiStudent } from  "react-icons/pi"
import {TbUsersGroup} from  "react-icons/tb"
import {MdOutlinePayment} from "react-icons/md"
import { Container } from '../../utils/Container'
import "./Panel.scss"
import { NavLink, Outlet, useLocation , useNavigate } from 'react-router-dom'


const Panel = () => {
  
  // const navigate=useNavigate();
  
  // const [log , setLog]=useState(true);
  // useEffect(() => {
  //   // localStorage dan tokenni olish
  //   const token = localStorage.getItem('token');

  //   // token borligini tekshirish
  //   if (token) {
  //     console.log('Token mavjud:', token);
  //     setLog(true)
  //     // Agar token mavjud bo'lsa, kerakli boshqa amallarni bajaring
  //     // Masalan, serverga tekshirish, foydalanuvchini kiritsin yoki sahifani yuklang
  //   } else {
  //     setLog(false)
  //     console.log('Token yo\'q');
  //     navigate('/auth');

  //     // Agar token yo'q bo'lsa, foydalanuvchini kiritsa bo'lishi kerak
  //     // Masalan, kirish sahifasiga yo'naltirilishi yoki modal ochilishi mumkin
  //   }
  // }, [useState]); // useEffect faqat bir martta ishlaydi, boshqa o'zgartirishlarda



 const NavRef=useRef("");

 const showNavbar=()=>{
  NavRef.current.classList.toggle("menu")
}


  const location=useLocation();
  return (
    location.pathname != "/auth" && (
    <>
      <div className='header'>
      <div className='navbar' ref={NavRef}>
       <div className='header__nav__menu d-flex  align-items-center' onClick={showNavbar}>
            <GiHamburgerMenu/>
        </div>
        <div>
        <div className='header__nav d-flex align-content-center p-2' >
        <div className='header__nav__logo d-flex  align-items-center me-3'>
            <BiSolidContact className='header__nav__logo__contact '/>
        </div>
        <h1 className='me-5'>TDTU <br/>marketing</h1>
       
        </div>
        <div className='header__menu' >
        <NavLink to="/panel/xisobot" className='header__menu__report  d-flex m-3 align-items-center hover'>
          <BiSolidHome className='me-3'/>
          <p >Xisobot</p>
        </NavLink>

        <NavLink to="/panel/oquvchilar" className='header__menu__student d-flex m-3 align-items-center hover' onClick={()=>{setLog(false)}}>
          <PiStudent className='me-3'/>
          <p >O'quvchilar</p>
        </NavLink>

        <NavLink to="/panel/guruh" className='header__menu__group d-flex m-3 align-items-center hover' onClick={()=>{setLog(false)}}>
          <TbUsersGroup className='me-3'/>
          <p >Guruhlar</p>
        </NavLink>

        <NavLink to="/panel/tolov" className='header__menu__until d-flex m-3 align-items-center hover' onClick={()=>{setLog(false)}}>
          <MdOutlinePayment className='me-3'/>
          <p >To'lovlar</p>
        </NavLink>

        <NavLink to="/panel/davomat" className='header__menu__attendance d-flex m-3 align-items-center hover' onClick={()=>{setLog(false)}}>
          <BsFolder2Open className='me-3'/>
          <p>Davomat</p>
        </NavLink>

        </div>
        </div>
      </div>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
  )
}

export default Panel
