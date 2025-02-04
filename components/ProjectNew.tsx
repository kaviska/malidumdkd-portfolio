import React from 'react'
import Image from 'next/image'

const ProjectNew = () => {
  return (
    <div>
        <div className='flex '>
            <div className='w-[200px] h-[200px]'>
                <Image src='/Meet&Greet.png' alt='sample' width={200} height={200}></Image>
            </div>

        </div>
    </div>
  )
}

export default ProjectNew