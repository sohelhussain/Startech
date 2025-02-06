import React from 'react'

function Structure() {
  return (
    <div className='h-screen fixed p-6 w-screen bg-[#F4F9FB]'>
      <div className='fixed left-0 top-0 w-full'>
      <img className='absolute top-0 w-1/2 left-0' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f2ff660acfee8ba5cd3b36_border-left-top.svg" alt="" />
      <img className='absolute top-0 w-1/2 right-0' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/66603af083943342fe214cf9_border-right-top-new.svg" alt="" />
      </div>
      <div className='fixed left-0 top-1/2 -translate-y-1/2'>
        <img className='w-[6vw]' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f3025ed598b85f146d736d_border-left-center.svg" alt="" />
      </div>
      <div className='fixed right-0 top-1/2 -translate-y-1/2'>
        <img className='w-[6vw]' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f302f74ee53940c8b3ece4_border-right-center.svg" alt="" />
      </div>
      <div className='fixed left-0 bottom-0'>
        <img src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f3036a2e2eb26578681d49_border-left-bottom.svg" alt="" />
      </div>
      <div className='fixed right-0 bottom-0'>
        <img src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f3033284a9b1ecad6ccfc2_border-right-bottom.svg" alt="" />
      </div>
      <div className="absolute flex justify-between items-center px-20 w-full left-0 bottom-7">
        <img className='h-36' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a44ad564d4d03ce8f94f_Object1.svg" alt="" />
        <img className='h-28' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a486295efb3bb8c5d777_Object2.svg" alt="" />
      </div>
      <div className='h-full w-full overflow-hidden bg-linear-to-r from-[#EBEEED] to-[#C6D8E1] rounded-3xl'>
        <img className='h-full w-full object-cover' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601b7d63c31da7e5be13f14_Frame%201815%20copy-min%20(1).webp" alt="" />
      </div>
    </div>
  )
}

export default Structure