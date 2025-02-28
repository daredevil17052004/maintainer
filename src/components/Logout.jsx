'use client'
import React from 'react'
import { doLogout } from '@/app/actions';
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';

const Logout = () => {

  const router = useRouter();

  const handleLogout = async () => {
    const res = await doLogout();
    console.log(res)
    if(res.success){
      router.push('/');
    }
  };

  return (
    <Button variant='ghost' className="bg-myAccent" onClick={()=>doLogout()}>
      Logout
    </Button>
  )
}

export default Logout