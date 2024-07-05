import {classNames} from "shared/lib/classNames";
import cls from './LocalizationSwitcher.module.scss'
import {AppButton, ThemeButtonApp} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";

interface LocalizationSwitcherProps {
    className?: string
}

export const LocalizationSwitcher = ({className}: LocalizationSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
            <AppButton
                onClick={toggle}
                className={classNames(cls.LocalizationSwitcher, {}, [className])}
                theme={ThemeButtonApp.CLEAR}
            >{t('localization_button')}</AppButton>
    );
};