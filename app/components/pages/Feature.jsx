import React from 'react'
import Card from '../Card'
const Feature = () => {
    const demodata=[
        {
          title:" A conversation with the creators of The Unfinished Corner",
          images:"/card.png"
        },
        {
          title:"The 10 must-read comics from March 2022",
          images:"/card2.png"
        },
        {
          title:"In conversation with Robin Ha, author of Almost American Girl",
          images:"/card3.png"
        }
      ]
  return (
    <div>
    <p className=" text-white font-bold mb-4">Featured</p>
    <div className=" space-y-4">
      {demodata.map((data,index)=>(
        <div key={index}>
        <Card data={data}/>
        </div>
      ))}
    </div>
   </div>
  )
}

export default Feature