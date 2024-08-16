
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { currentProfile } from "@/lib/currentProfile";

import AgencyProfile from "@/components/Agency/dashboard/profile/page";
import PostTrips from "@/components/Agency/dashboard/trips/page";
import Link from "next/link";
import { db } from "@/lib/db";


interface AgencyDashboardProps {
    params: {
        uid: string;
    };
}

const AgencyDashboard = async ({ params }: AgencyDashboardProps) => {

    const profile = await currentProfile()

    const legit = await db.agency.findFirst({
        where:{
            uid:params.uid
        }
    })

    if (profile?.role !== "AGENCY_ORGANIZER" || !legit){
        return (
            <>
                <div className="bg-slate-200 flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-md text-center">
                        
                        <div className="mx-auto h-12 w-12 text-primary" />
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">Unauthorized Access</h1>
                        <p className="mt-4 text-muted-foreground">
                            Sorry, you don't have permission to access this page. Please check your credentials and try again.
                        </p>
                        <div className="mt-6">
                            <Link
                                href="/"
                                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                prefetch={false}
                            >
                                Go to Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <main className="flex-1">
                    <Tabs defaultValue="profile">
                        <TabsList className="border-b w-full mx-auto b">

                            <TabsTrigger value="profile" className="">Profile</TabsTrigger>
                            <TabsTrigger value="PostTrips" className="">Post Trips</TabsTrigger>
                            <TabsTrigger value="trips" className="">Trips</TabsTrigger>
                            {/* <TabsTrigger value="request" className="">Request</TabsTrigger> */}
                            <TabsTrigger value="analytics" className="">Analytics</TabsTrigger>

                        </TabsList>

                        <TabsContent value="profile">
                            <AgencyProfile uid={profile.uid}/>
                        </TabsContent>

                        <TabsContent value="PostTrips">
                           <PostTrips/>
                        </TabsContent>

                        <TabsContent value="trips">
                            <h1>To be done</h1>
                        </TabsContent>

                        <TabsContent value="analytics">
                            <h1>To be done</h1>
                        </TabsContent>

                    </Tabs>
                </main>
            </div>
        </>
    )
}

export default AgencyDashboard


