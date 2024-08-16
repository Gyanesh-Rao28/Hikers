import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { uid, agencyName, agencyEmail, agencyPhoneNumber, agencyImgUrl } = await req.json();

        if (!uid || !agencyEmail ) {
            return new NextResponse("Fields missing", { status: 400 });
        }

        const profileExist = await db.agency.findUnique({
            where: {
                agencyEmail
            }
        })

        if (profileExist) {
            return NextResponse.json(profileExist, { status: 200 });
        }

        const agencyProfile = await db.agency.create({
            data: {
                uid,
                agencyName,
                agencyEmail,
                agencyPhoneNumber,
                agencyImgUrl
            }
        });

        return NextResponse.json(agencyProfile, { status: 200 });
    } catch (error: any) {
        console.error("AGENCY_PROFILE: ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}



