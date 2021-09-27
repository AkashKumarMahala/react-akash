
import axios from 'axios'
import React, { useState } from 'react'
import ContCard from '../components/ConAPi/ContCard'
import Other from '../components/ConAPi/Other'
import '../components/ConAPi/style.css'
// import TopSec from '../components/ConAPi/TopSec'

const CountryApi = () => {
    const [conData,setConData] = useState([""])
    const [inputData,setInputData] = useState("")
    const [isShowing, setIsShowing] = useState(false)

        const fetchCountry = () => {
          if(inputData !== "") {
                axios.get(`https://restcountries.eu/rest/v2/name/${inputData}`)
            .then((res) => {
                setConData(res.data)
                setIsShowing(true)
            })
            } else {
                alert("Cannot be empty !!")
          }  
        }

        // const handleChange = (e) => {
        //     setInputData(e.target.value)
        // }
    return (
        <>
    <div className="flex py-3 bg-blue-200" style={{'font-family': "Roboto Mono"}}>
          <div className="m-auto text-xl font-bold text-center">
                    <h1 >Country API</h1>
                <div className="py-2">
                    <input type="text" className="p-2 border border-gray-500 focus:outline-none" placeholder="Enter a country Name"
                      value={inputData} onChange={(e)=> setInputData(e.target.value)} />
                </div>
                <div>
                    <button className="px-4 py-2 font-semibold" onClick={()=>fetchCountry()}>Search</button>
                </div>
              
          </div>
            </div>
                    {   
                    isShowing === true ?
                        <ContCard conData={conData}/> : <Other/> 
                    }
        
        </>
    )
}

export default CountryApi
