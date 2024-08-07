"use client";
import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Input } from './ui/input';

const VehicleRegistration = ({ userId }) => {
  const router = useRouter();

  // Early return if userId is not available
  if (!userId) {
    return <div>Loading...</div>;
  }

  console.log('User ID:', userId);

  const handleSubmit = async (e) => {


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

      console.log('Response:', res);

      // Handle the response
      if (res.status === 200) {
        router.push('/login');
      } else {
        // Optionally, handle non-200 status codes
        console.error('Failed to register vehicle:', res.data.message);
      }

    } catch (error) {
      console.error('Error:', error.message);
      // Optionally, show a user-friendly error message here
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <div className="mb-1">
            <label htmlFor='make'>Make</label>
          </div>
          <Input placeholder="Ex. Joe Alan" type="text" name='make' id="make" required />
        </div>
        <div className="my-3">
          <div className="mb-1">
            <label htmlFor='model'>Model</label>
          </div>
          <Input placeholder="Ex. ABC Model" type="text" name='model' id="model" required />
        </div>
        <div className="my-3">
          <div className="mb-1">
            <label htmlFor='year'>Year</label>
          </div>
          <Input placeholder="Ex. 2024" type='number' name='year' id='year' required />
        </div>
        <div className="my-3">
          <div className="mb-1">
            <label htmlFor='vin'>VIN</label>
          </div>
          <Input placeholder="Ex. 1HGBH41JXMN109186" type='text' name='vin' id='vin' required />
        </div>

        <div className="my-3">
          <Button className="w-full bg-myAccent text-white" variant="ghost" type="submit">
            Register Vehicle
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VehicleRegistration;
