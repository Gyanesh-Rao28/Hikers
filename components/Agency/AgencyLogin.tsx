
'use client'
import React, { useEffect, useState } from 'react';
import { Button } from "../ui/button";
import { onAuthStateChanged, User } from 'firebase/auth';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase';
import axios from 'axios';
import Cookies from "universal-cookie";
import { toast } from '../ui/use-toast';

const cookies = new Cookies()

const AgencyLogin = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);


    if (user) {
        return null;
    }

    const Onlogin = async () => {

        const provider = new GoogleAuthProvider();

        try {
            const res = await signInWithPopup(auth, provider);

            const email = res.user.email as string;

            const response = await axios.post("/api/agency", {
                uid: res.user.uid,
                agencyName: res.user.displayName,
                agencyEmail: email,
                agencyPhoneNumber: res.user.phoneNumber,
                agencyImgUrl: res.user.photoURL
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
        <Button onClick={Onlogin}>Login or Register as Agency !</Button>
    );
};

export default AgencyLogin;