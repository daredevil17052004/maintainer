import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Particles from '@/components/magicui/particles'

const Footer = () => {
    return (
        <div>
            <div className="h-[50vh] mx-32">
                <div className="flex flex-col justify-center items-center mt-6">
                    <div className="text-3xl font-semibold my-3">
                        <p>Expert car detailing services for every budget.</p>
                    </div>
                    <div className="w-[500px] my-3">
                        <Input placeholder='Email' />
                    </div>
                    <div className="w-[500px] my-3">
                        <Button className="bg-myAccent w-full" variant='ghost'>Subscribe</Button>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <div>
                        <div className="font-semibold my-3">
                            <p>Maintainer</p>
                        </div>
                        <div className="my-3">
                            <p>Our Team</p>
                        </div>
                        <div className="my-3">
                            <p>Our Process</p>
                        </div>
                        <div className="my-3">
                            <p>Picing</p>
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold my-3">
                            <p>Operational work Hours</p>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <div>
                                <p>Mon - Wed</p>
                            </div>
                            <div>: 9AM - 4PM</div>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <div>
                                <p>Thu - Fri</p>
                            </div>
                            <div>: 9AM - 5PM</div>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <div>
                                <p>Weekend</p>
                            </div>
                            <div>: Closed</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-black h-[10vh] text-white flex flex-col items-center justify-center relative">
                <Particles className="absolute inset-0 z-10" quantity={200} ease={80} color="#E33665" refresh />
                <div>
                    <p>Follow Us</p>
                </div>
                <div className="flex justify-between items-center w-28 mt-2">
                    <div>
                        <Image src='/facebook.png' width={20} height={20} />
                    </div>
                    <div>
                        <Image src='/twitter.png' width={20} height={20} />
                    </div>
                    <div>
                        <Image src='/youtube.png' width={20} height={20} />
                    </div>
                    <div>
                        <Image src='/linkedin.png' width={20} height={20} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer