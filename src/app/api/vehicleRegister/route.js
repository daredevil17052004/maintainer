"use server"
import { dbConnect } from "@/lib/mongo"
import { User } from "@/model/UserModel";
import Vehicle from "@/model/VehicleModel.js";
import req from "express/lib/request";
import { NextResponse } from "next/server";



export async function POST(request) {
    await dbConnect();
    console.log('dnasjnjksd')
    const { userId, make, model, year, vin } = await request.json();

    try {
        const vehicle = new Vehicle({ user: userId, make, model, year, vin });
        console.log(vehicle)
        await vehicle.save();

        const user = await User.findById(userId);
        user.vehicles.push(vehicle._id);
        await user.save();

        return NextResponse.json(vehicle, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function GET(request) {
    await dbConnect();

    try {
        // Extract vehicle IDs from query parameters
        const url = new URL(request.url);
        const vehicleIds = url.searchParams.getAll('vehicleIds[]');
        console.log(vehicleIds)
        if (vehicleIds.length === 0) {
            return NextResponse.json({ error: 'Vehicle IDs are required' }, { status: 400 });
        }

        // Fetch vehicles based on IDs
        const vehicles = await Vehicle.find({ _id: { $in: vehicleIds } }).populate('user');
        
        return NextResponse.json(vehicles); // Return the fetched vehicle data
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}