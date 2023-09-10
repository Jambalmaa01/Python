import { useState } from 'react' 
import{HiMenuAlt3} from 'react-icons/hi'
import { Link, useNavigate, NavLink} from 'react-router-dom'
import About from './About'
import Rooms from './Footer'
import Travel from './Travel'
import Hero from './Hero'
const Navbar = () => {
    const[nav, setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
       
   
    <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='text-white font-bold text-2xl z-20'>Navbar</h1>
    <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer'/>
    <div  className={nav? "fixed  text-gray-300 left-0 top-0  w-full h-screen bg-black/90 px-4 py-7 flex-col z-10" : 'absolutentop-0 h-screen  letf-[-100] ease-in duration-300 z-10'}>
        
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
        <Link to='' className=' font-bold text-3xl p-8'>Home </Link>
        <Link to='/About' className=' font-bold text-3xl p-8'>About</Link>
        <Link to='/Travel' className=' font-bold text-3xl p-8'>Travel</Link>
        <Link to='/Rooms' className=' font-bold text-3xl p-8'>Rooms</Link>
        </ul>
        <h1>Jambalmaa</h1>
    </div>
    </div>

  )
}

export default Navbar




