import React from 'react';
import ReactDOM from 'react-dom';
import { UserInfoSection } from './UserInfoSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserInfoSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
