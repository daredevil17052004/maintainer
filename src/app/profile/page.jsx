import React from 'react'
import NavigationBar from '@/components/NavigationBar'
import VehicleRegistration from '@/components/VehicleRegistration'
import { auth } from '@/auth'
import Expenses from '@/components/Expenses'

const page = async() => {

  const session = await auth()
  console.log('session',session?.user)
  return (
    <div className="h-screen">
        <NavigationBar/>
        <VehicleRegistration userId={session?.user?.id}></VehicleRegistration>
        <Expenses userId={session?.user?.id} vehicleId={session?.user?.vehicles}/>
    </div>
  )
}

export default page