
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'
import Homelandingpage from './Homelandingpage';

function Homepage() {

  const lendImage1 = useRef(null);
  const lendImage2 = useRef(null);

useGSAP(() => {
  gsap.from(lendImage1.current,{
    x: -200,
    opacity:0,
    duration:1
  })
  gsap.from(lendImage2.current,{
    x: 200,
    opacity:0,
    duration:1
  })
})

  return (
    <div className='relative h-screen w-screen overflow-x-hidden p-6 bg-[#F4F9FB]'>
      <div className='h-full w-screen p-6 overflow-x-hidden overflow-y-auto absolute rounded-3xl bg-linear-to-r from-[#EBEEED] to-[#C6D8E1]'>
        <img ref={lendImage1} className='h-[110%] absolute scale-125 ml-20' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f42cc5f90e1d3b2215bd7f_394397%206%20copy%20(1).png" alt="" />
        <img ref={lendImage2} className='relative h-[110%] bottom-0 mt-80 scale-125 ml-20' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f462326356e70fa630f505_hero1-img%20(1).png" alt="" />
      </div>
      <Homelandingpage />
    </div>
  )
}

export default Homepage