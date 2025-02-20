import profileImage from "@/assets/netflix-profile-pictures.jpg"
import { useState } from "react"
import { useSelector } from "react-redux"
import { auth } from "@/utils/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router"

const ProfileIcon = () => {
    const [showTooltip, setShowTooltip] = useState(false)
    const displayName = useSelector((store) => store.user.displayName);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        setShowTooltip(prev => !prev)
    }

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
            console.log("Sign-out successful.");
        } catch (error) {
            console.log("An error happened.", error);
        }
    }

    return (
        <div className="relative inline-block">
            <div className="cursor-pointer" onClick={handleProfileClick}>
                <img className="w-8 rounded-md" src={profileImage} alt="Profile" />
            </div>
            {showTooltip && (
                <div className="absolute top-full mt-2 w-max bg-gray-950 opacity-80 shadow p-4 rounded right-1 space-y-2">
                    <p className="text-sm text-white font-medium">Hi {displayName}</p>
                    <p className="text-sm text-gray-400">Manage Profiles</p>
                    <div className="flex justify-center items-center border-t border-gray-700 pt-2">
                        <button
                            onClick={handleSignOut}
                            className="text-s text-red-500 hover:underline cursor-pointer"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </div>


    )
}

export default ProfileIcon