"use server"
import { dbConnect } from "@/lib/mongo";
import Expense from "@/model/ExpenseModel.js";
import { NextResponse } from "next/server";


export async function POST(request){
    await dbConnect();

    try {
        const {userId,vehicleId,amount,date,description} = await request.json();
        const expense = new Expense({userId,vehicleId,amount,date,description});
        console.log(expense)
        await expense.save();
        return NextResponse.json(expense,{status:201})
    } catch (error) {
        return NextResponse.json({error:error.message},{staus : 500})        
    }
}

export async function GET(request){
    await dbConnect();

    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");
        const expenses = await ExpenseModel.find({user:userId}).populate("vehicle");
        return NextResponse.json(expenses)
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}