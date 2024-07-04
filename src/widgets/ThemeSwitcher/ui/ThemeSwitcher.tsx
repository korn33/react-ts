import {classNames} from "shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss'
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIconTheme from "assets/icons/theme-light.svg";
import DarkIconTheme from "assets/icons/theme-dark.svg";
import {AppButton, ThemeButtonApp} from "shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
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