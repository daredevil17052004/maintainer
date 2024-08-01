"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from './ui/button'
import { doSocialLogin } from '@/app/actions'
import { doCredentialLogin } from '@/app/actions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import LoginButtons from './LoginButtons'

const Login = () => {

    const router = useRouter();
    const [error, setError] = useState('')

    async function handleFormSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget)
            console.log('FormData:', Object.fromEntries(formData));
            const response = await doCredentialLogin(formData)
            if (response == "http://localhost:3000/login"){
                router.push('/')
            }else{
                throw new Error("Check your credentails")
            }

        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className=" border h-[450px] w-[380px] p-10 bg-gradient-to-b from-transparent to-neutral-900 shadow-2xl shadow-black text-white rounded bg-blur-image">

            <div>
                <p className="text-xl">Login to your acoount    </p>
            </div>

            <form onSubmit={(e) => handleFormSubmit(e)} className="z-10 flex flex-col items-start justify-evenly  h-[200px]">

                <div className="flex flex-col items-start justify-center w-full">
                    <label htmlFor="email" className="py-3">Email</label>
                    <input type="email" name='email' id="email"  className="w-full h-8 rounded py-3 text-black pl-2"/>
                </div>
                <div className="flex flex-col items-start justify-center w-full pb-5">
                    <label htmlFor="password" className="py-3">Password</label>
                    <input type="password" name='password' id="password" className="w-full h-8 rounded text-black pl-2"/>
                </div>

                <Button type='submit' className="w-full" variant='ghost'>Credential login</Button>

            </form>

            <LoginButtons />
        </div>
    )
}

export default Login