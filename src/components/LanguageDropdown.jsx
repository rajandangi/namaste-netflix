import Language from "@/components/icons/Language"
import { SUPPORTED_LANGUAGES } from "@/utils/i18n"
import { changeLanguage } from "@/redux/slices/config";
import { useDispatch, useSelector } from "react-redux";

const LanguageDropdown = () => {
    const dispatch = useDispatch();

    const selectedLang = useSelector((store) => store.config.lang);

    return (
        <div className="relative text-sm cursor-pointer flex items-center justify-between text-white">
            <select
                name="lang-dropdown"
                id="i18n"
                aria-label="Language"
                className="appearance-none bg-transparent focus:ring-0 focus:outline-none font-medium"
                onChange={(e) => dispatch(changeLanguage(e.target.value))}
            >
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}
                        selected={lang.identifier === selectedLang}
                    >
                        {lang.name}
                    </option>
                ))}
            </select>
            <Language className="pointer-events-none" />
        </div>
    )
}

export default LanguageDropdown