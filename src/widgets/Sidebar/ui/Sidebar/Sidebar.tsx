import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import React, {memo, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LocalizationSwitcher} from "widgets/LocalizationSwitcher";
import {AppButton, ButtonSize, ThemeButtonApp} from "shared/ui/AppButton/AppButton";
import {SidebarItemsList} from "../../model/items";
import {SidebarLink} from "../SidebarLink/SidebarLink";

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true)

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
                {SidebarItemsList.map((item) => (
                    <SidebarLink item={item} key={item.path} collapsed={collapsed}/>
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher sidebarCollapsed={collapsed}/>
                <LocalizationSwitcher short={collapsed} className={cls.translationButton}/>
            </div>
        </div>
    );
});