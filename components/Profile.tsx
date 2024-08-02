import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Profile = () => {
    const [user] = useAuthState(auth);
    const imgUrl = user?.photoURL as string;
  return (
    <>
      <Avatar>
        <AvatarImage src={imgUrl} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
};

export default Profile;
