import React from "react";
import {RoutePath} from "shared/config/routeConfig";
import MainIcon from "assets/icons/main-20-20.svg";
import AboutIcon from "assets/icons/about-20-20.svg";
import ProfileIcon from "assets/icons/profile-20-20.svg";

export interface SidebarLinkType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarLinkType[] = [
    {
        path: RoutePath.about,
        text: 'link_about_page',
        Icon: AboutIcon
    },
    {
        path: RoutePath.main,
        text: 'link_main_page',
        Icon: MainIcon
    },
    {
        path: RoutePath.profile,
        text: 'link_profile_page',
        Icon: ProfileIcon
    }
]