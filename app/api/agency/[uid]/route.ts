import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

// get user data 
export async function GET(req: NextRequest,
    { params }: { params: { uid: string } }
) {
    try {
        const user = await currentProfile()

        if (!params.uid || user?.uid !== params.uid) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const getUser = await db.agency.findFirst({
            where: {
                uid: params.uid
            }
        })



        if (!getUser) {
            return NextResponse.json({ error: "User Not Found" }, { status: 404 });
        }

        return NextResponse.json(getUser, { status: 200 });
    } catch (error: any) {
        console.error("AGENCY_PROFILE: ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}


export async function PUT(req: NextRequest,
    { params }: { params: { uid: string } }
) {
    try {
        const user = await currentProfile()

        if (!params.uid || user?.uid !== params.uid) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const {
            agencyName,
            agencyEmail,
            agencyImgUrl,
            agencyUrl,
            agencyPhoneNumber,
            agencyLocation,
            agencyLicenseId,
            agencyLicenseFile,
            agencyLicenseFileName
        } = await req.json();

        if (!agencyName || !agencyEmail) {
            return NextResponse.json("Unappropriate Content", { status: 204 });
        }

        const updateUser = await db.agency.update({
            where: {
                uid: user.uid
            },
            data: {
                agencyName,
                agencyEmail,
                agencyImgUrl,
                agencyUrl,
                agencyPhoneNumber,
                agencyLocation,
                agencyLicenseId,
                agencyLicenseFile,
                agencyLicenseFileName,
            }
        })
        

        return NextResponse.json(updateUser, { status: 200 });
    } catch (error: any) {
        console.error("AGENCY_PROFILE: ", error);
        return NextResponse.json(error, { status: 500 });
    }
}


