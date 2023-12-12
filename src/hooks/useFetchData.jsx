import React from 'react'
import { useState, useEffect } from 'react';
import { instanse , data_delete } from '../api/instanse';


const useFetchData = (ENDPOINT) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const refreshData = () => {
      setIsLoading(true);
      instanse
        .get(ENDPOINT)
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    };
  
    useEffect(() => {
      refreshData();
    }, []);
  
    return [data, isLoading, refreshData];
  };
  


export default useFetchData