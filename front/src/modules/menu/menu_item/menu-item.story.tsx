import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {MenuItem} from './menu-item.component';

export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
  
} as ComponentMeta<typeof MenuItem>;


const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});

View.args = {
  imagePath: "assets/pizza/manhattan.jpeg",
  weight: 500,
  title: "Pizza Manhattan",
  ingredients:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magnam fugit debitis unde quasi possimus?",
  price: 200,
}
