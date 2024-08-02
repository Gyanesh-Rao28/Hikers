import { toast } from "@/components/ui/use-toast";

export const handleAuthError = (error: any) => {
    if(error.code === "auth/email-already-in-use") {
        toast({
            title: "Email already exists",
            description: "Please try with another email address.",
            className: "bg-red-400",
        });
    } else if (error.code === "auth/invalid-email") {
        toast({
            title: "Invalid Email",
            description: "The email address is not valid. Please check and try again.",
            className: "bg-yellow-400",
        });
    } else if (error.code === "auth/weak-password") {
        toast({
            title: "Weak Password",
            description: "The password is too weak. Please use a stronger password.",
            className: "bg-yellow-400",
        });
    } else if (error.code === "auth/user-disabled") {
        toast({
            title: "User Disabled",
            description: "This user account has been disabled.",
            className: "bg-red-400",
        });
    } else if (error.code === "auth/user-not-found") {
        toast({
            title: "User Not Found",
            description: "No user found with this email address.",
            className: "bg-yellow-400",
        });
    } else if (error.code === "auth/wrong-password") {
        toast({
            title: "Wrong Password",
            description: "The password entered is incorrect.",
            className: "bg-yellow-400",
        });
    } else if (error.code === "auth/popup-closed-by-user") {
        toast({
            title: "Popup Closed",
            description: "The popup was closed before completing the sign-in.",
            className: "bg-yellow-400",
        });
    } else if (error.code === "auth/cancelled-popup-request") {
        toast({
            title: "Popup Cancelled",
            description: "The popup request was cancelled.",
            className: "bg-yellow-400",
        });
    } else if (error.code === "auth/operation-not-allowed") {
        toast({
            title: "Operation Not Allowed",
            description: "This operation is not allowed. Please enable it in the Firebase console.",
            className: "bg-red-400",
        });
    } else if (error.code === "auth/invalid-credential") {
        toast({
            title: "Invalid Credential",
            description: "Retry with correct credential !",
            className: "bg-red-400",
        });
    } else {
        toast({
            title: "Registration Error",
            description: "An unexpected error occurred. Please try again.",
            className: "bg-yellow-400",
        });
    }
};

// auth / invalid - credential