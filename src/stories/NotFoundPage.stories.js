import React from 'react';

import NotFoundPage from '../containers/NotFoundPage';
import {BrowserRouter as Router} from "react-router-dom";

export default {
  title: 'NotFoundPage',
  component: NotFoundPage,
};

const Template = () => <Router><NotFoundPage /></Router>;

export const NotFound = Template.bind({});

