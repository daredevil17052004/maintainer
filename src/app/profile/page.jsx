import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import VehicleRegistration from '@/components/VehicleRegistration';
import { auth } from '@/auth';
import Expenses from '@/components/Expenses';

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
        <NavigationBar />
        <VehicleRegistration userId={userId} />
        <Expenses userId={userId} vehicleId={vehicleId} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching session:', error);
    return <div>Error loading page. Please try again later.</div>;
  }
};

export default Page;
