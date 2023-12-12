import React from 'react'
import { NavLink } from 'react-router-dom'
import './Container.scss'

const Container = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

const HeaderTitle=({title})=>{
  return(
    <div className=' header_title  '>
      
        <p className='title ps-5 pt-3 pb-2'>{title}</p>
      
    </div>
  )
}

const IconButton=({link , title , icon })=>{
    return(
        <NavLink className="iconButton__link" to={link}>
         
          {title}
          {icon}
          </NavLink>
    )
}

const ButtonIcon=({className,title,icon})=>{
  return(
   <>
      <button className={className}>
        
        {title}
        {icon}
    </button>
   </>
  )
}
const Button = ({type, title, icon}) => {
  return (
    <button className='main-button' type={type}>
        {icon}
        {title}
    </button>
  )
}

const StepIcon=({number , classNam=""})=>{
  console.log(classNam)
  return(
  <div className="step__icon" style={{classNam}}>
        <p>{number}</p>
    </div>
  )
}





export {Container , IconButton,ButtonIcon,Button , HeaderTitle , StepIcon} 