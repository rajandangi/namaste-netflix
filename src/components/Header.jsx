import Logo from "@/components/UI/Logo"
import ProfileIcon from "@/components/UI/ProfileIcon"
import { useSelector } from "react-redux"

const Header = () => {
    const firebaseUid = useSelector((store) => store.user.uid);

    return (
        <div className="absolute top-0 flex justify-between items-center p-4 mb-4 z-10 w-full bg-gradient-to-b from-black">
            <Logo />
            {firebaseUid && <ProfileIcon />}
        </div>
    )
}

export default Header;