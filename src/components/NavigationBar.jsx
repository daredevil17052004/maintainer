import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const NavigationBar = () => {
    return (
        <div className="flex justify-around h-24  items-center">
            <div>
                <h1 className="font-bold text-xl"><Link href='/'>Maintainer</Link></h1>
            </div>
            <div className='flex justify-between w-96'>
                <div>
                    <Link href="/services">Services</Link>
                </div>
                <div>
                    <Link href="/pricing">Pricing</Link>
                </div>
                <div>
                    <Link href="/about">About Us</Link>
                </div>
                <div>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
            <div>
                <Link href='/register'>
                    <Button variant="ghost" className="bg-myAccent text-white">Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

export default NavigationBar