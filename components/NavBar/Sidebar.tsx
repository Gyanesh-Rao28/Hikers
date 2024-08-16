'use client'

import React from 'react';
import { Link as LucideLink, LogOut, MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetDescription, SheetTitle } from "../ui/sheet";
import Profile from "./Profile";
import { auth } from "@/firebase";
import LoginBtn from "./LoginBtn";
import { useAuthState } from 'react-firebase-hooks/auth';
import NextLink from 'next/link';

const Sidebar = () => {
    const [user] = useAuthState(auth);

    return (
        <Sheet>
            <SheetTrigger className="p-1 rounded-md transition-colors duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 lg:hidden">
                <MenuIcon className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle><Profile /></SheetTitle>
                    <SheetDescription className="grid gap-2 py-6">
                        <NextLink
                            href="/trips"
                            className="flex w-full text-black items-center p-3 rounded-xl text-lg font-medium hover:bg-blue-100 hover:text-blue-600"
                        >
                            <LucideLink className="mr-2" />
                            Browse Trips
                        </NextLink>
                        <NextLink
                            href="/contact"
                            className="flex w-full items-center p-3 rounded-xl text-lg font-medium hover:bg-blue-100 hover:text-blue-600"
                        >
                            <LucideLink className="mr-2" />
                            Contact
                        </NextLink>
                        {user ? (
                            <LogOut/>
                        ) : (
                            <LoginBtn />
                        )}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default Sidebar;