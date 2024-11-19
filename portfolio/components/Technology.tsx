import { TechnologyProps } from '@/type'
import React from 'react'
import Image from "next/image"

const Technology = ({icon}:TechnologyProps) => {
  return (
    <div>
        <div className="octagon">
      <div className="icon-container">
       
          <Image src={`./${icon}.svg`} alt="text icon" width={40} height={40} className='tech-icon' />
       
      </div>
    </div>
    </div>
  )
}

export default Technology