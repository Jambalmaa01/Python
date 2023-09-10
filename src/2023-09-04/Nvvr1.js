import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nvvr.css'
const Nvvr1 = () => {
    
  return (
    <div>
        <div  className="w-full h-16 bg-gray-100 flex justify-center items-center ">
        <div style={{marginRight:'80px', }} className=' flex   justify-row '  >
            <ul className=' flex justify-row pr-5'>
                <ul className='w-1/6 h-1/6'><img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_portal-login.svg" alt=""  /></ul>
                <ul className='text-3xl text-blue-950 ' style={{ fontWeight:'bold'   }}>HostGator</ul>
            </ul>
        </div>
        <div>
            <ul className='flex justify-row'>
                <div className='dropdown'   >
                <Link className='dropbtn' style={{ fontWeight:'bold'   }}>Hosting</Link>
                
                <div className='dropdown-content ' >
                    <div className='flex flex-col '>
                    <div className='flex flex-row justify-center  gap-2  mt-5 -ml-24'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_web-hosting.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Shared hosting</h1>
                            <p className='text-gray-600'>Eyse affordable and  awesome </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center  gap-2 mt-5 -ml-32'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_website-builder.svg" alt="" /></div>
                        <div className='w-250 h-15' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Website Builder</h1>
                            <p className='text-gray-600'>Build a in site minutes</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center  gap-2 mt-5  -ml-9'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_wordpress-hosting.svg" alt="" /></div>
                        <div className='w-250 ' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>WordPress hosting</h1>
                            <p className='text-gray-600'>Their flexibility + our amazing hosting.</p>
                        </div>
                    </div>
                    
                    <div className='mt-10'>
                        <a className='text-blue-400 ml-36 ' href="">Compare All Features</a>
                    </div>
                    </div>
                </div>
               
                </div>
                <div className='dropdown '>
                <Link style={{ fontWeight:'bold'   }} className= 'dropbtn text-blue-950 pr-7 text-xs cursor-pointer'>PRO Hosting</Link>
                
                <div className='dropdown-content ' >
                <div className='flex flex-row justify-center  gap-2  mt-5 -ml-10'   >
                   <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_dedicated.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Dedicated</h1>
                            <p className='text-gray-600'>the best in both power & perpormance </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center  gap-2  mt-5 -ml-10'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_vps.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>VPS</h1>
                            <p className='text-gray-600'>Complete control without the expense. </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center  gap-2  mt-5 -ml-24'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_reseller.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Reseller</h1>
                            <p className='text-gray-600'>Work for a boss you trust: you. <br /> Compare All Features </p>
                        </div>
                    </div>
                    <div className='mt-14'>
                        <a className='text-blue-400 ml-36 ' href="">Compare All Features</a>
                    </div>
                  </div>
                
                </div>
                <div className='dropdown'>
                <Link  style={{ fontWeight:'bold'   }} className='dropbtn text-blue-950 pr-7 text-xs font-fantasy'>Security</Link>
                <div style={{height:'520px', width:'380px'}} className='dropdown-content'>
                <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400 mt-8 ml-10'>Website Essentials</h1>
                <p className='text-gray-800 mt-2 ml-10'>Tools to get the most out of the web.</p>
                <p className='text-blue-400  mt-2 ml-10'>Overview </p>
                <p className='text-blue-400  mt-2 ml-10'>CodeGuard </p>
                <p className='text-blue-400  mt-2 ml-10'>SSL Certificate </p>
                <p className='text-blue-400  mt-2 ml-10'>SiteLock </p>
                <p className='text-blue-400  mt-2 ml-10'>Google Workspace </p>
                <div style={{width:'337px', height:'1px', backgroundColor:'gray', marginTop:'45px ', marginLeft:'20px'}}></div>
                <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400 mt-4 ml-10'>Website Essentials</h1>
                <p className='text-gray-800 mt-2 ml-10'>Our experts will help you take it up a level.</p>
                <p className='text-blue-400 mt-2 ml-10' >Web Design</p> 
                <p className='text-blue-400 mt-2 ml-10' >Pay-Per-Click (PPC)</p>
                
                <p className='text-blue-400 mt-2  ml-10' >Search Engine Optimization (SEO)</p>
                

                </div>
                
                </div>
                <div className='dropdown' >
                <Link style={{ fontWeight:'bold'   }} className='dropbtn text-blue-950 pr-8 text-xs '>Domains</Link>
                <div className='dropdown-content' style={{height:'300px'}}> 
                <div>
                    <input style={{width:'350px', height:'60px', backgroundColor:'gray', marginLeft:'45px', marginTop:'25px' }} type="text" name="" id="" placeholder='find a domain name' />
                </div>
                <div className='flex flex-row justify-center  gap-2  mt-5 -ml-24'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_register-domain.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Register Domains</h1>
                            <p className='text-gray-600'>Claim your perfect name.</p>
                        </div>
                    </div> 
                
                <div className='flex flex-row justify-center  gap-2  mt-5 -ml-12'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_transfer-domains.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Transfer Domains</h1>
                            <p className='text-gray-600'>Bring your name over to our game. <br /> What's a domain name? </p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className='dropdown'>
                <Link style={{ fontWeight:'bold'   }} className='dropbtn text-blue-950 pr- text-xs font-fantasy'>Resources</Link>
                <div className='dropdown-content'>
                <div className='flex flex-row justify-center  gap-2  mt-5 -ml-28'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_knowledgebase.svg" alt="" /></div>
                        <div className='w-250 h-10 ml-2' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Shared hosting</h1>
                            <p className='text-gray-600'>Know what the pros know.</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center  gap-2  mt-5 -ml-24'   > 
                    <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_blog.svg" alt="" width={'55px'} /></div>
                        <div className='w-250 h-10 ml-2' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Blog</h1>
                            <p className='text-gray-600'>Get tips and in-depth articles.</p>
                        </div>
                    </div>
                      <div style={{width:'380px', height:'1px', backgroundColor:'gray', marginTop:'45px ', marginLeft:'20px'}}></div>
                    <div>
                        <h1 className='text-black-800 text-xl ml-9 mt-3' style={{fontWeight:'bold'}}>Commonly Asked Questions</h1>
                         <a className='text-blue-400 ml-9' href="">How do I purchase an SSL and what type is it?</a> <br />
                         <a className='text-blue-400 ml-9' href="">How do I point my domain to HostGator?</a> <br />
                         <a className='text-blue-400 ml-9' href="">HostGator website transfers?</a>

                    </div>

                </div>

                </div>
            </ul>
        </div>
        <div style={{marginLeft:'90px'}}  className='flex ml-150'>
            <li className='flex justify-row'>
                 <div className='dropdown'>
                <Link  style={{ fontWeight:'bold',   }}   className=' dropbtn text-blue-950 pr-1 text-xs'>Contact →</Link>
                <div className='dropdown-content ' style={{width:'380px', height:'500px'}}>
                    <div  className='text-gray-600 ml-12 mt-7'><h6>We are available 24/7 to help answer
                     <br /> questions and solve your problems.</h6></div>
                     <div className='text-black-800 text-xl ml-9 mt-3' style={{fontWeight:'bold'}}><h1 >Call</h1></div>
                <div className='flex flex-row justify-center  gap-2  mt-5 -ml-36'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/sales.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Sales</h1>
                            <p className='text-gray-600'>(877) 828-5278</p>
                        </div>
                    </div>
                 <div className='flex flex-row justify-center  gap-2  mt-5 -ml-36'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/support.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Support</h1>
                             <p className='text-gray-600'>(866) 964-2867 </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center  gap-2  mt-5 -ml-28'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/international.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>International</h1>
                            <p className='text-gray-600'>+1 713-574-5287</p>
                        </div>
                    </div>
                    <div className='text-black-800 text-xl ml-9 mt-3' style={{fontWeight:'bold'}}><h1 >Call with us</h1></div>
                    <div className='flex flex-row justify-center  gap-2  mt-5 -ml-32'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/live-chat.svg" alt="" /></div>
                        <div className='w-250 h-10 ' >
                            <Link style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Live Chat →</Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='dropdown'>
                <Link  style={{ fontWeight:'bold'   }}  className='dropbtn text-blue-950  text-xs'>Sign In →</Link>
                <div className='dropdown-content ' style={{height:'200px'}}>
                <div className='flex flex-row justify-center  gap-2  mt-5 -ml-24'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_portal-login.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <Link to='/Singin' style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Portal</Link>
                            <p className='text-gray-600'>Head to the customer dashboard </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center  gap-2  mt-5 -ml-36'   >
                        <div>
                        <img src="https://www.hostgator.com/content/dam/hostgator/header/icon_nav_website-builder.svg" alt="" /></div>
                        <div className='w-250 h-10' >
                            <Link to='/Login' style={{fontWeight:'bold'}} className='text-2xl text-blue-400'>Website builder</Link>
                            <p className='text-gray-600'> Go right into the builder</p>
                        </div>
                    </div>
                </div>
                </div>
            </li>
        </div>
      </div>
    </div>
  )
}

export default Nvvr1