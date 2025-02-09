import { useRef } from 'react'
import Cards from '../../ui/Cards'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Seccontainer() {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=> {
    gsap.to([divRef1.current, divRef2.current],{
    y:-500,
    scrollTrigger:{
      trigger:"#sec",
      markers: true,
      start: "0 0",
      end: "top -50%",
      scrub: 1,
      // pin: true
    }
    })
  })


  return (
    <div id='sec' className='min-h-screen w-full mt-52 flex items-start justify-between text-center p-20 bg-red-200'>
      <div ref={divRef1} className='mt-40'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className='flex flex-col justify-center items-center gap-10'>
        <h3 className='text-[#154359] capitalize text-7xl'>15 сategories</h3>
        <video className='w-[80%] mix-blend-darken' src="https://www.dropbox.com/scl/fi/kshsba87e82hyni11vzkk/3d-startech-final-1.mp4?rlkey=3bxi98ck9ki0vjpr6jaii0vw5&&raw=1" autoPlay muted loop></video>
      </div>
      <div ref={divRef2} className='mt-40'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default Seccontainer