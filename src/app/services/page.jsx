import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import socialMediaData from '@/assets/Socials'
import Service from '../../components/Service'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import serves from '@/assets/Services'
import Particles from '@/components/magicui/particles'
import BoxReveal from '../../components/BoxReval'


const page = () => {
    return (
        <div>
            <BoxReveal boxColor='#E33665'>

                <NavigationBar />

                <div className="h-screen">
                    <div className="container  h-full mx-auto px-4 flex flex-col items-center justify-between">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-3xl mb-4 font-medium">
                                <p>Services</p>
                            </div>
                            <div className="mb-8">
                                <p>Unleash the true potential of your car’s appearance with our premium detailing services. At Maintainer, we take pride in providing the highest quality results to keep your car looking its best.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center h-full">
                            <div className="h-full  flex-shrink-0 w-1/2 flex justify-center items-center">
                                <Image src='/serve.jpg' width={400} height={400} alt="Services" className="rounded w-[500px]" />
                            </div>
                            <div className="p-4 lg:p-8  flex flex-col justify-center">
                                <div className="flex items-center mb-4">
                                    <span className="text-lg mr-2 text-myAccent">|</span><span className="text-lg">Our Solutions</span>
                                </div>
                                <div className="mb-4">
                                    <p className="text-xl font-bold">Elevate your Car's appearance</p>
                                </div>
                                <div className="mb-8">
                                    <p>Our professional car detailing services are tailored to your specific needs. From exterior detailing to interior cleaning and paint restoration, our team of experts will bring your car back to life.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {
                                        socialMediaData.map((item, index) => {
                                            return (
                                                <div className="flex items-center" key={index}>
                                                    <div>
                                                        <Image src={item.social} width={32} height={32} alt={item.ac} />
                                                    </div>
                                                    <div className="ml-2">
                                                        <div>
                                                            <p className="text-myAccent font-semibold">
                                                                {item.numbers}
                                                            </p>
                                                            <p className='text-gray-500'>
                                                                {item.ac}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <Service />
                </div>

                <div className="h-screen w-full container mx-auto px-4 flex flex-col justify-center items-center">
                    <div className="mb-10 text-3xl font-medium underline underline-offset-2 decoration-myAccent">
                        <p>A Showcase of our Expertise</p>
                    </div>
                    <div className="relative">
                        <Particles className="absolute inset-0" quantity={200} ease={80} color="#E33665" refresh />
                        <Carousel opts={{
                            align: "start",
                            loop: true,
                        }}
                        >
                            <CarouselContent>
                                {
                                    serves.map((item, index) => {
                                        return (
                                            <CarouselItem className="flex flex-shrink-0 items-center justify-center ">
                                                <div className='w-1/2 flex justify-center items-center'>
                                                    <Image src={item.image} width={400} height={400} className="object-cover h-[600px] w-[500px] rounded" />
                                                </div>
                                                <div className="w-1/2 flex flex-col  justify-center">
                                                    <div className="text-xl font-medium mb-3">
                                                        <span>Client: </span> <span>{item.client}</span>
                                                    </div>
                                                    <div className="text-lg font-medium mb-3">
                                                        <span>Project: </span> <span>{item.project}</span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium mb-2 text-myAccent">Description: </p>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        )
                                    })
                                }
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>


                    </div>
                </div>

                <Footer />
            </BoxReveal>
        </div >
    )
}

export default page
