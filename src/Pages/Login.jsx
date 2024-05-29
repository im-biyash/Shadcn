import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
const Login = () => {
  return (
    <div className=' min-h-screen flex justify-center items-center '>

      <Card className = 'w-[350px] border-2 rounded-2xl'>
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription className="text-center">Logi to see your dashboard</CardDescription>
      </CardHeader>
      <CardContent>
       <div className='grid gap-2'>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" className="border-2 rounded" />
       </div>
       <div className='grid gap-2'>
          <Label htmlFor="email">Password</Label>
          <Input type="email" name="email" id="email" className='border-2 rounded' />
       </div>
      </CardContent>
      <CardFooter>
        <Button  className="w-full">Login</Button>
      </CardFooter>
    </Card>
    
    </div>
  )
}

export default Login
