import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchAPI(page,inputData) {

     const [images, setImages] = useState([])
     const [errors, setErrors] = useState([])
     const [isLoading, setIsLoading] = useState(false)


       useEffect(() => {
         setIsLoading(true)
          if(inputData === ""){
           
            axios.get(`https://api.unsplash.com/photos/?client_id=ls5Szs8Ec2fMFK9BXto8aCadPx-RCZT5VshN-IbxsFk&page=${page}`)
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
       axios.get(`https://api.unsplash.com/search/photos?client_id=ls5Szs8Ec2fMFK9BXto8aCadPx-RCZT5VshN-IbxsFk&page=${page}&query=${inputData}`)
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
       axios.get(`https://api.unsplash.com/search/photos?client_id=ls5Szs8Ec2fMFK9BXto8aCadPx-RCZT5VshN-IbxsFk&page=${page}&query=${inputData}`)
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











