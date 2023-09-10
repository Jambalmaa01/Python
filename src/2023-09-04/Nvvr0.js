import React from 'react'
import { NvvrData } from './NvvrData'
import { Pagination, Navigation } from 'swiper'
import{ Swiper, SwiperSlide} from 'swiper/react'
import "swiper/swiper-bundle.min.css"
const Nvvr0 = () => {
  // Swiper.use([Pagination])
  
  const paginationStyles = {
    
    width: '20px',
    height: '20px',
    margin: '100px 205px',
    backgroundColor: '#333',
    borderRadius: '50%',
    cursor: 'pointer',
    opacity: '0.5',
    transition: 'background-color 0.3s, opacity 0.3s',
    marginTop:'100px',
  };

  const activePaginationStyles = {
    // Define your custom styles for the active bullet here
    backgroundColor: '#ff5722',
    opacity: '1',
  };
  return (
   
    <div >
         <div  style={{ backgroundImage:"url('https://www.hostgator.com/content/dam/hostgator/footer/footerAngle-svg.svg')", width:'92%', height:'500px', backgroundSize:'cover', backgroundRepeat:'no-repeat', marginLeft:'75px', marginTop:'65px'  }}>
           <div style={{ backgroundImage:"url('https://www.hostgator.com/static/cs/img/carousel-bg-xl.svg')", width:'94%', height:'585px', backgroundSize:'cover', backgroundRepeat:'no-repeat' }} >
                   <h1 style={{fontWeight:'bold', paddingTop:'80px', paddingLeft:'150px'}} className='text-7xl text-white flex flex-col items-center'>Check out what these customers have to say.</h1>
                   
                   <Swiper
                   loop={true}
                   grapCursor={true}
                   spaceBetween={24}        //hoorondiin zai
                   pagination={{clickable:true, 
                    // renderBullet: (index, className) => {
                    //   // return (
                    //   //   <span class='${className}' style="${
                    //   //     index === Swiper.activeIndex ? activePaginationStyles : paginationStyles }"></span>
                    //   // );
                    // },
                  }}        //stegiig helne
                   breakpoints={{992:{slidesPerView:1},  
                   }}
                   modules={[Pagination]}>
                    {
                        NvvrData.map(({text, who})=>{
                            return(
                                <SwiperSlide  className='text-white mt-20 pl-20 pr-20 flex flex-col items-center' >
                                    <h6 style={{fontSize:'25px',}} >{text}</h6>
                                    <p className='text-xl'>{who}</p>
                                </SwiperSlide>
                            )
                        })
                    }
                   </Swiper>
           </div>
      </div>


      <div  className='flex flex-col items-center mt-32  text-blue-950'>
        <h1 style={{fontWeight:'bold'}} className=' text-6xl text-blue-950 mt-40'>24/7/365 support. <br /> </h1>
        <h1></h1>
        <div className='flex flex-row gap-24 mt-14'>
          <div>
            <img src="https://newfold.scene7.com/is/content/NewfoldDigital/icon__mobilephone_-blue-50-9?ts=1685528333585&dpr=off" alt="" />
            <h4 style={{fontWeight:'bold', }} className='text-2xl '>Call us</h4>
            <a href='' className='text-blue-400'>(866) 964-2867</a>
          </div>
          <div>
            <img src="https://newfold.scene7.com/is/content/NewfoldDigital/a-icon__chat_-orange-50-9?ts=1685528336964&dpr=off" alt="" />
            <h4  style={{fontWeight:'bold',}} className='text-2xl '>Chat us</h4>
            <a className='text-blue-400' href="">Live Chat</a>
          </div>
          <div>
            <img src="https://newfold.scene7.com/is/content/NewfoldDigital/a-icon__tweet_-yellow-50-9?ts=1685528332470&dpr=off" alt="" />
            <h4  style={{fontWeight:'bold', }} className='text-2xl '>Tweet us</h4>
            <a className='text-blue-400' href="">@HGSupport</a>
          </div>
          <div>
            <img src="https://newfold.scene7.com/is/content/NewfoldDigital/a-icon__book_-orange-50-9?ts=1685528329390&dpr=off" alt="" />
            <h4  style={{fontWeight:'bold', }} className='text-2xl '>Find answers</h4>
            <a className='text-blue-400' href="">KnowledgeBase</a>
          </div>
          <div>
            <img src="https://newfold.scene7.com/is/content/NewfoldDigital/a-icon__website_-blue-50-9?ts=1685528334323&dpr=off" alt="" />
            <h4  style={{fontWeight:'bold', }} className='text-2xl '>Learn stuff</h4>
            <a className='text-blue-400' href="">HostGator Blog </a>
          </div>
        </div>
      </div>


      
      <div className='flex flex-col items-center mt-16'> 
        <h1 style={{fontWeight:'bold'}} className='text-7xl text-blue-950'>Got questions?</h1>
        <h1 style={{fontWeight:'bold'}} className='text-7xl text-blue-950'>Well, we've got answers.</h1>
        <div className='flex flex-row mt-10 gap-4'>
           <div>
             <div>
              <h2 className='text-blue-950 text-xl ' style={{fontWeight:'bold'}}>What is web hosting and do I need it?</h2>
              <p  style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'14px', }} className='text-gray-800 mt-5'>Every website takes up space on a physical server somewhere. Web <br/> hosting stores those files and makes your site’s content accessible to <br/> people online.</p>
              <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'14px', }} className='text-gray-800 mt-5'>
                <a href=''>Learn more about what web hosting is,</a>
                why you need it, and what options <br/> may be right for you.
              </p>

             </div>
             <div>
              <h2 className='text-blue-950 text-xl mt-5' style={{fontWeight:'bold'}}>What type of web hosting do I need?</h2>
              <p  style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'14px', }} className='text-gray-800 mt-5'>It all depends on the needs of your site. For beginners and smaller sites, <br/> shared hosting is probably just right. For those who need more control, <br/> VPS or dedicated hosting is likely a better option.</p>
              <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'14px', }} className='text-gray-800 mt-5'>
              Learn about the different hosting options available, and see which one is a <br/> good fit.
              </p>
          
             </div>
             <div>
              <h2 className='text-blue-950 text-xl mt-5' style={{fontWeight:'bold'}}>What’s the difference between web hosting and a <br/>  website  builder?</h2>
              <p  style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'14px', }} className='text-gray-800 mt-5'>While web hosting is providing and maintaining servers, a website builder <br/> is a software tool that makes creating your website easy and effective.</p>
              <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'14px', }} className='text-gray-800 mt-5'>
              Get more info on the differences, and see if you need a builder to create <br/> your site.
              </p>
          
             </div>
            </div >  
            <div >
            <div>
              <h2 className='text-blue-950 text-xl ' style={{fontWeight:'bold'}}>What is WordPress?</h2>
              <p  style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'14px', }} className='text-gray-800 mt-5'>As the most popular tool to create websites, it’s a content management <br/> system (CMS) that develops various types of websites.</p>
              <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'14px', }} className='text-gray-800 mt-5'>
              See the benefits of building with WordPress and decide for yourself if it’s <br/> the right call for you.
              </p>
          
             </div>
             <div>
              <h2 className='text-blue-950 text-xl' style={{fontWeight:'bold'}}>How can I transfer my domain to HostGator? <br/> builder?</h2>
              <p  style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'14px', }} className='text-gray-800 mt-5'>We’ve set up a complete guide on how to transfer your domain, including <br/> what you need to do beforehand, how to get it started, how to check its <br/> status, and any troubleshooting notes.</p>
              
             </div>
             <div>
              <h2 className='text-blue-950 text-2xl mt-5' style={{fontWeight:'bold'}}>Have another question?</h2>
              <a  href='' style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'18px', }} className='text-blue-400 mt-5'>See our KnowledgeBase</a>
              <h2 className='text-blue-950 text-2xl mt-5' style={{fontWeight:'bold'}}>Want more tips?</h2>
              <a href=''  style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'18px', }} className='text-blue-400 mt-5'>Visit our blog</a>
             </div>
            </div>
        </div> 
      </div>
     






    <div>
      <p className='text-blue-400 mt-40 ml-16 '>*Prices reflect discount on first term</p>
      <div style={{backgroundImage:"url('https://www.hostgator.com/content/dam/hostgator/footer/footerAngle-svg.svg')",  width:'92%', height:'150px', backgroundSize:'cover', backgroundRepeat:'no-repeat', marginLeft:'75px', marginTop:'25px' }}>
        <div className='flex flex-row justify-around items-center' style={{ backgroundImage:"url('https://www.hostgator.com/static/cs/img/carousel-bg-xl.svg')", width:'95%', height:'155px', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            <h1 className='text-white text-4xl'  style={{fontWeight:'bold'}}>Sign up for web <br/> hosting today!</h1>
            <div className='text-white text-xl'  style={{fontWeight:'bold'}}>
              <h2>Introductory offer</h2>
              <h2 className='text-blue-400 text-2xl'>$3.75/mo*</h2>
            </div>
            <div>
            <button className='text-blue-950 text-xl'  style={{width:'200px', height:'50px', backgroundColor:'#FFD700', marginTop:'28px', fontWeight:'bold'}} >Get Started</button>
            </div>

        </div>
      </div>
      </div> 
     
    </div>
  )
}

export default Nvvr0 