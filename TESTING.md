# Testing Documentation

This document outlines the testing strategy and test coverage for the Think Smarter Group website.

## Test Structure

### Unit Tests (`__tests__/`)

#### Components
- **`__tests__/components/Button.test.tsx`** - Tests for the Button component
- **`__tests__/components/InvestmentCard.test.tsx`** - Tests for the InvestmentCard component
  - Tests rendering of investment cards with correct content
  - Tests image attributes and link properties
  - Tests CSS classes and styling
  - Tests handling of optional description fields
  - Tests different investment categories

#### Data and Interfaces
- **`__tests__/lib/investments.test.ts`** - Tests for investments data integrity
  - Tests data loading and structure validation
  - Tests unique investment titles
  - Tests valid categories and image sources
  - Tests URL validation
  - Tests description content quality
  - Tests reasonable data volume

- **`__tests__/lib/interfaces/investment.test.ts`** - Tests for investment interface and enums
  - Tests InvestmentCategory enum values
  - Tests interface structure validation
  - Tests category filtering and grouping functionality
  - Tests type safety and validation

- **`__tests__/lib/utils.test.ts`** - Tests for utility functions

### End-to-End Tests (`tests/e2e/`)

#### Page Tests
- **`tests/e2e/home.spec.ts`** - Tests for the home page
  - Page loading and navigation
  - Contact form functionality
  - Responsive design
  - Navigation menu

- **`tests/e2e/investments.spec.ts`** - Tests for the investments page
  - Page loading and content display
  - Investment grid rendering
  - Category filtering functionality
  - Investment card interactions
  - Hover effects and descriptions
  - Mobile responsiveness
  - Navigation from investment cards
  - Filter state management

## Test Coverage

### Investments Inventory Loading Tests

The investments functionality is thoroughly tested across multiple layers:

#### 1. Data Layer Tests
- **Data Integrity**: Ensures all investment data is valid and complete
- **Structure Validation**: Verifies required fields (title, href, imageSrc, category)
- **URL Validation**: Checks that all investment links are valid URLs
- **Image Validation**: Ensures all image sources are valid file paths
- **Category Validation**: Verifies all investments use valid category enums
- **Uniqueness**: Ensures no duplicate investment titles
- **Content Quality**: Validates description length and content

#### 2. Component Tests
- **InvestmentCard Component**: Tests individual investment card rendering
- **Props Handling**: Tests component with and without optional fields
- **Styling**: Verifies correct CSS classes and styling
- **Accessibility**: Tests proper alt text and link attributes
- **Interactive Elements**: Tests hover states and link functionality

#### 3. Interface Tests
- **Type Safety**: Ensures TypeScript interfaces are properly defined
- **Enum Validation**: Tests InvestmentCategory enum values and structure
- **Filtering Logic**: Tests category-based filtering functionality
- **Data Transformation**: Tests grouping and sorting operations

#### 4. End-to-End Tests
- **Page Loading**: Tests complete page rendering and content display
- **User Interactions**: Tests category filtering, hover effects, and navigation
- **Responsive Design**: Tests functionality across different screen sizes
- **Performance**: Tests loading times and interaction responsiveness
- **Cross-Browser**: Tests functionality across different browsers

## Running Tests

### Unit Tests
```bash
npm test
```

### Specific Test Files
```bash
npm test -- --testPathPattern="investments"
npm test -- --testPathPattern="InvestmentCard"
```

### End-to-End Tests
```bash
npx playwright test
```

### Specific E2E Tests
```bash
npx playwright test tests/e2e/investments.spec.ts
```

### Headed Mode (for debugging)
```bash
npx playwright test tests/e2e/investments.spec.ts --headed
```

## Test Data

The tests use the actual investment data from `app/data/investments.ts`, ensuring that:
- Tests reflect real-world data scenarios
- Data changes are caught by tests
- No mock data maintenance required

## Key Test Scenarios

### Investments Page
1. **Initial Load**: Verifies all investments display correctly
2. **Category Filtering**: Tests filtering by investment categories
3. **Filter Clearing**: Tests clearing filters and returning to full list
4. **Card Interactions**: Tests hover effects and link functionality
5. **Mobile Responsiveness**: Tests functionality on mobile devices
6. **Navigation**: Tests external link functionality
7. **State Management**: Tests filter state persistence

### Investment Cards
1. **Content Display**: Tests title, description, and category display
2. **Image Loading**: Tests image attributes and alt text
3. **Link Functionality**: Tests external link behavior
4. **Hover Effects**: Tests interactive hover states
5. **Accessibility**: Tests proper ARIA attributes and keyboard navigation

## Continuous Integration

Tests are designed to run in CI/CD pipelines and provide:
- Fast execution times
- Reliable results
- Clear error messages
- Comprehensive coverage reporting

## Future Enhancements

Potential areas for additional testing:
- Performance testing for large investment datasets
- Accessibility testing with screen readers
- Visual regression testing
- API integration testing (if backend is added)
- Load testing for concurrent users 