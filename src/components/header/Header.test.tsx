import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

import { usePathname } from 'next/navigation';
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

const mockedUsePathname = usePathname as jest.Mock;

describe('Header', () => {
  it('renders the logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText('sword-logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders all menu items', () => {
    render(<Header />);
    const menuLabels = ['Home', 'About', 'Contact'];
    menuLabels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('menu links have correct hrefs', () => {
    render(<Header />);
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
  });

  it('applies active class to the current route', () => {
    mockedUsePathname.mockReturnValue('/about');
    render(<Header />);
    const activeLink = screen.getByText('About');
    expect(activeLink).toHaveClass('activeLink');
  });

  it('has the correct header class', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('header')).toHaveClass('header');
  });
});
