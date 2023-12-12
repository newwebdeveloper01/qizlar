import React, { useEffect } from "react"
import "./Home.scss"
import Header from "../../components/header/Header"
import Panel from "../../components/panel/Panel"
import { HeaderTitle } from "../../utils/Container"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate=useNavigate();
  
  useEffect(() => {
    // localStorage dan tokenni olish
    const token = localStorage.getItem('token');

    // token borligini tekshirish
    if (token) {
      console.log('Token mavjud:', token);
      // Agar token mavjud bo'lsa, kerakli boshqa amallarni bajaring
      // Masalan, serverga tekshirish, foydalanuvchini kiritsin yoki sahifani yuklang
    } else {
      console.log('Token yo\'q');
      navigate('/auth');

      // Agar token yo'q bo'lsa, foydalanuvchini kiritsa bo'lishi kerak
      // Masalan, kirish sahifasiga yo'naltirilishi yoki modal ochilishi mumkin
    }
  }, []); // useEffect faqat bir martta ishlaydi, boshqa o'zgartirishlarda




  return (
    <>
      <HeaderTitle/>
      
      
      </>
  )
}

export default Home