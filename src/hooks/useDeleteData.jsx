import React from 'react'
import { useState, useEffect } from 'react';
import { instanse , data_delete } from '../api/instanse';


const useDeleteData = (ENDPOINT) => {
    const [data , setData]= useState([]);
    const [isLoding, setIsLoding] =useState(false);
    useEffect( ()=>{
      
        setIsLoding(true);
        data_delete.delete(ENDPOINT)
        .then(response => {
            setData(response.data);
            setIsLoding(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoding(false);
        }
            )
      }
       
    ,[])

    return [data, isLoding];
}

export default useDeleteData