import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './header.component';

export default {
  title: 'Commo/Header',
  component: Header,
  
} as ComponentMeta<typeof Header>;


const Template: ComponentStory<typeof Header> = () => <Header />;

export const View = Template.bind({});
