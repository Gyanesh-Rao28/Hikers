import Link from 'next/link'
import React from 'react'
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
                            {/* <img
                                src="/Images/Trekking.jpg"
                                width="550"
                                height="310"
                                alt="Hero"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                            /> */}
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
                                    <Link
                                        href="/"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Register
                                    </Link>
                                    <Link
                                        href="/"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Login
                                    </Link>
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