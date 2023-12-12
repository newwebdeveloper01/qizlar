import React from 'react'
import './Students.scss'
import Panel from '../../components/panel/Panel'
import { HeaderTitle } from '../../utils/Container'
import Add_student from '../../components/add_student/Add_student'
import Student_list from '../../components/student_list/Student_list'

const Students = () => {
  return (
    <div className='student'>
        {/* <Panel/> */}
        <HeaderTitle title="O'quvchilar"/>
        <Add_student/>
        <Student_list/>
    </div>
  )
}

export default Students
