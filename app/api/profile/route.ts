import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { uid, displayName, email, phoneNumber, imageUrl, token } = await req.json();

        if (!uid || !email || !token) {
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
                imageUrl,
                token
            }
        });

        return NextResponse.json(profile, { status: 200 });
    } catch (error: any) {
        console.error("CREATE_PROFILE: ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
