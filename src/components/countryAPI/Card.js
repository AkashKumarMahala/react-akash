
import React from 'react'


const Card = ({details}) => {


    
    return (
      
       <section className="w-1/2 px-4 py-6 mt-6 mb-10 rounded h-1/2 card">
           {
               details.map((ele) => {
                   return (
                    <div key={ele}>
                        <div className="flex justify-center text-center">
                        <div>
                            <div>
                                <h1 className="font-semibold">{ele.name}</h1>
                            </div>
                            <div>
                                <img src={ele.flag } className="p-4 mt-6 w-72 h-44" alt="Img" />
                            </div>
                            <div className="mt-4 font-semibold">
                                 <h1> <span>Capital : </span>{ ele.capital }</h1> 
                            </div>
                        </div>
                        </div>
                     <div className="flex justify-around mt-6 mb-10">
                        <div>
                            <h2 className="text-center">{ ele.nativeName }</h2>
                            <h2 className="text-sm font-semibold text-center">Native name</h2>
                        </div>
                        <div>
                            <h2 className="text-center">{ ele.population }</h2>
                            <h2 className="text-sm font-semibold text-center">Population</h2>
                        </div>
                        <div>
                            <h2 className="text-center">{ ele.demonym }</h2>
                            <h2 className="text-sm font-semibold text-center">Demonym</h2>
                        </div>
                     </div>
                    </div>
                   )
               })
           }
                
        </section>
    )
}

export default Card
