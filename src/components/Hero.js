import React from 'react'

const Hero = () => {
  return (
    <div className=" w-full h-screen">
    <img  className="top-0 left-0 w-full h-screen object-cover" src="https://media.nomadicmatt.com/2023/tropicalislandsfeature.jpg" alt="" />
    <div className="bg-black/30 absolute top-0 left-0 w-full h-screen">
       <div className="md-left-[10%] max-w-[1100px] m-auto absolute p-4 mt-11">
         <p className="text-white ">hello world </p>
         <h1 className="food-bold text-white text-6xl  drop-shadow-2xl  md:text-5xl">dalain ergiin aylal</h1>
         <h2 className='max-w-[600px] drop-shadow-2xl py-2 text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, fuga? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati? </h2>
         <button className="bg-white text-black">delgerengvi</button>
      </div>
    </div>
    
    </div>
  )
}

export default Hero