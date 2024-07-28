import React from 'react'
import RegistrationForm from '@/components/RegistrationForm'
import Link from 'next/link'

const Regi = () => {
  return (
    <>
        <RegistrationForm/>
            <p>Already have an account?</p>
        <Link href='login'>Login</Link>

    </>
  )
}

export default Regi