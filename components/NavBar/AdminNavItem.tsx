'use client'

import {  NavigationMenuLink } from "@/components/ui/navigation-menu";
import { RiAdminLine } from "react-icons/ri";

const AdminNavItem = () => {

    return (


        <NavigationMenuLink
            href="/admin"
            className="text-blue-600 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 focus:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:opacity-50 data-[state=open]:opacity-50"
        >
            <RiAdminLine className="h-4 w-4 mx-1" />Admin Panel
        </NavigationMenuLink>


    );
};

export default AdminNavItem;