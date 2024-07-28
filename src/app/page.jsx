import NavigationBar from "../components/NavigationBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Particles from "@/components/magicui/particles";
import { Progress } from "@/components/ui/progress";
import socialMediaData from "@/assets/Socials";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQ from "@/assets/FAQ";
import Footer from "../components/Footer";
import Service from "../components/Service";
import BoxReveal from "../components/BoxReval";
import Link from "next/link";
import Regi from "./register/page";

export default function Home() {

  const darkMode = () => {

  
  }


  return (
    <main>
      <BoxReveal boxColor="#E33665">
        <NavigationBar />

        <div className="bg-myBackground h-screen w-full mb-10">
          <div className="mx-32 flex justify-between h-[500px] items-center">
            {/* Review Section */}
            <div className="w-1/2">
              <div className="my-3 font-semibold">
                <span className="text-myAccent">|</span>{" "}
                <span>#1 Car Maintenance Service</span>
              </div>
              <div className="my-3">
                <p className="text-4xl font-semibold">
                  Expert Car Maintaining Service
                </p>
              </div>
              <div className="my-3">
                <p>
                  Welcome to Maintainer, your one-stop-shop for premium car
                  detailing services.
                </p>
              </div>
              <div className="flex my-3 justify-between w-3/4">
                <div className="my-3">
                  <p>*****</p>
                  <p className="flex items-center">
                    <span className="text-3xl font-semibold">4.8</span>
                    <span> / 5.0</span>
                  </p>
                </div>
                <div className="flex my-3 justify-between w-72 items-center">
                  <div>
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="">
                    <p className="text-3xl font-semibold ">24K</p>
                    <p className="text-2xl ">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-1/2">
            <Regi>`</Regi>
            </div>
          </div>

          {/* Companies */}
          <div className="mx-32 mt-10">
            <div>Trusted by global companies</div>
            <div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  "/Alpina_logo.svg",
                  "/Audi-Logo_2016.svg",
                  "/Maserati_logo_2.svg",
                  "/Prancing_horse.svg",
                  "/Ruf_Automobile_logo.svg",
                  "/BMW.svg",
                  "/Toyota.svg",
                  "/LandRover.svg",
                ].map((src, index) => (
                  <div
                    key={index}
                    className="relative border-2 w-[300px] h-40 flex items-center justify-center"
                  >
                    <Image src={src} width={100} height={100} />
                    <Particles
                      className="absolute inset-0"
                      quantity={20}
                      ease={80}
                      color="#E33665"
                      refresh
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* next section */}

        <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
          <div className="mx-32 relative">
            <Particles
              className="absolute inset-0"
              quantity={200}
              ease={80}
              color="#E33665"
              refresh
            />
            <div className="flex items-center justify-between ">
              <div className="w-1/2">
                <Image
                  src="/sec2.jpg"
                  width={600}
                  height={600}
                  className="rounded"
                />
              </div>
              <div className="w-1/2">
                <div>
                  <p>About Us</p>
                </div>
                <div className="text-3xl">
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

            <div className="flex items-center justify-between mt-10">
              <div className="w-1/2 p-2">
                <p className="font-semibold text-xl">Our Vision</p>
                <p>
                  Our vision is to become the leading provider of premium car
                  detailing services in the region, delivering unparalleled
                  results and customer satisfaction.
                </p>
                <div className="mt-2">
                  <Button className="bg-myAccent" variant="ghost">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex flex-col justify-between">
                  <div className="font-semibold text-xl mb-2">Our Mission</div>
                  <div className="grid grid-cols-4 gap-4 mt-2">
                    <div className="w-40">
                      <div>
                        <Image src="/rise (1).png" width={25} height={25} />
                      </div>
                      <div>
                        <p>
                          To provide unmatched car detailing services to our
                          valued clients
                        </p>
                      </div>
                    </div>
                    <div className="w-40">
                      <div>
                        <Image src="/pie-chart.png" width={25} height={25} />
                      </div>
                      <div>
                        <p>
                          To exceed expectations with every vehicle we detail
                        </p>
                      </div>
                    </div>
                    <div className="w-40">
                      <div>
                        <Image src="/red-flag.png" width={25} height={25} />
                      </div>
                      <div>
                        <p>
                          To continually invest in the latest technology and
                          techniques to deliver superior results
                        </p>
                      </div>
                    </div>
                    <div className="w-40">
                      <div>
                        <Image src="/monitor.png" width={25} height={25} />
                      </div>
                      <div>
                        <p>
                          To prioritize customer satisfaction and experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* next Section */}

        <div className="w-full">
          <div className="mx-32 h-screen flex flex-col justify-center items-center ">
            <div className="flex items-center justify-between h-1/2 mb-10">
              <div className="w-1/2">
                <div className="font-semibold my-3">
                  <span className="text-myAccent">|</span>{" "}
                  <span>Specialization</span>
                </div>
                <div className="font-bold text-3xl my-3">
                  <p>Premium Car Detailing Services with Real-Time Diagnosis</p>
                </div>
                <div className="text-xl font-semibold my-3">
                  <p>Our values:</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <div className=" flex flex-col justify-center ">
                    <div className="font-semibold text-lg my-2">
                      <p>Expertise</p>
                    </div>
                    <div>
                      <p>
                        We are committed to delivering the highest level of
                        expertise and knowledge in car detailing, ensuring our
                        clients receive unparalleled results.
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center ">
                    <div className="font-semibold text-lg my-2">
                      <p>Quality</p>
                    </div>
                    <div>
                      <p>
                        We use only the highest quality products and equipment
                        to ensure the best possible results for our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <Image
                  src="/sec3.jpg"
                  width={600}
                  height={600}
                  className="rounded h-[350px] w-[550px]"
                />
              </div>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-3 gap-10 items-center justify-center">
                {socialMediaData.map((item, index) => {
                  return (
                    <div className="flex items-center " key={index}>
                      <div>
                        <Image src={item.social} width={40} height={32} />
                      </div>
                      <div className="ml-2">
                        <div>
                          <p className="text-myAccent font-semibold">
                            {item.numbers}
                          </p>
                          <p className="text-gray-500">{item.ac}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <Service />

        {/* next section */}

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

        {/* next section */}

        <div className="h-screen w-full bg-black text-white relative">
          <Particles
            className="absolute inset-0 z-10"
            quantity={200}
            ease={80}
            color="#E33665"
            refresh
          />
          <div className="mx-32 ">
            <div className="flex justify-between items-center mb-10 ">
              <div className=" mt-32 mb-6">
                <div>
                  <p>Testimonials</p>
                </div>
                <div className="text-4xl font-semibold my-3">
                  <p>Don't take our word for it</p>
                </div>
              </div>
              <div className="mt-32 mb-6">
                <Button className="bg-myAccent" variant="ghost">
                  All Testimonials
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 items-center justify-center ">
              <div>
                <div>
                  <p className="my-3">
                    “The Maintainer team exceeded my expectations with their
                    attention to detail and exceptional customer service. My car
                    looks brand new, and I couldn’t be happier with the
                    results.”
                  </p>
                </div>
                <div className="flex justify-between items-center w-fit">
                  <div>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <p>Brian Davis</p>
                    <p>CMO, Trendsetter Styles</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="my-3">
                    “I’ve been to a lot of car detailing services in the past,
                    but Maintainer takes the cake. Their expertise and
                    state-of-the-art equipment make a noticeable difference in
                    the quality of their work.”
                  </p>
                </div>
                <div className="flex justify-between items-center w-fit">
                  <div>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <p>Michael Lee</p>
                    <p>Director, The Online Emporium</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="my-3">
                    “The quality of work Maintainer delivers is unmatched in the
                    region. They go above and beyond to ensure every inch of
                    your car is cleaned and restored to its original beauty.”
                  </p>
                </div>
                <div className="flex justify-between items-center w-fit">
                  <div>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <p>Mark Johnson</p>
                    <p>Marketing Director, Acme Solutions</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="my-3">
                    “Maintainer is now my go-to car detailing service. Their
                    tailored services and exceptional customer service make them
                    stand out in a sea of competitors.”
                  </p>
                </div>
                <div className="flex justify-between items-center w-fit">
                  <div>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <p>Sarah Wilson</p>
                    <p>Founder, Greenly Technologies</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <p className="my-3">
                    “Maintainer is now my go-to car detailing service. Their
                    tailored services and exceptional customer service make them
                    stand out in a sea of competitors.”
                  </p>
                </div>
                <div className="flex justify-between items-center w-fit">
                  <div>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <p>Sarah Wilson</p>
                    <p>Founder, Greenly Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* next section */}

        <div className="h-[100vh] w-full bg-black text-white relative">
          <Particles
            className="absolute inset-0 z-10"
            quantity={200}
            ease={80}
            color="#E33665"
            refresh
          />
          <div className="mx-32 flex flex-col h-[100vh] ">
            <div className="mt-16 h-[50vh] ">
              <div className="font-semibold">
                <span className="text-myAccent ">|</span> <span>FAQ</span>
              </div>
              <div className="text-3xl font-semibold">
                <p>Find answers to commonly asked questions</p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {FAQ.map((item, index) => {
                  return (
                    <div key={index}>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" h-[50vh] flex flex-col items-center justify-evenly">
              <div>
                <div className="text-3xl font-semibold">
                  <p>Give your car the TLC it deserves</p>
                </div>
                <div className="text-md text-gray-400">
                  <p>
                    Book your appointment today and experience the ultimate in
                    car detailing services.
                  </p>
                </div>
                <div>
                  <p>Let's get started</p>
                </div>
              </div>
              <div className="">
                <Button className="bg-myAccent text-white" variant="ghost">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </BoxReveal>
    </main>
  );
}
