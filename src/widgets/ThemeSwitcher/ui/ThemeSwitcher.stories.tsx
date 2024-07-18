import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator";
import {ThemeSwitcher} from "./ThemeSwitcher";



export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const ThemeSwitcherLight = Template.bind({});
ThemeSwitcherLight.args = {};

export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.args = {};
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)]
