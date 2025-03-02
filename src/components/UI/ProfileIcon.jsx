import { IMAGES } from "@/utils/constants";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "@/utils/firebase"
import { signOut } from "firebase/auth"
import MagnifyingGlass from "@/components/icons/MagnifyingGlass"
import { toggleGptSearch } from "@/redux/slices/gptSlice"
import LanguageDropdown from "@/components/LanguageDropdown";

const ProfileIcon = () => {
    const dispatch = useDispatch();
    const [showTooltip, setShowTooltip] = useState(false)
    const displayName = useSelector((store) => store.user.displayName);

    const handleProfileClick = () => {
        setShowTooltip(prev => !prev)
    }

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log("An error happened.", error);
        }
    }

    const showGptSearch= ()=> {
        dispatch(toggleGptSearch());
    }

    return (
        <div className="relative flex items-center gap-8">
            <LanguageDropdown />
            <div className="text-white grid place-items-center">
                <button className="cursor-pointer" type="button" aria-label="Search" title="Search"
                    onClick={showGptSearch}
                >
                    <MagnifyingGlass />
                </button>
            </div>
            <div className="cursor-pointer" onClick={handleProfileClick}>
                <img className="w-8 rounded-md" src={IMAGES.PROFILE} alt="Profile" />
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