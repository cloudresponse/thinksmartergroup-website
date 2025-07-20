import { cn } from '@/lib/utils';

describe('cn utility function', () => {
  it('combines class names correctly', () => {
    const result = cn('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('handles conditional classes', () => {
    const isActive = true;
    const result = cn('base-class', isActive && 'active-class');
    expect(result).toBe('base-class active-class');
  });

  it('filters out falsy values', () => {
    const result = cn('base-class', false && 'hidden-class', null, undefined, 'visible-class');
    expect(result).toBe('base-class visible-class');
  });

  it('handles empty strings and whitespace', () => {
    const result = cn('class1', '', '   ', 'class2');
    expect(result).toBe('class1 class2');
  });
}); 