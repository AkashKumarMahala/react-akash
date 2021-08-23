import axios from 'axios'
import React,{ useState } from 'react'
import Card from './Card'
import './style.css'

const CountryCard = () => {
    const [inputValue, setInputValue] = useState("")
    const [details, setDetails] = useState([])
    const [isShowing, setIsShowing] = useState(false)

// useEffect(() => {
//    axios.get(`https://restcountries.eu/rest/v2/name/${inputValue}`)
//    .then((res) => {
//        console.log(res);
//    })
// }, [])

    const  handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const fetchData = () => {
      if(inputValue !== ""){
           axios.get(`https://restcountries.eu/rest/v2/name/${inputValue}`)
      .then((res) => {
          // console.log(res);
          setDetails(res.data);
          setIsShowing(true)
      })
      .catch((er) => {
        console.log(er);
      })
      } else {
        alert("Enter a Valid Name, for e.g-'Nepal'")
      }
   
    }

 

    return (
        <>
           <div>
            <div  className="flex justify-center">
              <div>
                  <div>
                    <h1 className="mt-2 text-2xl font-semibold text-center ">Get Country Details</h1>
                  </div>
                <div className="mt-4">
                    <input type="text" className="absolute p-2 border border-gray-500 rounded" placeholder="Enter Country Name"
                    value={inputValue}
                    onChange={(e) => handleChange(e)} />

                    <button className="relative px-4 py-2 border-t border-b border-r"
                    onClick={fetchData}>Get</button>
                </div>
              </div>
            </div>

            {/* Country Card  */}
            {
              isShowing === true ? 
               <div className="flex justify-center">
                <Card details={details} />
               </div> 
               : ""
            }
            {/* !Country Card  */}
                
            </div>
        </>
    )
}

export default CountryCard
