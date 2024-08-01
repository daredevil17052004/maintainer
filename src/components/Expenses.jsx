"use client"
import React, { useState,useEffect } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Input } from './ui/input'

const Expenses = ({ userId, vehicleId }) => {
    const router = useRouter();
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState('');

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const res = await axios.get('/api/vehicleRegister', {
                    params: {
                        'vehicleIds[]': vehicleId
                    }
                });
                if (res.status === 200) {
                    setVehicles(res.data);
                    console.log(res.data);
                } else {
                    console.error('Failed to fetch vehicles:', res.status);
                }
            } catch (error) {
                console.error('Error fetching vehicles:', error.message);
            }
        };
    
        fetchVehicles();
    }, [vehicleId]);
    

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            // Collect form data
            const formData = new FormData(e.currentTarget);
            const amount = formData.get('amount');
            const date = formData.get('date');
            const description = formData.get('description');

            // Make the POST request
            const res = await axios.post('/api/expenses', { userId, vehicleId: selectedVehicle, amount, date, description }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Handle the response
            if (res.status === 200) {
                // Redirect to a success page or dashboard
                router.push('/profile');
            } else {
                console.error('Failed to register expense:', res.status);
            }

        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor='vehicle'>Select Vehicle</label>
                    <select
                        id="vehicle"
                        name="vehicle"
                        value={selectedVehicle}
                        onChange={(e) => setSelectedVehicle(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select a vehicle</option>
                        {vehicles.map((item,index) => (
                            <option key={index} value={item.make}><p>{item.make}</p><p>{item.model}</p></option>
                        ))}
                    </select>
                </div>
                <div className="my-3">
                    <div className="mb-1">
                        <label htmlFor='amount'>Amount</label>
                    </div>
                    <div>
                        <Input placeholder="Ex. $500" type="number" name='amount' id="amount" required />
                    </div>
                </div>
                <div className="my-3">
                    <div className="mb-1">
                        <label htmlFor='date'>Date</label>
                    </div>
                    <div>
                        <Input placeholder="Ex. 2024-12-01" type='date' name='date' id='date' required />
                    </div>
                </div>
                <div className="my-3">
                    <div className="mb-1">
                        <label htmlFor='description'>Description</label>
                    </div>
                    <div>
                        <Input placeholder="Ex. Headlights replacement" type='text' name='description' id='description' required />
                    </div>
                </div>

                <div className="my-3">
                    <Button
                        className="w-full bg-myAccent text-white"
                        variant="ghost"
                        type="submit"
                    >
                        Register Expense
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Expenses;
