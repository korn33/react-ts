import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator";
import {Sidebar} from "./Sidebar";



export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarLight = Template.bind({});
SidebarLight.args = {};
// SidebarLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SidebarDark = Template.bind({});
SidebarDark.args = {};
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)]
