import React,{useState} from 'react'

const Image = ({el,i,removeItem}) => {
  const [isCrossIcon, setIsCrossIcon] = useState(false)

    return (
        <>  
         <div className="relative" key={i} onMouseEnter={() => setIsCrossIcon(true)}
                onMouseLeave={() => setIsCrossIcon(false)} >
                
            <i className={`absolute right-0 text-white hover:text-black cursor-pointer fas fa-times
            ${isCrossIcon ? "": "hidden"}`}
            onClick={() => removeItem(i)}></i> 

            <img style={{ height:'300px'}} src={ el.urls.regular }  />
        </div>
        </>
    )
}

export default Image
