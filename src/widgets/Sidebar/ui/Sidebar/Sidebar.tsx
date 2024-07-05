import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LocalizationSwitcher} from "widgets/LocalizationSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true)

    const toggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={toggle}>sidebar</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LocalizationSwitcher className={cls.translationButton}/>
            </div>
        </div>
    );
};