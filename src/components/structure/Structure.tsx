import React from 'react'
import Top from './Top'
import Leftlayer from './Leftlayer'
import Rightlayer from './Rightlayer'
import BottomCorner from './BottomCorner'

function Structure() {
  return (
    <div className='fixed z-50'>
      <Top />
      <Leftlayer />
      <Rightlayer />
      <BottomCorner />
    </div>
  )
}

export default Structure