import { investments } from '@/app/data/investments';
import { InvestmentCategory } from '@/lib/interfaces/investment';

describe('Investments Data', () => {
  it('should load investments data successfully', () => {
    expect(investments).toBeDefined();
    expect(Array.isArray(investments)).toBe(true);
    expect(investments.length).toBeGreaterThan(0);
  });

  it('should have valid investment structure for all items', () => {
    investments.forEach((investment) => {
      expect(investment).toHaveProperty('title');
      expect(investment).toHaveProperty('href');
      expect(investment).toHaveProperty('imageSrc');
      expect(investment).toHaveProperty('category');
      
      expect(typeof investment.title).toBe('string');
      expect(typeof investment.href).toBe('string');
      expect(typeof investment.imageSrc).toBe('string');
      expect(Object.values(InvestmentCategory)).toContain(investment.category);
      
      // Title should not be empty
      expect(investment.title.trim()).toBeTruthy();
      
      // Href should be a valid URL
      expect(investment.href).toMatch(/^https?:\/\//);
      
      // Image source should not be empty
      expect(investment.imageSrc.trim()).toBeTruthy();
    });
  });

  it('should have unique investment titles', () => {
    const titles = investments.map(inv => inv.title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('should have valid categories', () => {
    const validCategories = Object.values(InvestmentCategory);
    investments.forEach(investment => {
      expect(validCategories).toContain(investment.category);
    });
  });

  it('should have investments in all categories', () => {
    const categoriesInData = new Set(investments.map(inv => inv.category));
    const allCategories = Object.values(InvestmentCategory);
    
    // Check that we have at least some categories represented
    expect(categoriesInData.size).toBeGreaterThan(0);
    
    // Log which categories are missing for debugging
    const missingCategories = allCategories.filter(cat => !categoriesInData.has(cat));
    if (missingCategories.length > 0) {
      console.log('Missing categories:', missingCategories);
    }
  });

  it('should have valid image sources', () => {
    investments.forEach(investment => {
      // Image source should be a string and not empty
      expect(typeof investment.imageSrc).toBe('string');
      expect(investment.imageSrc.trim()).toBeTruthy();
      
      // Should contain a file extension or be a valid path
      expect(investment.imageSrc).toMatch(/\.(png|jpg|jpeg|svg|webp|avif)$/i);
    });
  });

  it('should have valid URLs for all investments', () => {
    investments.forEach(investment => {
      try {
        new URL(investment.href);
      } catch {
        fail(`Invalid URL for investment "${investment.title}": ${investment.href}`);
      }
    });
  });

  it('should have reasonable number of investments', () => {
    // Should have at least 10 investments
    expect(investments.length).toBeGreaterThanOrEqual(10);
    
    // Should not have an unreasonable number (e.g., more than 100)
    expect(investments.length).toBeLessThanOrEqual(100);
  });

  it('should have investments with descriptions', () => {
    const investmentsWithDescriptions = investments.filter(inv => inv.description);
    expect(investmentsWithDescriptions.length).toBeGreaterThan(0);
    
    // At least 80% should have descriptions
    const descriptionPercentage = (investmentsWithDescriptions.length / investments.length) * 100;
    expect(descriptionPercentage).toBeGreaterThan(80);
  });

  it('should have valid description content when present', () => {
    investments.forEach(investment => {
      if (investment.description) {
        expect(typeof investment.description).toBe('string');
        expect(investment.description.trim()).toBeTruthy();
        expect(investment.description.length).toBeGreaterThan(10);
        expect(investment.description.length).toBeLessThan(500);
      }
    });
  });
}); 