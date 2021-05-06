import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import React from 'react';
import useClickOutsideDialog from '../../utils/hooks';
import renderConnected from './renderConnected';
import Dialog from '../../components/Dialog';

describe('test hooks', () => {
  it('should close dialog on click outside dialog', () => {
    const onClose = jest.fn();

    const ref = {
      current: {
        contains: jest.fn().mockReturnValueOnce(false),
      },
    };
    const { getByTestId } = renderConnected(<Dialog type="edit" title="Add movie" />);
    renderHook(() => useClickOutsideDialog(ref, onClose));
    fireEvent.click(getByTestId('dialog-container'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should not close dialog on click inside dialog', () => {
    const onClose = jest.fn();

    const ref = {
      current: {
        contains: jest.fn().mockReturnValueOnce(true),
      },
    };
    const { getByTestId } = renderConnected(<Dialog type="edit" title="Add movie" />);
    renderHook(() => useClickOutsideDialog(ref, onClose));
    fireEvent.click(getByTestId('dialog-container'));
    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
