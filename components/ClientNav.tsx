"use client";

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { toast } from "@/components/ui/use-toast";
import { auth } from "@/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import Profile from "./Profile";
import Cookies from "universal-cookie";
import AdminNavItem from "./AdminNavItem";
import { useEffect, useState } from "react";

const cookies = new Cookies()

const ClientNav = () => {

  const provider = new GoogleAuthProvider();

  const [user] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {

    const checkAdminStatus = async () => {
      if (user) {
        try {
          const uid = user.uid
          const response = await axios.get(`/api/admin/${uid}`);
          setIsAdmin(response.data.role === 'ADMIN');
        } catch (error) {
          console.error('Failed to fetch admin status:', error);
          setIsAdmin(false);
        }
      }
    };

    checkAdminStatus();
  }, [user]);


  const onLogout = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    
  };

  const Onlogin = async () => {
    try {
      const res = await signInWithPopup(auth, provider);

      const email = res.user.email as string;

      const response = await axios.post("/api/profile", {
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: email,
        phoneNumber: res.user.phoneNumber,
        imageUrl: res.user.photoURL,
        token: res.user.refreshToken,
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
      <NavigationMenuItem>
        {!user ? (
          <NavigationMenuLink
            onClick={Onlogin}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 focus:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:opacity-50 data-[state=open]:opacity-50"
          >
            Login
          </NavigationMenuLink>
        ) : (
          <NavigationMenuLink
            onClick={onLogout}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 focus:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:opacity-50 data-[state=open]:opacity-50"
          >
            Logout
          </NavigationMenuLink>
        )}
      </NavigationMenuItem>

      <NavigationMenuItem>
        {isAdmin ? (
          <AdminNavItem />
        ) : (
          <></>
        )}
      </NavigationMenuItem>


      {user && <Profile />}
    </>
  );
};

export default ClientNav;
