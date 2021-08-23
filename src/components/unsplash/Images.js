import React, { useRef, useState } from 'react'
import Image from './Image'
import useFetchAPI from '../../assets/utils/hooks/useFetchAPI'

const Images = () => {
 

  const [inputValue, setInputValue] = useState("")

  const inputRef = useRef(null)

  const [images,setImages] = useFetchAPI();


  
  const removeItem = (index) => {
   const filteredArray = images.filter((el,i)=> {
      return i !== index
    })
    setImages(filteredArray);
  }

  // 2nd way of filtering out elements 

//  const removeItem = (index) => {
//   setImages([...images.splice(0,index),
//   ...images.splice(index+1,images.length)])
//  }


  const ShowImage = () => {
     return images.map((el,i) => <Image el={el} i={i} removeItem={removeItem}/>)
    } 
  
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const addNewImage = () => {
    if(inputValue !== ""){
      setImages([...images, inputValue]);
    }
    setInputValue("")
  }

    return (
      <>
       <div className="flex justify-center my-5">
         <div>
           <h1 className="mb-5 text-2xl font-semibold text-center">Unsplash API</h1>
            <input type="text" placeholder="add new.." className="p-2 border border-gray-500"
        value={inputValue} 
        onChange={(e) => handleChange(e)}
        ref={inputRef}/>

        <button className={`px-4 py-2 text-white  ${inputValue === "" ? 'bg-blue-200' : 'bg-blue-500' }`}
        disabled={ inputValue === "" } onClick={ addNewImage }>Add</button>
         </div>
       </div>

        <div className="grid justify-center grid-cols-3 ">
          <ShowImage/>   
        </div>
      </>

    )
}

export default Images

