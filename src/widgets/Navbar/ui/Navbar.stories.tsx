import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator";
import {Navbar} from "./Navbar";



export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.args = {};
// NavbarLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const NavbarDark = Template.bind({});
NavbarLight.args = {};
NavbarLight.decorators = [ThemeDecorator(Theme.DARK)]
