"use client";

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import Profile from "./Profile";

import AdminNavItem from "./AdminNavItem";
import { useEffect, useState } from "react";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";

const ClientNav = () => {
  const [user] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user) {
        try {
          const uid = user.uid;
          const response = await axios.get(`/api/admin/${uid}`);
          if (response.data.role  === "ADMIN") {
            console.log(response.data)
          } else if (response.data === null){
            setIsAdmin(false);
          }
        } catch (error) {
          setIsAdmin(false);
        }
      }
    };

    checkAdminStatus();
  }, [user]);

  return (
    <>
      <NavigationMenuItem>
        {!user ? (
          <NavigationMenuLink>
            <LoginBtn/>
          </NavigationMenuLink>
        ) : (
          <LogOutBtn/>
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