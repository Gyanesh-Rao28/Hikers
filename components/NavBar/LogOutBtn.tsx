import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import Cookies from "universal-cookie";
const cookies = new Cookies()

const LogOutBtn = () => {

    const onLogout = async () => {
        await signOut(auth);
        cookies.remove("auth-token");

    };

    return (
        <>
            <Button 
                onClick={onLogout}
                className="group bg-transparent text-black inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
            >
                Logout
            </Button>
        </>
    )
}

export default LogOutBtn