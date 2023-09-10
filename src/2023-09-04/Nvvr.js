import React from 'react';
import { Link, useNavigate, NavLink} from 'react-router-dom'

const Nvvr = () => {
  return (
    <div className="w-full h-full " style={{marginTop:'0px'}}>
      


      <div style={{
    backgroundImage: "url('https://www.hostgator.com/content/dam/hostgator/pages/homepage/HomePageHero-BG.svg')",
    backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "35rem" , position:'', marginTop:'0px'}}>'
          <div style={{marginLeft:'75px',  }} >
            <h1 style={{ fontWeight:'bold'   }} className='text-blue-950 text-6xl '>Go where the pros host.</h1>
            <p style={{ fontFamily: '"Lucida Console", Courier, monospace ', fontSize:'20px', }} className='text-blue-950  pt-8 '>Web hosting that scales from easy to expert.</p>
          </div>

          <div className='flex flex-row '>
            <div style={{marginLeft:'75px', paddingTop:'25px'}} className='w-90 h-100 '>
              <div>
              <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'13px', }} className='text-gray-800'>A ton of website hosting options, 99.9% uptime guarantee, free SSL
              <br />
               certificate, easy WordPress installs, and a free domain for a year.</p>
              <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'13px', }} className='text-gray-800 pt-8'
              >Yeah, that's how we roll.</p>
              </div>
              <div className='flex flex-row  '>
                 <button className='text-blue-950 text-xl'  style={{width:'200px', height:'50px', backgroundColor:'#FFD700', marginTop:'28px', fontWeight:'bold'}} >Get Started</button>
                 <button  style={{width:'180px', height:'50px',backgroundColor:'yellow', marginTop:'30px' }}>Starting at only <br /> $3.75/mo*</button>
               </div>
            </div>
            <div> 
              <img style={{ width:'420px', height:'330px', marginTop:'-50px', marginLeft:'70px'}}   src="https://newfold.scene7.com/is/image/NewfoldDigital/gator-1?ts=1685528340721&dpr=off&fmt=png-alpha" alt="" />
            </div>
          </div>
   
        
      </div>



      <div style={{ position:'absolute'}} >
        <div>
          <h1  style={{ fontWeight:'bold', paddingLeft:'180px'  }} className='text-3xl text-blue-950' >Pick your perfect web hosting plan. We got 'em all.</h1>
        </div>
        <div className='flex flex-row justify-center mt-10  '>
          <div style={{padding:' 0px 40px'}} >
            <img  src="https://newfold.scene7.com/is/content/NewfoldDigital/SharedHosting-Yellow-2?ts=1690547198869&dpr=off" alt="" width={'55px'} />
            <h2 style={{ fontWeight:'bold',   }} className=' text-blue-950  text-xl '>Shared <br /> hosting </h2>
            <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'12px', }} className='text-gray-800'>Easy, affordable, and <br />includes a free domain <br />for a year. Score!</p>
            <h6 className='text-base ' style={{fontWeight:'600'}}>Starts at </h6>
            <p className='text-base text-blue-400  ' style={{fontWeight:'600'}}>$3.75/mo*</p>
            <a className='text-blue-400  text-sm' href="">Learn more</a>
          </div>
          <div  style={{padding:' 0px 40px'}}>
          <img  src="https://newfold.scene7.com/is/image/NewfoldDigital/wordpress-icon-updated?ts=1687289731943&dpr=off&fmt=png-alpha" alt="" width={'55px'} />
            <h2 style={{ fontWeight:'bold',   }} className=' text-blue-950  text-xl '>WordPress <br /> hosting</h2>
            <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'12px', }} className='text-gray-800'>2.5x the speed, beefed <br /> up security, and free <br />  migrations.</p>
            <h6 className='text-base ' style={{fontWeight:'600'}}>Starts at</h6>
            <p className='text-base  text-blue-400 ' style={{fontWeight:'600'}}>$5.95/mo*</p>
            <a  className='text-blue-400  text-sm' href="">Learn more</a>
          </div>
          <div  style={{padding:' 0px 40px'}}>
          <img  src="https://newfold.scene7.com/is/content/NewfoldDigital/VPSIcon-2?ts=1685528338430&dpr=off" alt=""  width={'55px'}/>
            <h2 style={{ fontWeight:'bold',   }} className=' text-blue-950  text-xl '>VPS <br /> hosting</h2>
            <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'12px', }} className='text-gray-800'>Full root access in a fully <br /> scalable hosting <br /> environment.</p>
            <h6 className='text-base ' style={{fontWeight:'600'}}>Starts at</h6>
            <p className='text-base  text-blue-400 ' style={{fontWeight:'600'}}>$23.95/mo*</p>
            <a  className='text-blue-400  text-sm' href="">Learn more</a>
          </div>
          <div  >
          <img   src="https://newfold.scene7.com/is/content/NewfoldDigital/DedicatedIcon-2?ts=1685528326809&dpr=off" alt="" width={'55px'} />
            <h2 style={{ fontWeight:'bold',   }} className=' text-blue-950  text-xl '>Dedicated <br /> hosting</h2>
            <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'12px', }} className='text-gray-800'>The ultimate in <br /> performance. Get total <br /> server control.</p>
            <h6 className='text-base  ' style={{fontWeight:'600'}}>Starts at</h6>
            <p className='text-base  text-blue-400 ' style={{fontWeight:'600'}}>$89.98/mo*</p>
            <a  className='text-blue-400  text-sm' href="">Learn more</a>
          </div>
        </div>
      </div>
      
      <div style={{marginTop:'500px'}} className=' flex flex-col items-center'>
        <div>
        <h1 style={{fontWeight:'bold'}} className='text-6xl text-blue-950 '>Start with HostGator.</h1>
        <h1 style={{fontWeight:'bold'}} className='text-6xl text-blue-950 '>Start with HostGator.</h1>
        </div>

        <div className='flex flex-row  'style={{marginTop:'55px'}} >
          <div style={{marginTop:'55px'}}>
            <h1 style={{fontWeight:'bold', fontSize:'38px'}} className=' text-blue-950 '>This gator scales.</h1>
            <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'12px',  marginTop:'20px'}} className='text-gray-800' >We've been doing this since the Jurassic (aka since 2002), so we know that <br /> to help newbies and pros alike that  it takes all kinds of plans. Our tools are <br /> designed to grow with you, so you'll never outgrow us (unlike with some of <br />
             those other guys, just sayin'). That's what being unstuckable is all about.</p>
             <div className='flex flex-row  justify-between' style={{marginTop:'20px'}}>
              <div>
                <h2 style={{fontWeight:'bold'}} className='text-3xl text-blue-400 '>30%</h2>
                <h1 style={{fontWeight:'normal', marginTop:'5px'}} className='text-sm text-blue-500 '> of customers are web pros.</h1>
              </div>

              <div className='w-0.5 h-17 bg-black'></div>
              <div>
                <h2 style={{fontWeight:'bold'}} className='text-3xl text-blue-400 '>2 million +</h2>
                <h6 style={{fontWeight:'normal', marginTop:'5px'}} className='text-sm text-blue-500 '>websites currently hosted.</h6>
              </div>
             </div>
          </div>
          <div style={{ marginLeft:'200px'}}>
            <img src="https://newfold.scene7.com/is/content/NewfoldDigital/template?ts=1685528331751&dpr=off" alt=""  width={'370px'}/>
          </div>
        </div>

        <div style={{marginTop:'20px'}} className='flex flex-row justify-center gap-20'  >
            
           
              <div>
                  <div >
                <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-950 '>Free domain</h1>
                <p  style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'12px',  marginTop:'20px'}} className='text-gray-800'  >Get your first year of domain <br /> registration on us. See terms</p>
              </div>
              <div>
                <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-950 '>99.9% uptime guarantee</h1>

                <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'12px',  marginTop:'20px'}} className='text-gray-800'>The best ability is availability — so we make <br /> sure your site stays up.</p>
              </div>
              </div>

              <div>
              <div>
              <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-950 '>Free site transfers</h1>
                <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'13px',  marginTop:'20px'}} className='text-gray-800'>Already have a site? Bring it on over to us, we <br /> gotchu covered.</p>
              </div>
              <div>

                <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-950 '>One-click installs</h1>
                <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'13px',  marginTop:'20px'}} className='text-gray-800'> Integrating your apps couldn't be any easier.</p>
              </div>
              </div>

              <div>
              <div>
              <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-950 '> Unmetered bandwidth</h1>
                <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'12px',  marginTop:'20px'}} className='text-gray-800'>Bring in all the traffic your little heart desires. <br /> We can handle it. See terms</p>
              </div>
              <div>
              <h1 style={{fontWeight:'bold'}} className='text-2xl text-blue-950 '>Free SSL certificate</h1>
              <p style={{ fontFamily: ' Verdana, Arial, Helvetica, sans-serif ', fontSize:'12px',  marginTop:'20px'}} className='text-gray-800'>Show your visitors you take security seriously. <br /> Learn more. <br /> We can handle it. See terms</p>
              </div>
              </div>

        </div>
      </div>


    </div>
  );
};

export default Nvvr;
