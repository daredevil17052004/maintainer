"use client"
import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Input } from './ui/input'

const Expenses = ({ userId, vehicleId }) => {
    const router = useRouter();
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState('');

    const fetchVehicles = async () => {
        try {
            const res = await axios.get('/api/vehicleRegister', {
                params: { userId }
            });
            if (res.status === 200) {
                setVehicles(res.data.vehicles);
                console.log(res.data);
            } else {
                console.error('Failed to fetch vehicles:', res.status);
            }
        } catch (error) {
            console.error('Error fetching vehicles:', error.message);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, [userId]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);
            const amount = formData.get('amount');
            const date = formData.get('date');
            const description = formData.get('description');
    
            console.log("Submitting data:", { userId, vehicleId: selectedVehicle, amount, date, description });
    
            const res = await axios.post('/api/expenses', {
                userId,
                vehicleId: selectedVehicle,
                amount,
                date,
                description
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            console.log("Response:", res);
    

            if (res.status === 201) {
                console.log('Response data:', res.data);
                const { expense, updatedVehicle } = res.data;
                
                if (updatedVehicle && updatedVehicle._id) {
                    setVehicles(prevVehicles => 
                        prevVehicles.map(vehicle => 
                            vehicle._id === updatedVehicle._id ? updatedVehicle : vehicle
                        )
                    );
                } else {
                    console.error('Updated vehicle data is missing or incomplete');
                    fetchVehicles();
                }

                alert('Expense registered successfully!');
                e.currentTarget.reset();
                setSelectedVehicle('');
            } else {
                console.error('Failed to register expense:', res.status);
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('Failed to register expense. Please try again.');
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
                        {vehicles.map((item) => (
                            <option key={item._id} value={item._id}>{item.make} - {item.model}</option>
                        ))}
                    </select>
                </div>
                <div className="my-3">
                    <div className="mb-1">
                        <label htmlFor='amount'>Amount</label>
                    </div>
                    <div>
                        <Input placeholder="Ex. 500" type="number" name='amount' id="amount" required />
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