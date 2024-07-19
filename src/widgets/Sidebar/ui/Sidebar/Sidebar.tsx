import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LocalizationSwitcher} from "widgets/LocalizationSwitcher";
import {AppButton, ButtonSize, ThemeButtonApp} from "shared/ui/AppButton/AppButton";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {AppRoutes, RoutePath} from "shared/config/routeConfig";
import {useTranslation} from "react-i18next";
import MainIcon from "assets/icons/main-20-20.svg";
import AboutIcon from "assets/icons/about-20-20.svg";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true)

    const {t} = useTranslation()

    const toggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <AppButton
                data-testid="sidebarToggleButton"
                onClick={toggle}
                className={cls.collapsingBtn}
                theme={ThemeButtonApp.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={cls.items}>
                <AppLink
                    to={RoutePath[AppRoutes.MAIN]}

                    theme={AppLinkTheme.PRIMARY}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('link_main_page')}
                    </span>
                </AppLink>

                <AppLink
                    to={RoutePath[AppRoutes.ABOUT]}
                    className={cls.item}
                    theme={AppLinkTheme.PRIMARY}
                >
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>
                         {t('link_about_page')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher sidebarCollapsed={collapsed}/>
                <LocalizationSwitcher short={collapsed} className={cls.translationButton}/>
            </div>
        </div>
    );
};