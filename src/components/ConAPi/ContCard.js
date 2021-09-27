import React from 'react'

const ContCard = ({conData}) => {

    return (
         conData.map((el,i) => {
            return (
            <div className="flex w-full bg-gray-400" key={i} style={{'font-family': "Roboto Mono",'height':'70vh'}}>
        <div className="w-5/6 py-2 m-auto bg-white rounded-md shadow-md sm:w-3/5 h-5/6 sm:h-3/4">
            <div className="text-center ">
                <h1 className="text-xl font-semibold">{el.name}</h1>
                <div className="justify-between px-2 pt-7 sm:pt-8 sm:px-8 sm:flex">
                <div>
                        <img className="w-24 m-auto border-gray-400 sm:m-none sm:w-72 sm:h-44" src={el.flag} alt="" />
                </div>
                <div className="flex justify-between py-2 text-left sm:block">
                <div>
                    <div>
                        Capital : <span className="font-semibold">{el.capital}</span>
                    </div>
                    <hr />
                    <div>
                        Region : <span className="font-semibold">{el.region}</span>
                    </div>
                    <hr />
                    <div>
                        Area : <span className="font-semibold">{el.area}</span>
                    </div>
                    <hr />
                </div>
                  <div>
                        <div>
                        Population : <span className="font-semibold">{el.population}</span>
                    </div>
                    <hr />
                    <div>
                        Demonym : <span className="font-semibold">{el.demonym}</span>
                    </div>
                    <hr />
                    <div>
                        Native-name : <span className="font-semibold">{el.nativeName}</span>
                    </div>
                    <hr />
                  </div>
                    {/* <div className="sm:display-block display-none">
                        Numeric-code : <span className="font-semibold"> {el.numericCode}</span>
                        </div>
                    <hr /> */}
                </div>
                </div>
            </div>
        </div>
    </div> 
    )
})
    )
}
    export default ContCard
            
