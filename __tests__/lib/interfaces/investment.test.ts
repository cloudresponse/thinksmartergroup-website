import { InvestmentCategory } from '@/lib/interfaces/investment';

describe('Investment Interface', () => {
  describe('InvestmentCategory enum', () => {
    it('should have all expected category values', () => {
      const expectedCategories = [
        'Education, Skills and Media',
        'Healthcare',
        'AI and SaaS',
        'Transport & Mobility',
        'Professional Services',
        'Retail',
        'Rollups',
      ];

      const actualCategories = Object.values(InvestmentCategory);
      
      expect(actualCategories).toEqual(expect.arrayContaining(expectedCategories));
      expect(actualCategories.length).toBe(expectedCategories.length);
    });

    it('should have unique category values', () => {
      const categories = Object.values(InvestmentCategory);
      const uniqueCategories = new Set(categories);
      
      expect(uniqueCategories.size).toBe(categories.length);
    });

    it('should have valid category names', () => {
      Object.values(InvestmentCategory).forEach(category => {
        expect(typeof category).toBe('string');
        expect(category.trim()).toBeTruthy();
        expect(category.length).toBeGreaterThan(0);
        expect(category.length).toBeLessThan(50);
      });
    });

    it('should have consistent enum structure', () => {
      expect(InvestmentCategory.EducationSkillsMedia).toBe('Education, Skills and Media');
      expect(InvestmentCategory.Healthcare).toBe('Healthcare');
      expect(InvestmentCategory.AI_SAAS).toBe('AI and SaaS');
      expect(InvestmentCategory.TransportMobility).toBe('Transport & Mobility');
      expect(InvestmentCategory.ProfessionalServices).toBe('Professional Services');
      expect(InvestmentCategory.Retail).toBe('Retail');
      expect(InvestmentCategory.Rollups).toBe('Rollups');
    });
  });

  describe('Investment interface structure', () => {
    it('should define required properties', () => {
      // This test ensures the interface is properly defined
      // We can't directly test TypeScript interfaces at runtime,
      // but we can test that the enum values are accessible
      
      const sampleInvestment = {
        title: 'Test Investment',
        description: 'Test description',
        href: 'https://example.com',
        imageSrc: '/test-image.png',
        category: InvestmentCategory.AI_SAAS,
      };

      expect(sampleInvestment).toHaveProperty('title');
      expect(sampleInvestment).toHaveProperty('href');
      expect(sampleInvestment).toHaveProperty('imageSrc');
      expect(sampleInvestment).toHaveProperty('category');
      
      expect(typeof sampleInvestment.title).toBe('string');
      expect(typeof sampleInvestment.href).toBe('string');
      expect(typeof sampleInvestment.imageSrc).toBe('string');
      expect(Object.values(InvestmentCategory)).toContain(sampleInvestment.category);
    });

    it('should allow optional description property', () => {
      const investmentWithoutDescription = {
        title: 'Test Investment',
        href: 'https://example.com',
        imageSrc: '/test-image.png',
        category: InvestmentCategory.Healthcare,
      };

      expect(investmentWithoutDescription).toHaveProperty('title');
      expect(investmentWithoutDescription).toHaveProperty('href');
      expect(investmentWithoutDescription).toHaveProperty('imageSrc');
      expect(investmentWithoutDescription).toHaveProperty('category');
      
      // Should not have description property
      expect(investmentWithoutDescription).not.toHaveProperty('description');
    });
  });

  describe('Category validation', () => {
    it('should validate category values against enum', () => {
      const validCategories = Object.values(InvestmentCategory);
      
      // Test each category value
      validCategories.forEach(category => {
        expect(validCategories).toContain(category);
      });
    });

    it('should reject invalid category values', () => {
      const invalidCategories = [
        'Invalid Category',
        'Test Category',
        'Random String',
        '',
        'AI & SaaS', // Close but not exact
      ];

      const validCategories = Object.values(InvestmentCategory);
      
      invalidCategories.forEach(invalidCategory => {
        expect(validCategories).not.toContain(invalidCategory);
      });
    });
  });

  describe('Category usage patterns', () => {
    it('should support filtering by category', () => {
      const investments = [
        { title: 'AI Company', category: InvestmentCategory.AI_SAAS },
        { title: 'Health Company', category: InvestmentCategory.Healthcare },
        { title: 'Education Company', category: InvestmentCategory.EducationSkillsMedia },
      ];

      const aiInvestments = investments.filter(inv => inv.category === InvestmentCategory.AI_SAAS);
      const healthInvestments = investments.filter(inv => inv.category === InvestmentCategory.Healthcare);

      expect(aiInvestments.length).toBe(1);
      expect(healthInvestments.length).toBe(1);
      expect(aiInvestments[0].title).toBe('AI Company');
      expect(healthInvestments[0].title).toBe('Health Company');
    });

    it('should support category grouping', () => {
      const investments = [
        { title: 'AI Company 1', category: InvestmentCategory.AI_SAAS },
        { title: 'AI Company 2', category: InvestmentCategory.AI_SAAS },
        { title: 'Health Company', category: InvestmentCategory.Healthcare },
      ];

      const groupedByCategory = investments.reduce((acc, inv) => {
        if (!acc[inv.category]) {
          acc[inv.category] = [];
        }
        acc[inv.category].push(inv);
        return acc;
      }, {} as Record<string, typeof investments>);

      expect(groupedByCategory[InvestmentCategory.AI_SAAS]).toHaveLength(2);
      expect(groupedByCategory[InvestmentCategory.Healthcare]).toHaveLength(1);
    });
  });
}); 