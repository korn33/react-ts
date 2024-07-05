import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppRoutes, RoutePath} from "shared/config/routeConfig";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={RoutePath[AppRoutes.MAIN]}
                    className={cls.mainLink}
                    theme={AppLinkTheme.PRIMARY}
                >{t('link_main_page')}</AppLink>
                <AppLink
                    to={RoutePath[AppRoutes.ABOUT]}
                    theme={AppLinkTheme.SECONDARY}
                >{t('link_about_page')}</AppLink>
            </div>
        </div>
    );
};