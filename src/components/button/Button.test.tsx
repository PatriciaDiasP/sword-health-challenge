import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders the label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Submit" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Submit'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
