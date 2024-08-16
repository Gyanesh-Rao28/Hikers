// /api/dashboardAccess/[uid]/route.ts
import { currentProfile } from "@/lib/currentProfile";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,
    { params }: { params: { uid: string } }
) {

    if (!params.uid) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await currentProfile()

    console.log(user?.role)

    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json(user.role, { status: 200 });
}