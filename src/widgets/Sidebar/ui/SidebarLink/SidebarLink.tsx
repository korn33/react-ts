import cls from "./SidebarLink.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import React, {memo} from "react";
import {SidebarLinkType} from "../../model/items";
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames";

interface SidebarLinkProps {
    item: SidebarLinkType,
    collapsed: boolean
}

export const SidebarLink = memo(({item, collapsed}: SidebarLinkProps) => {
    const {t} = useTranslation()
    return (
        <AppLink
            to={item.path}
            className={classNames(cls.SidebarLink, {[cls.collapsed]: collapsed})}
            theme={AppLinkTheme.PRIMARY}
        >
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>
                 {t(item.text)}
            </span>
        </AppLink>
    );
});