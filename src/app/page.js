import NavigationBar from "./components/NavigationBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Particles from "@/components/magicui/particles";
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <div className="bg-myBackground h-screen w-full mb-10">
        <div className="mx-32 flex justify-between h-[500px] items-center">
          {/* Review Section */}
          <div className="w-1/2">
            <div className="my-3 font-semibold">
              <span className='text-myAccent'>|</span> <span>#1 Car Maintenance Service</span>
            </div>
            <div className="my-3">
              <p className="text-4xl font-semibold">Expert Car Maintaining Service
              </p>
            </div>
            <div className="my-3">
              <p>Welcome to Maintainer, your one-stop-shop for premium car detailing services.</p>
            </div>
            <div className="flex my-3 justify-between w-3/4">
              <div className="my-3">
                <p>*****</p>
                <p className="flex items-center"><span className="text-3xl font-semibold">4.8</span><span> / 5.0</span></p>
              </div>
              <div className="flex my-3 justify-between w-72 items-center">
                <div>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="">
                  <p className='text-3xl font-semibold '>24K</p>
                  <p className="text-2xl ">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className='w-1/2'>
            <form className="flex flex-col justify-between">
              <div className="my-3">
                <div className="mb-1">
                  <label>Name</label>
                </div>
                <div>
                  <Input placeholder='Ex. Joe Alan' />
                </div>
              </div>
              <div className="my-3">
                <div className="mb-1">
                  <label>Email</label>
                </div>
                <div>
                  <Input placeholder='Ex. abc@gmail.com' type='email' />
                </div>
              </div>
              <div className="my-3">
                <div className='mb-1'>
                  <label>Phone Number</label>
                </div>
                <div>
                  <Input placeholder='Ex. +91 1234567890' />
                </div>
              </div>
              <div className="my-3">
                <Button className="w-full bg-myAccent text-white" variant='ghost' type='submit'>Get Started</Button>
              </div>
            </form>
          </div>
        </div>

        {/* Companies */}
        <div className="mx-32 mt-10">
          <div>
            Trusted by global companies
          </div>
          <div>
            <div className="grid grid-cols-4 gap-4">
              {[
                '/Alpina_logo.svg',
                '/Audi-Logo_2016.svg',
                '/Maserati_logo_2.svg',
                '/Prancing_horse.svg',
                '/Ruf_Automobile_logo.svg',
                '/BMW.svg',
                '/Toyota.svg',
                '/LandRover.svg'
              ].map((src, index) => (
                <div key={index} className="relative border-2 w-[300px] h-40 flex items-center justify-center">
                  <Image src={src} width={100} height={100} />
                  <Particles className="absolute inset-0" quantity={20} ease={80} color="#E33665" refresh />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* next section */}


      <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
        <div className="mx-32 ">
          <div className="flex items-center justify-between ">
            <div>
              <Image src='/sec2.jpg' width={600} height={600} className="rounded" />
            </div>
            <div className=" w-1/2">
              <div>
                <p>About Us</p>
              </div>
              <div className='text-3xl'>
                <p>Unmatched Maintaining Expertise</p>
              </div>
              <div className="my-3">
                <label>Expert attention to detail</label>
                <Progress value={80} className="w-full" />
              </div>
              <div className="my-3">
                <label>State-of-the-art equipment</label>
                <Progress value={93} className="w-full" />
              </div>
              <div className="my-3">
                <label>Tailored services</label>
                <Progress value={85} className="w-full" />
              </div>
              <div className="my-3">
                <label>Exceptional customer service</label>
                <Progress value={96} className="w-full" />
              </div>
            </div>
          </div>


          <div className="flex items-center  justify-center mt-10">
            <div className="w-1/2">
              <p className="font-semibold text-xl">Our Vision</p>
              <p>
                Our vision is to become the leading provider of premium car
                detailing services in the region, delivering unparalleled results
                and customer satisfaction.
              </p>
              <div className='mt-2'>
                <Button className="bg-myAccent">Learn More</Button>
              </div>
            </div>
            <div >
              <div className="flex flex-col justify-between">
                <div className="font-semibold text-xl mb-2">
                  Our Mission
                </div>
                <div className="grid grid-cols-4 gap-4 mt-2">
                  <div className="w-40">
                    <div>
                      <Image src='/rise (1).png' width={25} height={25} />
                    </div>
                    <div>
                      <p>To provide
                        unmatched car
                        detailing services to
                        our valued clients</p>
                    </div>
                  </div>
                  <div className="w-40">
                    <div>
                      <Image src='/pie-chart.png' width={25} height={25} />
                    </div>
                    <div>
                      <p>To exceed
                        expectations with
                        every vehicle we
                        detail</p>
                    </div>
                  </div>
                  <div className="w-40">
                    <div>
                      <Image src='/red-flag.png' width={25} height={25} />
                    </div>
                    <div>
                      <p>To continually
                        invest in the latest
                        technology and
                        techniques to
                        deliver superior
                        results</p>
                    </div>
                  </div>
                  <div className="w-40">
                    <div>
                      <Image src='/monitor.png' width={25} height={25} />
                    </div>
                    <div>
                      <p>To prioritize
                        customer
                        satisfaction and
                        experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* next Section */}

      <div className="h-screen w-full">
        <div className="mx-32">
        </div> 
      </div>

    </main>
  );
}
