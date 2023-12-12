import React from 'react'
import { HeaderTitle } from '../../utils/Container'
import Add_pay from '../../components/add_pay/Add_pay'
import Student_list_pay from "../../components/pay_student_list/Student_list_pay"
import "./Payment.scss"

const Payment = () => {
  return (
    <div className='pay'>
        <HeaderTitle title="To'lov" /> 
        <Add_pay/>
        <Student_list_pay/>

    </div>
  )
}

export default Payment
