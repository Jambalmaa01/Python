import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  // const Singin=()=>{
  //     const bvrtgel={
  //         Email:email,
  //         Password:password,
  //     }
  //     axios.post("https://jambalmaa-1bbe8-default-rtdb.asia-southeast1.fireb{asedatabase.app/bvrtgel.json", bvrtgel).then(Response=>{alert('amjilltai')}).catch(error=>alert(error))
  // }
  return (
    <div className='bg-gray-200  w-full flex flex-col items-center ' style={{height:'600px'}}>
        <div className='flex flex-col items-center '>
            <div className='flex flex-col items-center  mt-6 '>
            <img src="https://assets.gator.com/images/newGatorLogo.svg" alt="" width={'550px'} />
            <h1 className='text-3xl text-black mt-3'>Log in to your account</h1> 
            </div>
            <div className='flex flex-row gap-8 mt-3 rounded'>
                <button style={{borderRadius:'3px'}} className='w-60 h-10 bg-blue-500 text-white'>Sing in with Google</button>
                <button style={{borderRadius:'3px'}} className='w-60 h-10 bg-blue-800 text-white'>FaceBook</button>
            </div>
            <div className=' flex flex-row mt-5 gap-2'>
                <div style={{height:'0.5px'}} className='w-60  bg-gray-400'></div>
                <div className='-mt-3'><h2>or</h2></div>
                <div  style={{height:'0.5px'}} className='w-60  bg-gray-400'></div>
            </div>
            <div className=' flex flex-col mt-5'>
                <input onMouseOver={(e) => { e.target.style.border = '1px solid gray'; }} onChange={(el)=>setEmail(el.target.value)} style={{width:'500px',  border:'1px solid gray', borderRadius:'3px'}} className='h-10 bg-gray-200  border-zinc-500 'type="text" placeholder='Email' />
                <input onChange={(el)=>setPassword(el.target.value)} onMouseOver={(e) => { e.target.style.border = '1px solid gray'; }} style={{width:'500px', borderRadius:'3px',  border:'1px solid gray ' }} className='h-10  bg-gray-200  border-zinc-500 mt-7 ' type="text" name="" id="" placeholder='Password'/>
                <a href="" className='text-blue-400 ' style={{fontSize:'13px', marginTop:'5px'}}>Forget your password</a>
            </div>
            <div style={{width:'280px', height:'50px', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid gray ', marginTop:'25px', borderRadius:'3px'}}  >
              <label className=''  htmlFor="">
                <input type="checkbox" name="gender" id=""  value="male"/>I'm  not a robot
              </label>
             </div>
             <div>
              <button onClick={Singin} style={{width:'500px', height:'40px', marginTop:'20px',  border:'1px solid gray', backgroundColor:'gray', borderRadius:'3px'}}>Sing in</button>
             </div>
             <div className='flex items-center justify-center mt-3 text-xs text-blue-400 '>
              <a href="">Don't have an account? Sign up</a>
             </div>
        </div>
    </div>
  )
}

export default Login