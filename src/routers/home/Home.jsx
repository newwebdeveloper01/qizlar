import React, { useEffect } from 'react'
import Header from '../../components/header/Header.jsx'
import MainBaner from '../../components/MainBaner/MainBaner.jsx'
import Our__team from '../../components/Our__team/Our__team.jsx'
import Vazifalar from '../../components/vazifalar/Vazifalar.jsx'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  // const navigate=useNavigate();

  
  // useEffect(() => {
  //   // localStorage dan tokenni olish
  //   const token = localStorage.getItem('token');

  //   // token borligini tekshirish
  //   if (token) {
  //     console.log('Token mavjud:', token);
  //     // Agar token mavjud bo'lsa, kerakli boshqa amallarni bajaring
  //     // Masalan, serverga tekshirish, foydalanuvchini kiritsin yoki sahifani yuklang
  //   } else {
  //     console.log('Token yo\'q');
  //     navigate('/login');

  //     // Agar token yo'q bo'lsa, foydalanuvchini kiritsa bo'lishi kerak
  //     // Masalan, kirish sahifasiga yo'naltirilishi yoki modal ochilishi mumkin
  //   }
  // }, []); // useEffect faqat bir martta ishlaydi, boshqa o'zgartirishlarda


  return (
    <>
        <Header/>
        <MainBaner/>
        <Our__team/>
        <Vazifalar/>
    </>
  )
}

export default Home
