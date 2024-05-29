import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-4 justify-center items-center'>
        <div className="">
            <h1 className='text-5xl p-2 text-center'>Powerful for developers</h1>
            <h1 className='text-3xl text-center my-2'>Fast for Everyone</h1>
        </div>
        <p className='text-center p-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='flex gap-2'>
        <Button variant = "bs">Hello Biaysh</Button> 
        <Button variant = "default">Hello Biaysh</Button> 
        </div>
     
    </div>
  )
}

export default Hero
