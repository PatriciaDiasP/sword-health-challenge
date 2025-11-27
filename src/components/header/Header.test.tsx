import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText('Sword Move logo');
    expect(logo).toBeInTheDocument();
    const link = logo.closest('a');
    expect(link).toHaveAttribute('href', '/');
    expect(link).toHaveAttribute('aria-label', 'Go to homepage');
  });

  it('renders the decorative logo with aria-hidden', () => {
    render(<Header />);
    const logo = screen.getByText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders the separator', () => {
    render(<Header />);
    const separator = document.querySelector(`.${'separator'}`);
    expect(separator).toBeInTheDocument();
  });
});
