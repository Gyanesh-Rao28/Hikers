import React from 'react'
import AgencyLogin from '../Agency/AgencyLogin'
const LandingHome = () => {
    return (
        <>
            <section className="w-full h-screen relative overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="/Videos/Landing.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-10"></div>
                <div className="relative z-20 w-full h-full flex items-center">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                        Discover Your Next Adventure
                                    </h1>
                                    <p className="max-w-[600px] text-gray-200 md:text-xl">
                                        Connect with travel agencies and plan your perfect vacation or college trip.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <AgencyLogin/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingHome