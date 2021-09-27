import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchAPI(page,inputData) {

     const [images, setImages] = useState([])
     const [errors, setErrors] = useState([])
     const [isLoading, setIsLoading] = useState(false)

     const api = process.env.REACT_APP_UNSPLASH_API;
     const key = process.env.REACT_APP_UNSPLASH_KEY;

   

       useEffect(() => {
         setIsLoading(true)
          if(inputData === ""){
           
            axios.get(`${api}/photos/?client_id=${key}&page=${page}`)
            .then((res) => {
              console.log(res.data);
              setImages([...images,...res.data]);
              setIsLoading(false)
            })
           .catch((e) => {
             setErrors("Error is Present")
             setIsLoading(false)
           })
          }
     },[page])

    

   useEffect(() => {
     if(inputData){
       axios.get(`${api}/search/photos?client_id=${key}&page=${page}&query=${inputData}`)
       .then((res) => {
        setImages([...images,...res.data.results])
         setIsLoading(false)
       })
      .catch((e) => {
        setErrors("Error is Present")
        setIsLoading(false)
      })
     }
   }, [page])
   
   useEffect(() => {
     if(inputData){
       axios.get(`${api}/search/photos?client_id=${key}&page=${page}&query=${inputData}`)
       .then((res) => {
        setImages([...res.data.results])
         setIsLoading(false)
       })
      .catch((e) => {
        setErrors("Error is Present")
        setIsLoading(false)
      })
     }
   }, [inputData])
 
  
  return [images, setImages, errors, isLoading]
}











