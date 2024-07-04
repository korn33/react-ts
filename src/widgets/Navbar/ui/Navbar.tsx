import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppRoutes, RoutePath} from "shared/config/routeConfig";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink
                    to={RoutePath[AppRoutes.MAIN]}
                    className={cls.mainLink}
                    theme={AppLinkTheme.PRIMARY}
                >Main</AppLink>
                <AppLink
                    to={RoutePath[AppRoutes.ABOUT]}
                    theme={AppLinkTheme.SECONDARY}
                >About</AppLink>
            </div>

        </div>
    );
};