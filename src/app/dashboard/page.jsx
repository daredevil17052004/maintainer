import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import VehicleRegistration from '@/components/VehicleRegistration';
import { auth } from '@/auth';
import Expenses from '@/components/Expenses';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import BoxReveal from '@/components/magicui/box-reveal';
import Image from 'next/image';

export const userVehiclesInSession = [];

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },

];

const Page = async () => {


  try {
    const session = await auth();

    // Destructure user data from session
    const { _id: userId, vehicles: vehicleId } = session?.user || {};

    // Log session for debugging
    console.log('session', session);

    // Check if userId exists
    if (!userId) {
      return <div>Loading...</div>;
    }



    return (

      <div className="h-screen">
        <div className="w-full">
          <NavigationBar />
          <div className="mx-20">
            <div>
              <p className="text-xl">Welcome, <span>{session?.user?.name}</span>!</p>
              <p>Today is a great day for car maintainance</p>
            </div>
          </div>

          {/* car internal deatails  */}
          <div className="flex w-full items-center justify-around ">
            <div className="flex items-center justify-between border-2 p-8 w-60 rounded-xl">
              <div>
                <Image src='/car.png' width={50} height={10}/>
              </div>
              <div>
                <p>Engine</p>
                <p>3745 cc</p>
                <p>3.0l</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-2 p-8 w-60 rounded-xl">
              <div>
                <Image src='/power.png' width={50} height={10}/>
              </div>
              <div>
                <p>Power Output</p>
                <p>641</p>
                <p>bhp</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-2 p-8 w-60 rounded-xl">
              <div>
                <Image src='/gearbox.png' width={50} height={10}/>
              </div>
              <div>
                <p>Transmission</p>
                <p>6 Speed</p>
                <p>TC-SST</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-2 p-8 w-60 rounded-xl">
              <div>
                <Image src='/pistons.png' width={50} height={10}/>
              </div>
              <div>
                <p>Cylinder</p>
                <p>4</p>
                <p>Inline</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-2 p-8 w-60 rounded-xl">
              <div>
                <Image src='/oil.png' width={50} height={10}/>
              </div>
              <div>
                <p>Fuel</p>
                <p>Gasoline</p>
                <p>Inline</p>
              </div>
            </div>

          </div>


          <div>
            {/* car make and model */}
            <div>
              <div>
                  <div className="logo">
                      <div>
                        <Image></Image>
                      </div>
                  </div>
              </div>

              <div>

              </div>

            </div>

            {/* calender */}

            <div>

            </div>
          </div>

          {/* <VehicleRegistration userId={userId} userVehicles={userVehiclesInSession} />
        <Expenses userId={userId} vehicleId={vehicleId} userVehicles={userVehiclesInSession} /> */}
        </div>
      </div>

    );
  } catch (error) {
    console.error('Error fetching session:', error);
    return <div>Error loading page. Please try again later.</div>;
  }
};

export default Page;
