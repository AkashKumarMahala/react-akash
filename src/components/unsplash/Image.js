import React,{useState} from 'react'
import './style.css'

const Image = ({el,id,removeItem,show}) => {
  const [isCrossIcon, setIsCrossIcon] = useState(false)


    return (
         
         <div className="relative" onMouseEnter={() => setIsCrossIcon(true)}  key={id}
                onMouseLeave={() => setIsCrossIcon(false)} >
                
            <i className={`absolute right-0 text-white hover:text-black cursor-pointer fas fa-times
            ${isCrossIcon ? "": "hidden"}`} onClick={() => removeItem(id)}></i> 

            <img onClick={show}  src={ el.urls.regular }  />

            </div>
        
    )
}

export default Image
