import { dbConnect } from "@/lib/mongo";
import { User } from "@/model/UserModel";
import Vehicle from "@/model/VehicleModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await dbConnect();
        console.log('Processing vehicle registration');

        const { userId, make, model, year, vin } = await request.json();

        if (!userId || !make || !model || !year || !vin) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const vehicle = new Vehicle({ user: userId, make, model, year, vin });
        await vehicle.save();

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        console.log('Before user save:', user);
        await user.save();
        console.log('After user save:', await User.findById(userId));

        return NextResponse.json(vehicle, { status: 201 });
    } catch (err) {
        console.error('Error during vehicle registration:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        await dbConnect();

        const url = new URL(request.url);
        const vehicleIds = url.searchParams.getAll('vehicleIds[]');

        if (vehicleIds.length === 0) {
            return NextResponse.json({ error: 'Vehicle IDs are required' }, { status: 400 });
        }

        const vehicles = await Vehicle.find({ _id: { $in: vehicleIds } }).populate('user');

        if (!vehicles.length) {
            return NextResponse.json({ error: 'No vehicles found' }, { status: 404 });
        }

        return NextResponse.json(vehicles);
    } catch (err) {
        console.error('Error fetching vehicles:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
