
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

function Homelandingpage() {

    const textImageRef1 = useRef(null);
const textImageRef2 = useRef(null);
const headText1 = useRef(null);
const headText2 = useRef(null);


useGSAP(() => {
    
  gsap.from([textImageRef1.current, textImageRef2.current],{
    y:200,
    opacity:0,
    duration:0.8,
    stagger:0.1
  })
    
  gsap.from([headText1.current, headText2.current],{
    opacity:0,
    duration: 1,
    y:30
  })
})


  return (
    <div className="h-screen w-full relative flex flex-col justify-center items-center p-40">
    <h3 ref={headText1} className='text-black text-xl text-center'>Award for startups</h3>
    <div className='h-28 overflow-hidden'><img className='h-full' ref={textImageRef1} src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f46aee59c0e45f3fbe5b9e_startech.svg" alt="" /></div>
    <div className='h-28 overflow-hidden'><img className='h-full' ref={textImageRef2} src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f46afd932038ab1eace743_awards.svg" alt="" /></div>
    <h3 ref={headText2} className='text-sky-900 text-xl w-1/3 my-10 text-center'>Connecting dreams with reality, helping startups
    soar to the stars</h3>
  </div>
  )
}

export default Homelandingpage
