import React from 'react'
import Card_group from '../../components/one_card_group/Card_group'
import Student_list__one from '../../components/student_list_group__one/student_list_group__one'
import "./OneGroup.scss"
import { HeaderTitle } from '../../utils/Container'
import useFetchData from "../../hooks/useFetchData"

const OneGroup = () => {
    

    return (
        <>
            <HeaderTitle title="Guruhlar" />
            <div className='One_group'>
                <p className='One_group__title'>Informatika guruhi ro’yhati</p>
                <div className='One_group__info d-flex w-100 justify-content-between w-100'>
                    <div className='One_group__info__left me-5 ms-5   card_list align-items-center justify-content-center'>
                    <Card_group/>
         
                        <div className='One_group__info__left__list   ms-2 mt-5'>
                            <p className='mb-2 One_group__info__left__list__title'>
                            Shu oy bo’yicha <br/>to’lov qilmaganlar 
                            </p>
                            <p className='One_group__info__left__list__dec'>
                            1.Muxamadaliyev Ibroxim
                            </p>
                            <p className='One_group__info__left__list__dec'>
                            1.Muxamadaliyev Ibroxim
                            </p> <p className='One_group__info__left__list__dec'>
                            1.Muxamadaliyev Ibroxim
                            </p>    
                        </div>
                    </div>
                    <div className='One_group__info__right ms-5 w-100'>
                        <Student_list__one />
                    </div>

                </div>
            </div>
        </>
    )
}

export default OneGroup
