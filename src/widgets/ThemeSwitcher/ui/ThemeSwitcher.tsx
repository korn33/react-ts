import {classNames, Mods} from "shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss'
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIconTheme from "assets/icons/theme-light.svg";
import DarkIconTheme from "assets/icons/theme-dark.svg";
import {AppButton, ThemeButtonApp} from "shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps {
    className?: string,
    sidebarCollapsed: boolean
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {
        className,
        sidebarCollapsed
    } = props

    const {theme, toggleTheme} = useTheme()

    const mods: Mods = {
        [cls.sidebarCollapsed]: sidebarCollapsed
    }

    return (
        <div className={classNames(cls.ThemeSwitcher, mods, [className])}>
            <AppButton
                theme={ThemeButtonApp.CLEAR}
                onClick={toggleTheme}>{
                theme === Theme.DARK ?
                <DarkIconTheme/>
                :
                <LightIconTheme/>
            }</AppButton>
        </div>
    );
};