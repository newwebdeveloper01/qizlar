import React from 'react'
// import { Container } from './index.js'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home.jsx'
import { Container } from './index.js'
import Registration from './Auth/registration/Reagistration.jsx'
import Login from './Auth/login/Login.jsx'
import Report from './report/Report.jsx'
import Students from './students/Students.jsx'
import Payment from './payment/Payment.jsx'
import Group from './group/Group.jsx'
import Attendance from './attendance/Attendance.jsx'
import Attendance_one from './attendance/Attendance_one.jsx'
import OneGroup from './group/OneGroup.jsx'
import Panel from '../components/panel/Panel.jsx'
const AllRouters = () => {
  return (
    <Container>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/auth' element={<Registration/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route path='/panel' element={<Panel/>}>

              <Route path='/panel/xisobot' element={<Report/>} />
              <Route path='/panel/oquvchilar' element={<Students/>}/>
              <Route path='/panel/tolov' element={<Payment/>} />
              <Route path='/panel/guruh' element={<Group/>} />
              <Route path='/panel/davomat' element={<Attendance/>} />
              <Route path='/panel/guruh/:id' element={<OneGroup/>}/>
              <Route path='/panel/davomat/:id' element={<Attendance_one/>} />

            </Route>

        </Routes>
    </Container>
  )
}

export default AllRouters
