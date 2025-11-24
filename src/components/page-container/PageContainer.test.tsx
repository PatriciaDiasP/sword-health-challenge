import { render, screen } from '@testing-library/react';
import { PageContainer } from './PageContainer';

jest.mock('./PageContainer.module.css', () => ({
  container: 'mocked-container-class',
}));

describe('PageContainer', () => {
  it('renders children inside a main element', () => {
    render(
      <PageContainer>
        <div>Test Content</div>
      </PageContainer>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the correct class to the main element', () => {
    const { container } = render(
      <PageContainer>
        <span>Child</span>
      </PageContainer>,
    );
    const main = container.querySelector('main');
    expect(main).toHaveClass('mocked-container-class');
  });
});
