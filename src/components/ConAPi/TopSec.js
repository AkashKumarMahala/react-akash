import React from 'react'

function TopSec({}) {
    const [inputData,setInputData] = useState("")
    return (
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
    )
}

export default TopSec

 