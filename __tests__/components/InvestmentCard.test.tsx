import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvestmentCard from '@/components/InvestmentCard';
import { InvestmentCategory } from '@/lib/interfaces/investment';

// Mock Next.js components
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) {
    return <img src={src} alt={alt} {...props} />;
  };
});

jest.mock('next/link', () => {
  return function MockLink({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

const mockInvestment = {
  title: 'Test Investment',
  description: 'This is a test investment description',
  href: 'https://test-investment.com',
  imageSrc: '/test-image.png',
  category: InvestmentCategory.AI_SAAS,
};

describe('InvestmentCard', () => {
  it('renders investment card with correct content', () => {
    render(<InvestmentCard investment={mockInvestment} />);
    
    expect(screen.getByText('Test Investment')).toBeInTheDocument();
    expect(screen.getByText('This is a test investment description')).toBeInTheDocument();
    expect(screen.getByText('AI and SaaS')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders investment image with correct attributes', () => {
    render(<InvestmentCard investment={mockInvestment} />);
    
    const image = screen.getByAltText('Test Investment');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.png');
  });

  it('renders link with correct href and target', () => {
    render(<InvestmentCard investment={mockInvestment} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://test-investment.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders card with correct CSS classes', () => {
    render(<InvestmentCard investment={mockInvestment} />);
    
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('w-full', 'aspect-[3/2]');
  });

  it('handles investment without description', () => {
    const investmentWithoutDescription = {
      ...mockInvestment,
      description: undefined,
    };
    
    render(<InvestmentCard investment={investmentWithoutDescription} />);
    
    expect(screen.getByText('Test Investment')).toBeInTheDocument();
    expect(screen.getByText('AI and SaaS')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders different investment categories correctly', () => {
    const healthcareInvestment = {
      ...mockInvestment,
      category: InvestmentCategory.Healthcare,
    };
    
    render(<InvestmentCard investment={healthcareInvestment} />);
    
    expect(screen.getByText('Healthcare')).toBeInTheDocument();
  });
}); 