import React from 'react'

import { Button } from '../ui/button'
import { toast } from "@/components/ui/use-toast";

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase';
import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies()

const LoginBtn = () => {
    
    const Onlogin = async () => {

        const provider = new GoogleAuthProvider();

        try {
            const res = await signInWithPopup(auth, provider);

            const email = res.user.email as string;

            const response = await axios.post("/api/profile", {
                uid: res.user.uid,
                displayName: res.user.displayName,
                email: email,
                phoneNumber: res.user.phoneNumber,
                imageUrl: res.user.photoURL
            });

            cookies.set("auth-token", res.user.refreshToken);

            toast({
                title: "Logged In",
                description: "Happy trip!",
                className: "bg-green-500",
            });
        } catch (error) {
            console.error("LOGIN_ERROR:", error);
            toast({
                title: "Login Failed",
                description: "An error occurred during login.",
                className: "bg-red-500",
            });
        }
    };
    return (
        <>
            <Button
                onClick={Onlogin}
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 focus:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:opacity-50 data-[state=open]:opacity-50">
                Login
            </Button>
        </>
    )
}

export default LoginBtn