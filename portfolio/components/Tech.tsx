import React from 'react'
import { TechProps } from '../type' 
import Image from 'next/image'

const Tech = ({tech,className}:TechProps) => {
  return (
    <div>
        <button className={`techButton alg-p ${className}`
        }>
            <Image src={`/${tech}.svg`} alt='techContent' className='inline mr-5' width={40} height={40}></Image>

            {tech}

        </button>
    </div>
  )
}

export default Tech