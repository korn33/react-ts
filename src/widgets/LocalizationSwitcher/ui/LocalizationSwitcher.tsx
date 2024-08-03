import {classNames} from "shared/lib/classNames";
import cls from './LocalizationSwitcher.module.scss'
import {AppButton, ThemeButtonApp} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface LocalizationSwitcherProps {
    className?: string,
    short: boolean
}

export const LocalizationSwitcher = memo(({className, short}: LocalizationSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <AppButton
            onClick={toggle}
            className={classNames(cls.LocalizationSwitcher, {}, [className])}
            theme={ThemeButtonApp.CLEAR}
        >{short ? t('localization_button_short') : t('localization_button_long')}</AppButton>
    );
});