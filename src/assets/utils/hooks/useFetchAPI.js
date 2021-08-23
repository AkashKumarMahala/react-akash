import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchAPI() {

     const [images, setImages] = useState([])

     const url = process.env.REACT_APP_UNSPLASH_URL;
     const key = process.env.REACT_APP_UNSPLASH_KEY;

    useEffect(() => {
    axios.get(`${url}?client_id=${key}`)
    .then((res) => {
      setImages(res.data)
    })
  }, [])

  return [images,setImages]
}

