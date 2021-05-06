// Button.stories.js
import React from 'react';
import Button from '../components/Button';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    classModifier: 'button',
    title: 'Button',
};

export const Grey = Template.bind({});
Grey.args = {
    classModifier: 'button button--grey',
    title: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    classModifier: 'button button--small',
    title: 'Button',
};