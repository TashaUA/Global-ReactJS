import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import FormInput from '../../../components/Form/FormInput';

describe('FormInput', () => {
  it('pass input value to test input field', () => {
    render(<FormInput label="test" name="title" />);

    expect(screen.getByRole('textbox', { name: /test/i })).toHaveValue('');
    userEvent.type(screen.getByLabelText(/test/i), 'val');
    expect(screen.getByRole('textbox', { name: /test/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /test/i })).toHaveValue('val');
    expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument();
  });
});
