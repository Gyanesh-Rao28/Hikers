import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { uid, displayName, email, phoneNumber, imageUrl } = await req.json();

        if (!uid || !email ) {
            return new NextResponse("Fields missing", { status: 400 });
        }

        const profileExist = await db.profile.findUnique({
            where:{
                email: email
            }
        })

        if(profileExist){
            return NextResponse.json(profileExist, { status: 200 });
        }

        const profile = await db.profile.create({
            data: {
                uid,
                name: displayName,
                email,
                phoneNumber,
                imageUrl
            }
        });

        return NextResponse.json(profile, { status: 200 });
    } catch (error: any) {
        console.error("CREATE_PROFILE: ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
