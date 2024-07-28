import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'
import plans from '@/assets/Plans'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import ShinyBorder from '../../components/ShinyBorder'
import Particles from '@/components/magicui/particles'
import BoxReveal from '../../components/BoxReval'

const page = () => {
    return (
        <div>
            <BoxReveal boxColor='#E33665'>

                <NavigationBar />

                <div className=" mx-32 flex flex-col ">
                    <div className='flex flex-col items-center justify-center mb-20 mt-10 '>
                        <div className="text-3xl font-semibold">
                            <p>Pricing</p>
                        </div>
                        <div className='w-[900px]'>
                            <p>We offer a range of car detailing packages designed to meet your specific needs. At Maintainer, we believe in the transformative power of a clean car.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            plans.map((item, index) => {
                                return (
                                    <ShinyBorder>
                                        <div className="h-[450px] shadow-lg flex flex-col bg-myAccent/20 p-4 rounded">
                                            <div className="text-3xl font-semibold mb-4">
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="text-4xl mb-4 font-semibold">
                                                <p>${item.price}</p>
                                            </div>
                                            <div className="font-medium mb-3">
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="mb-3">
                                                {item.services.map((item) => {
                                                    return (
                                                        <div className="flex items-center">
                                                            <span className="mr-2"><Image src='/checkbox.png' width={10} height={10} /></span>{item}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="mt-3">
                                                <Button variant='ghost' className="bg-myAccent text-white">Get Started</Button>
                                            </div>

                                        </div>
                                    </ShinyBorder>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="h-screen w-full">
                    <div className="mx-32 h-screen flex flex-col justify-evenly items-start ">
                        <div>
                            <div className="font-semibold">
                                <span className="text-myAccent">|</span>
                                <span>Why choose us</span>
                            </div>
                            <div className="text-4xl font-semibold mt-3">
                                <p>
                                    Experience the ultimate in car detailing and{" "}
                                    <span className="text-myAccent"> diagnosing </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center  w-full">
                            <div className="w-1/2 flex items-center justify-center">
                                <Image
                                    src="/service2.jpg"
                                    width={500}
                                    height={700}
                                    className="h-[600px] w-auto rounded"
                                />
                            </div>

                            <div className="w-1/2">
                                <div>
                                    <div className="p-2 bg-black text-white w-fit my-3">
                                        <p>1. Interior Cleaning</p>
                                    </div>
                                    <div>
                                        <p>
                                            Our expert team uses the latest techniques and equipment
                                            to restore your vehicle’s interior to pristine condition,
                                            from leather conditioning to carpet deep cleaning.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-2 bg-black text-white w-fit my-3">
                                        <p>2. Exterior Detailing</p>
                                    </div>
                                    <div>
                                        <p>
                                            Our exterior detailing services are tailored to each
                                            vehicle, from hand washing to paint protection, ensuring
                                            your car looks stunning and protected from the elements.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-2 bg-black text-white w-fit my-3">
                                        <p>3. Paint Restoration</p>
                                    </div>
                                    <div>
                                        <p>
                                            Our paint restoration services use the latest technology
                                            and techniques to restore your vehicle’s paint to its
                                            original beauty and luster.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-2 bg-black text-white w-fit my-3">
                                        <p>4. Exceptional Customer Service</p>
                                    </div>
                                    <div>
                                        <p>
                                            We prioritize customer service, ensuring your experience
                                            with us is exceptional from start to finish.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" w-full relative">
                    <Particles className="absolute inset-0" quantity={200} ease={80} color="#E33665" refresh />

                    <div className="mx-32 my-40 flex flex-col justify-evenly items-start ">

                        <div className="flex items-center justify-center  w-full">

                            <div className="w-1/2 ">
                                <div className="my-7">
                                    <div className="font-semibold">
                                        <span className="text-myAccent">|</span>
                                        <span>Payment Transparency</span>
                                    </div>
                                    <div className="text-4xl font-semibold mt-3">
                                        <p>Honest pricing builds trust and
                                            <span className='text-myAccent'> satisfaction </span></p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="p-2 bg-black text-white w-fit my-3">
                                            <p>Upfront Cost Estimates</p>
                                        </div>
                                        <div>
                                            <p>
                                                We provide transparent pricing and detailed
                                                proposals, ensuring you know exactly what
                                                services you’re receiving and the cost associated
                                                with them.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="p-2 bg-black text-white w-fit my-3">
                                            <p >No Hidden Fees</p>
                                        </div>
                                        <div>
                                            <p>
                                                Our pricing structures are transparent, with no
                                                surprise charges or unexpected add-on costs,
                                                giving you peace of mind.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="p-2 bg-black text-white w-fit my-3">
                                            <p>Flexible Payment Options</p>
                                        </div>
                                        <div>
                                            <p>
                                                We offer various payment methods and are happy
                                                to discuss flexible schedules to accommodate your
                                                preferences and financial needs.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="p-2 bg-black text-white w-fit my-3">
                                            <p>Itemized Invoicing</p>
                                        </div>
                                        <div>
                                            <p>
                                                Our invoices provide a clear breakdown of all
                                                services rendered and associated costs, ensuring
                                                complete transparency throughout the billing
                                                process.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 flex items-center justify-center">
                                <Image src='/payment.jpg' width={600} height={700} className="rounded h-[500px] w-[400px]" />
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </BoxReveal>
        </div>
    )
}

export default page