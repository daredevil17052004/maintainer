import React from 'react'
import RegistrationForm from '@/components/RegistrationForm'
import Link from 'next/link'

const Regi = () => {
  return (
    <>
        <RegistrationForm/>
            <p>Already have an account?</p>
        <Link href='login' className="hover:text-myAccent hover:underline-offset-4 hover:underline transition duration-700">Login</Link>

    </>
  )
}

export default Regi