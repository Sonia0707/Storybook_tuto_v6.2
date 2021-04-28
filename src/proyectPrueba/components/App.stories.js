/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';
import App from './App';

export default {
    component: App,
    title: 'App',
  };
  
const Template = args => <App {...args} />;

export const AppComponent = Template.bind({});
AppComponent.args = {
  background: 'blue',
  parrafo: 'Edit <code>src/App.js</code> and save to reload.',
};
