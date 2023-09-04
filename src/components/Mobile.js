import React from 'react'

const Mobile = () => {
  return (
    
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid -col-2 gap-4'>
        <div  className=' flex flex-col h-full justify-center' >
            <h3>Fine imterior rooms</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut est tenetur nihil asperiores commodi molestiae dignissimos, sit illo placeat qui.</p>
        </div>
        <div className=' grid  grid-cols-2 grid-row-2 h-[90vh]' >
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
        </div>

    </div>
  )
}

export default Mobile