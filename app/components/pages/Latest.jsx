import React from 'react'
import FeatureCard from '../FeatureCard'

const Latest = () => {
    const demodata=[
        {
          title:" A conversation with the creators of The Unfinished Corner",
          images:"/fcard1.png"
        },
        {
          title:"The 10 must-read comics from March 2022",
          images:"/fcard2.png"
        },
        {
          title:"In conversation with Robin Ha, author of Almost American Girl",
          images:"/fcard3.png"
        }
      ]
  return (
    <div>
        <p className=' text-white font-bold'>Latest</p>
        <div className=" space-y-4">
      {demodata.map((data,index)=>(
        <div key={index}>
        <FeatureCard data={data}/>
        </div>
      ))}
    </div>
        </div>
  )
}

export default Latest