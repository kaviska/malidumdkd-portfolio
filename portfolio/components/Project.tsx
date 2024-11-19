import React from 'react'
import Tech from './Tech'
//import Contact from './Earth'

const project=[
    {
        name: 'Greet & Meeting',
        workedOn: ['Frontend', 'Backend','Admin'],
        Technology: ['HTML', 'CSS', 'PHP', 'JS', 'MySQL', 'Stripe', 'Git', 'Boostrap', 'Github', 'C Pannel'],
        details:'https://parking.yourmeetandgreetservice.co.uk/',
    }
]

const Project = () => {
  return (
    <div>
        <h1 className='heading'>Projects</h1>
        <div className="project-card flex bg-[#102762] mx-10">
            <div className=' w-[900px]'>1</div>
            <div>
                <h1 className=" text-[50px] text-white">Meet & Greet</h1>
                <div className='text-white text-[30px]'>
                    <p>Worked On</p>
                    <button className='project-btn mr-2'>Frontend</button>
                    <button className='project-btn mr-2'>Backend</button>
                    <button className='project-btn mr-2'>Admin</button>
                    
                </div>
                <div>
                    <p className='text-white text-[30px]'>Tech I used one</p>
                    <div className='flex gap-3 flex-wrap'>
                        <Tech tech='React' className=''/>
                        <Tech tech='React' className=''/>
                        <Tech tech='React' className=''/>
                        <Tech tech='React' className=''/>

                        <Tech tech='React' className=''/>
                        <Tech tech='React' className=''/>
                        <Tech tech='React' className=''/>
                        <Tech tech='React' className=''/>
                    </div>

                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Project