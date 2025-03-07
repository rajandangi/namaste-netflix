import Logo from "@/components/UI/Logo"
import Menu from "@/components/UI/Menu"
import { useSelector } from "react-redux"
import useAuth from "@/hooks/useAuth"

const Header = () => {
    useAuth(); // Custom hook to check if user is logged in
    const firebaseUid = useSelector((store) => store.user.uid);

    return (
        <div className="absolute top-0 flex justify-between items-center p-4 mb-4 z-10 w-full bg-gradient-to-b from-black h-20">
            <Logo />
            {firebaseUid && <Menu />}
        </div>
    )
}

export default Header;