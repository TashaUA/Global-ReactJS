import React from 'react';
import renderer from 'react-test-renderer';
import {
  fireEvent,
  render,
} from '@testing-library/react';
import Button from '../../components/Button';

describe('Button', () => {
  it('snapshot renders', () => {
    const component = renderer.create(<Button title="Edit" classModifier="button--big" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    const { getByText } = render(<Button title="Edit" onClick={onClick} />);

    fireEvent.click(getByText(/edit/i));
    expect(onClick).toHaveBeenCalled();
  });
});
