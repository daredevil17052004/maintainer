'use client'
import React from 'react'
import { doLogout } from '@/app/actions'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';

const Logout = () => {

  const router = useRouter();

  const handleLogout = async () => {
    await doLogout();
    // The navigation should happen automatically after signOut completes
    // But if it doesn't, you can force it:
    router.push('/');
    router.refresh();
  };

  return (
    <Button variant='ghost' className="bg-myAccent" onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default Logout