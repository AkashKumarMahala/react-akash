import React, {  useState } from 'react'
import Image from './Image'
import useFetchAPI from '../../assets/utils/hooks/useFetchAPI'
import InfiniteScroll from 'react-infinite-scroll-component'
import './style.css'
import useDebounce from '../../assets/utils/hooks/useDebounce'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'


const Images = () => {

  const [inputData, setInputData]=useState("")
  const [page, setPage] = useState(1)
  const [showPrev, setShowPrev] = useState(false)
 
  

  
  const [images,setImages,errors,isLoading] = useFetchAPI(page,inputData);

  const debounce = useDebounce()

  

  const handleInput = (event) => {
    debounce(() => setInputData(event.target.value),2000)
  
  }

  const removeItem = (identity) => {
   const filteredArray = images.filter((el,i) => el.id !== identity)
  return setImages(filteredArray)
  }

  // 2nd way of filtering out elements 

//  const removeItem = (index) => {
//   setImages([...images.splice(0,index),
//   ...images.splice(index+1,images.length)])
//  }



    return (
      <>
       <div className="flex justify-center my-3">
         <div>
           <h1 className="text-2xl font-semibold text-center ">Unsplash API</h1>
         </div>
       </div>

        <div className="flex w-full mt-2 mb-6">
          <div className="m-auto">
            <div>
            <input type="text" placeholder="Enter anything..." className="p-2 border border-gray-500 rounded-sm w-80 "
             onChange={(e) =>handleInput(e)} />
          </div>
          </div>
        </div>
       
            {
              errors.length > 1 ? 
              <div className="flex w-full" style={{height:"75vh"}}>
                <p className="m-auto">{ errors }</p>
              </div>
               : null
            }
       
      <AnimateSharedLayout>

        
        <InfiniteScroll dataLength={images.length} next={()=>{ setPage(page+1)} } 
        hasMore={true} className="flex flex-wrap">
          {
            images.map((el,i) => {
              return (
                <motion.div className="w-1/6 p-1 border rounded" key={i} layoutId={el.urls.regular}>
                   <Image el={el} id={el.id}  removeItem={removeItem} show={() => setShowPrev(el.urls.regular)}/>
               </motion.div>
              )
            })
          }  
      
        </InfiniteScroll>
        
        <AnimatePresence>
          {
            showPrev   && 
                <motion.section animate={{rotate:360}} layoutId={showPrev} className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-screen">
                  <div className="p-2 bg-white rounded shadow-md">
                  <h1 className="cursor-pointer" onClick={() => setShowPrev(false)}>
                      <img className="w-72" src={ showPrev }  alt="" />       
                  </h1>
                  </div>
                </motion.section>
        }
        </AnimatePresence>
                    
      </AnimateSharedLayout>

    


        {/* <div className="flex justify-center my-5">
            {
              errors.length > 0 ?
              null :
              <button className="px-4 py-2 text-white bg-blue-400 rounded-sm hover:bg-blue-500"
               onClick={() => { 
                LoadNextPage()}}>Load More</button>
            }
        </div> */}
        
        {/* {
           isLoading ?  <Loading/> : null
        } */}
      </>

    )
}

export default Images

