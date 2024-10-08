import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,
    { params }: { params: { uid: string } }
) {

    if (!params.uid) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await currentProfile()

    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const admin = await db.profile.findFirst({
            where: {
                uid: params.uid,
                role: "ADMIN",
            },
        });

        return NextResponse.json(admin);

    } catch (error) {
        console.error('Error in /api/admin:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}