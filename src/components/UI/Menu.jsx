import { useDispatch } from "react-redux"
import MagnifyingGlass from "@/components/icons/MagnifyingGlass"
import { toggleGptSearch } from "@/redux/slices/gptSlice"
import LanguageDropdown from "@/components/LanguageDropdown";
import ProfileIcon from "@/components/UI/ProfileIcon"

const Menu = () => {
    const dispatch = useDispatch();
    const showGptSearch = () => {
        dispatch(toggleGptSearch());
    }
    return (
        <div className="flex items-center gap-4 md:gap-8">
            <LanguageDropdown />
            <div className="text-white grid place-items-center">
                <button className="cursor-pointer" type="button" aria-label="Search"
                    title="Search"
                    onClick={showGptSearch}
                >
                    <MagnifyingGlass />
                </button>
            </div>
            <ProfileIcon />
        </div>
    )
}

export default Menu