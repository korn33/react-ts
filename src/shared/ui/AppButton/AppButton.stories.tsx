import React from 'react';

// import "../../../app/styles/variables/globals.scss";
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {AppButton, ThemeButtonApp} from './AppButton';
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator";
import {StyleDecorator} from "shared/config/storybook/decorators/StyleDecorator";



export default {
    title: 'shared/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const ClearLight = Template.bind({});
ClearLight.args = {
    children: 'Text',
    theme: ThemeButtonApp.CLEAR,
};
// ClearLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ThemeButtonApp.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Text',
    theme: ThemeButtonApp.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButtonApp.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
