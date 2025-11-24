import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  it('renders Sword Health and Frontend Challenge text', () => {
    render(<Footer />);
    expect(screen.getByText('Sword Health')).toBeInTheDocument();
    expect(screen.getByText('Frontend Challenge')).toBeInTheDocument();
  });

  it('has the correct footer class', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toHaveClass('footer');
  });
});
