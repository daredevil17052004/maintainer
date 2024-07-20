import React from 'react'
import Pricing from '@/assets/Pricing'
import { Button } from '@/components/ui/button'

const Service = () => {
    return (
        <div className="h-screen w-full ">
            <div className="mx-32 h-screen flex flex-col items-center justify-evenly">
                <div className="flex flex-col items-center justify-center">
                    <div className="font-semibold ">
                        <span className="text-myAccent"> | </span>
                        <span>Our Services</span>
                    </div>
                    <div className="font-semibold text-3xl my-3">
                        <p>Expert, tailored car detailing services for every vehicle.</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    {
                        Pricing.map((item, index) => {
                            return (
                                <div className="bg-myAccent/10 flex flex-col items-start justify-center p-6  rounded" key={index}>
                                    <div className='font-semibold text-md my-2'>
                                        <p>{item.serviceName}</p>
                                    </div>
                                    <div className="my-2">
                                        <p>{item.details}</p>
                                    </div>
                                    <div className="font-semibold text-lg my-2">
                                        <span>{item.price}</span><span>/month</span>
                                    </div>
                                    <div>
                                        <Button className="bg-myAccent text-white " variant='ghost'>Get Started</Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Service