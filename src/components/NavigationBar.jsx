import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { getSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/auth";
import ProfileMenu from "./ProfileMenu";

const CustomLink = ({ href, title, className = "" }) => {
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-myAccent text-myAccent absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0 hover:w-full`}>&nbsp;</span>
        </Link>
    );
};

const NavigationBar = async() => {

    const session = await auth()
    console.log(session?.user)
    return (
        <div className="flex justify-around h-24 items-center">
            <div>
                <h1 className="font-bold text-xl"><Link href='/'>Maintainer</Link></h1>
            </div>
            <div className='flex justify-between w-[400px]'>
                <CustomLink href="/services" title='Services' />
                <CustomLink href="/pricing" title='Pricing' />
                <CustomLink href="/about" title='About Us' />
                <CustomLink href="/contact" title='Contact us' />
            </div>
            {session ? (
                <ProfileMenu user={session.user}/>
            ) : (
                <Link href='/register'>
                    <Button variant="ghost" className="bg-myAccent text-white">Get Started</Button>
                </Link>
            )}
        </div>
    );
};


export default NavigationBar;
