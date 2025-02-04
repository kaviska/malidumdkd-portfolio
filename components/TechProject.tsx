import React from 'react'
import { TechProps } from '../type' 
import Image from 'next/image'

const Tech = ({tech,className}:TechProps) => {
  return (
    <div>
        <button className={`projectButton alg-p  ${className}`
        }>
            <Image src={`/${tech}.svg`} alt='techContent' className='inline md:mr-2 mr-1 md:w-8 w-5' width={10} height={10}></Image>
    <span className="text-[14px]">
    {tech}

    </span>

        </button>
    </div>
  )
}

export default Tech