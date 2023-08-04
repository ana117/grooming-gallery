import {useTranslation} from "react-i18next";

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <select defaultValue={i18n.language}
                onChange={handleLanguageChange}
                className="bg-transparent border-none outline-none
                           text-text text-right
                           pe-[0.25rem] cursor-pointer">
            <option value="id">Indonesia</option>
            <option value="en">English</option>
        </select>
    );
}

export default LanguageSwitcher;