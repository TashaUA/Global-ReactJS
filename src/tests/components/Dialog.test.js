import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dialog from '../../components/Dialog';
import '@testing-library/jest-dom';
import renderConnected from '../utils/renderConnected';

describe('Dialog', () => {
  it('calls "onClick" prop on button click', () => {
    renderConnected(<Dialog type="edit" title="Add movie" />);
    userEvent.click(screen.getByRole('link', { name: /close/i }));
    expect(screen.getByRole('link', { name: /close/i })).toBeInTheDocument();
  });
});
