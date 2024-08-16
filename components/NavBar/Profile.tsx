import React, { useEffect, useState } from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/firebase";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { Role } from '@prisma/client';
import axios from 'axios'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Profile = () => {
  const [user] = useAuthState(auth);
  const imgUrl = user?.photoURL as string;

  const [role, setRole] = useState<Role>(Role.HIKER);
  const [dashLink, setDashLink] = useState<string>('');

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user) {
        try {
          const uid = user.uid;
          const response = await axios.get(`/api/dashboardAccess/${uid}`);
          setRole(response.data);
        } catch (error) {
          console.error('Failed to fetch admin status:', error);
        }
      }
    };

    checkAdminStatus();
  }, [user]);

  useEffect(() => {
    if (user) {
      setDashLink(role === Role.AGENCY_ORGANIZER
        ? `/dashboard/agency/${user.uid}`
        : `/dashboard/hiker/${user.uid}`
      );
    }
  }, [role, user]);

  return (
    <>
      

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar className="border-2 border-gray-500">
              <Link href={dashLink}>
                <AvatarImage src={imgUrl} alt="@profile/logo" />
              </Link>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent align='start' side='right' className='bg-blue-500 text-white'>
            <p>Dashboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default Profile;