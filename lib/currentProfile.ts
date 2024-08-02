import { auth } from "@/firebase"
import { db } from "./db";



const currentProfile = async()=>{
    const user = auth.currentUser;
    const profile = await db.profile.findFirst({
        where:{
            uid: user?.uid
        }
    })
    return profile
}

export {currentProfile}