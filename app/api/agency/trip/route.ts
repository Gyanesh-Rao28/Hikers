import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {


    try {
        const { 
            leaderName,
            leaderContact,
            tripName,
            tripType,
            location,
            duration,
            groupSize,
            tripStartDate,
            lastApplicationDate,
            expense,
            description
        } = await req.json()

        const profile = await currentProfile()

        if(!profile){
            return NextResponse.json("Unauthorized User!", { status: 401 });
        }

        const trip = await db.trip.create({
            data:{
                agencyId: profile.id,
                leaderName,
                leaderContact,
                TripName: tripName,
                type: tripType,
                location,
                duration,
                groupSize,
                tripStartDate,
                lastApplyDate: lastApplicationDate,
                expense,
                description
            }
        })

        return NextResponse.json(trip, { status: 200 });


    } catch (error) {

    }

}