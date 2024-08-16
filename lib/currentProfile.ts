import { auth } from "@/firebase"
import { db } from "./db";



const currentProfile = async()=>{
    const user = auth.currentUser;

    const agency = await db.agency.findFirst({
        where: {
            uid: user?.uid
        }
    })

    if(agency){

    }
    
    const profile = await db.profile.findFirst({
        where:{
            uid: user?.uid
        }
    })
    return profile?profile:agency
}

export {currentProfile}