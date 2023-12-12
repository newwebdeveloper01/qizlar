import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { Container } from '../../utils/Container'
import { BsFillBarChartFill } from 'react-icons/bs'
import './GrInfo.scss'

const GrInfo = () => {
  const [ student_data, isLoding ] = useFetchData('/users?pos_ref_id=2')
  const [ t_data, t_isLoding ] = useFetchData('/users?pos_ref_id=1')
  const [ s_t_data, s_t_isLoding ] = useFetchData('/users?activ=true')
  const [ g_data, g_isLoding ] = useFetchData('/groups')
  // console.log(data);
  // const [data ] = useFetchData("/categories");
  // const [product_data] = useFetchData("/products");
  return (
    <>
      <div className='cards d-flex'>
        <div className='student_total col-5'>
          <p>Jami o'qivchilar soni:</p>
          {!isLoding ? (
            
               <p className='student_total__son'>{student_data.length}</p> 
            
          ) : (
            <p>Loading...</p>
          )}
          <BsFillBarChartFill className='student_total__icon' />
        </div>
        <div className='student_total col-5'>
          <p>O’qituvchilar soni:</p>
          {!t_isLoding ? (
            
              <p className='student_total__son'>{t_data.length}</p> 
            
          ) : (
            <p>Loading...</p>
          )}
          <BsFillBarChartFill className='student_total__icon' />
        </div>

        <div className='student_total col-5'>
          <p>Shu oy tark etganlar</p>
          {!s_t_isLoding ? (
            
               <p  className='student_total__son'>{s_t_data.length}</p> 
            
          ) : (
            <p>Loading...</p>
          )}
          <BsFillBarChartFill className='student_total__icon' />
        </div>
        <div className='student_total col-5'>
          <p>Jami guruhlar soni</p>
          {!g_isLoding ? (
            
               <p  className='student_total__son'>{g_data.length}</p> 
            
          ) : (
            <p>Loading...</p>
          )}
          <BsFillBarChartFill className='student_total__icon' />
        </div>
      </div>
    </>
  )
}

export default GrInfo
