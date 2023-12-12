import React from 'react'
import { HeaderTitle } from '../../utils/Container'
import Card_group_atten from '../../components/atten_card_group_one/Card_group_atten'
import Student_list__one from '../../components/student_list_group__one/student_list_group__one'
import "./Attendance_one.scss"

const Attendance_one = () => {
  return (
    <>
      <HeaderTitle title="Davomat"/>
      <div className='Attendance_one'>
                <p className='Attendance_one__title'>Informatika guruhi ro’yhati</p>
                <div className='Attendance_one__info d-flex w-100 justify-content-between w-100'>
                    <div className='Attendance_one__info__left me-5 ms-5   card_list align-items-center justify-content-center'>
                        <Card_group_atten/>
                        <div className='Attendance_one__info__left__list   ms-2 mt-5'>
                            <p className='mb-2 Attendance_one__info__left__list__title'>
                            Shu oy bo’yicha <br/>to’lov qilmaganlar 
                            </p>
                            <p className='Attendance_one__info__left__list__dec'>
                            1.Muxamadaliyev Ibroxim
                            </p>
                            <p className='Attendance_one__info__left__list__dec'>
                            1.Muxamadaliyev Ibroxim
                            </p> <p className='Attendance_one__info__left__list__dec'>
                            1.Muxamadaliyev Ibroxim
                            </p>    
                        </div>
                    </div>
                    <div className='Attendance_one__info__right ms-5 w-100'>
                        <Student_list__one/>
                    </div>

                </div>
            </div>
      
    </>
  )
}

export default Attendance_one
