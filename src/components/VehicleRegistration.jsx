    "use client"
    import React from 'react'
    import { Button } from './ui/button'
    import { useRouter } from 'next/navigation'
    import axios from 'axios'
    import { Input } from './ui/input'
    import Link from 'next/link'

    const VehicleRegistration = ({ userId }) => {
        const router = useRouter();

        async function handleSubmit(e) {
            e.preventDefault();

            try {
                // Collect form data
                const formData = new FormData(e.currentTarget);
                const make = formData.get('make');
                const model = formData.get('model');
                const year = formData.get('year');
                const vin = formData.get('vin');

                // Make the POST request
                const res = await axios.post('/api/vehicleRegister', { userId, make, model, year, vin }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(res)
                // Handle the response
                if (res.status === 200) {
                    router.push('/login');
                }

            } catch (error) {
                console.error('Error:', error.message);
                // Optionally, show a user-friendly error message here
            }
        }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="my-3">
                        <div className="mb-1">
                            <label htmlFor='make'>Make</label>
                        </div>
                        <div>
                            <Input placeholder="Ex. Joe Alan" type="text" name='make' id="make" />
                        </div>
                    </div>
                    <div className="my-3">
                        <div className="mb-1">
                            <label htmlFor='model'>Model</label>
                        </div>
                        <div>
                            <Input placeholder="Ex. abc@gmail.com" type="text" name='model' id="model" />
                        </div>
                    </div>
                    <div className="my-3">
                        <div className="mb-1">
                            <label htmlFor='year'>Year</label>
                        </div>
                        <div>
                            <Input placeholder="Ex. 2024" type='text' name='year' id='year' />
                        </div>
                    </div>
                    <div className="my-3">
                        <div className="mb-1">
                            <label htmlFor='vin'>VIN</label>
                        </div>
                        <div>
                            <Input placeholder="Ex. 1HGBH41JXMN109186" type='text' name='vin' id='vin' />
                        </div>
                    </div>

                    <div className="my-3">
                        <Button
                            className="w-full bg-myAccent text-white"
                            variant="ghost"
                            type="submit"
                        >
                            Register Vehicle
                        </Button>
                    </div>
                </form>
            </div>
        )
    }

    export default VehicleRegistration;
