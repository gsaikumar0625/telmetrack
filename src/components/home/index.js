import React from 'react'
import homebanner from '../../assests/home_banner.jpg';
import { Button, Carousel } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const navigate = useNavigate();

  const fun = () => {
    navigate('/project')
  }

  return (
    <>
      <div className="home-section">
        <div className="overlay"></div>
        <h4 className='heading text-white animate__animated animate__fadeInUp'>Continuous tracking for unpowered logistics assets</h4>
        <p className='z-[1] text-white font-semibold w-[70%] mt-8 text-[24px] leading-[37px]  animate__animated animate__fadeInDown'>
          Stop wasting energy and money. Join the TelemeTrak revolution and experience <br /> the power of a smarter, more efficient solar system.</p>
      </div>

      <div className="mx-auto md:max-w-7xl xl:max-w-screen-xl px-12 lg:px-32 p-1 flex justify-center">
        <div>
          <h1 class="text-primaryColor my-12 font-extrabold animate__animated animate__slideInDown" style={{ fontSize: 40 }}>Our Expertise</h1>
        </div>
      </div>
      <div class="flex-col w-full md:flex-row mx-auto md:max-w-7xl xl:max-w-screen-xl
         px-12 lg:px-32 p-1 flex justify-center">

        <div className="sm:flex gap-4"> 
          <div className='sm:w-1/2'>
            <Carousel>
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>

          <div className='sm:w-1/2'>
            <div className='shadow-custom px-3 py-4'>
               <p className='text-primaryColor text-2xl pb-2 font-bold'>Solar Optimization</p> 
               <p className='whitespace-normal font-medium'>Optimize Your Solar with TelemeTrak's Innovative 
               Buffering Technology...</p>
              <a href='./solar_optimization'>
                <div className='mt-4 underline text-lg 
               font-semibold text-secondaryColor'>Continue Reading</div> </a>
             </div> 

             <div className='shadow-custom px-3 py-4 mt-2'>
             <p className='text-primaryColor text-2xl pb-2 font-bold'>Asset Tracking</p> 
               <p className='whitespace-normal font-medium'>Optimize Your Solar with TelemeTrak's Innovative Buffering 
               Technology...</p>
               <a href='./asset_tracking'>
                 <div className='mt-4 underline text-lg 
               font-semibold text-secondaryColor'>Continue Reading</div>
               </a>
               
             </div> 
          </div>

        </div>
      </div>

      {/* <div class="flex mx-auto justify-center">
        <div class="flex-col w-full md:flex-row mx-auto md:max-w-7xl xl:max-w-screen-xl
         px-12 lg:px-32 p-1 flex justify-center">

          <div class="w-full md:w-1/2 px-12 text-justify space-x-2 h-2/5 mb-4 animate__animated
           animate__zoomIn">
            <p className='text-primaryColor text-xl pb-4 font-bold'>Solar Optimization</p>
            <p className='text-black font-medium text-lg'>
              <p className='text-secondaryColor font-semibold mb-3'>Power Up Your Savings :</p>
              <p className='whitespace-normal'>Optimize Your Solar with TelemeTrak's Innovative Buffering Technology</p>
              <div className='py-10 h-96'>
                <p className='text-secondaryColor font-semibold mb-3'>Stop wasting energy and money : </p>
                <p>Frustrated with inconsistent solar power production and expensive battery replacements? Introducing TelemeTrak's revolutionary buffering technology - your key to maximizing solar efficiency and savings.</p>
              </div>
            </p>

           

            <Carousel className="rounded-xl h-[200px] mb-4">

              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
            
            <Button className='bg-secondaryColor text-white' onClick={fun}>Know More</Button>
          </div>

          <div class="vl"></div>

          <div class="w-full md:w-1/2 px-12 text-justify space-x-2 h-2/5 mb-4 animate__animated
           animate__zoomIn">

            <p className='text-primaryColor font-bold text-xl pb-4'>Asset Tracking</p>
            <p className='text-black font-medium text-lg'>
              <p className='text-secondaryColor font-semibold mb-3'>Power Up Your Savings :</p>
              <p className='whitespace-normal'>Optimize Your Solar with TelemeTrak's Innovative Buffering Technology</p>
 

              <div className='py-10 h-96'>
                <p className='text-secondaryColor font-semibold mb-3'>Maximize Efficiency with RFID-Powered Asset Tracking Solutions :</p>
              
                <p>Tired of wasting time and resources hunting for misplaced tools, parts, or equipment? Introducing the next generation of local maintenance assets tracking: RFID-powered solutions that give you real-time visibility and control over your assets, right at your fingertips.</p>
              </div>
            </p>

            <Carousel className="rounded-xl h-[200px] mb-4">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>

            <Button className='bg-secondaryColor text-white' onClick={fun}>Know More</Button>
          </div>

        </div>
      </div> */}

    </>
  )
}

export default Home