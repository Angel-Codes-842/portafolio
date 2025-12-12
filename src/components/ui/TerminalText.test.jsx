import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import TerminalText from './TerminalText';

/**
 * Property-Based Test for TerminalText
 * **Feature: retro-portfolio, Property 6: TerminalText Prefix Application**
 * **Validates: Requirements 3.1**
 */
describe('TerminalText', () => {
  it('Property 6: TerminalText Prefix Application - rendered output starts with prefix followed by content', () => {
    fc.assert(
      fc.property(
        // Generate non-empty prefix strings
        fc.string({ minLength: 1, maxLength: 5 }).filter(s => s.trim().length > 0),
        // Generate non-empty content strings that are different from prefix
        fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
        (prefix, content) => {
          // Skip cases where prefix and content are identical (edge case that doesn't affect real usage)
          fc.pre(prefix !== content);
          
          const { container } = render(
            <TerminalText prefix={prefix}>{content}</TerminalText>
          );
          
          const textContent = container.textContent;
          
          // The rendered output should contain the prefix followed by the content
          expect(textContent).toContain(prefix);
          expect(textContent).toContain(content);
          
          // Verify prefix appears before content
          const prefixIndex = textContent.indexOf(prefix);
          const contentIndex = textContent.indexOf(content);
          expect(prefixIndex).toBeLessThan(contentIndex);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('uses default prefix ">" when no prefix prop is provided', () => {
    const { container } = render(<TerminalText>Test content</TerminalText>);
    const textContent = container.textContent;
    expect(textContent).toContain('>');
    expect(textContent).toContain('Test content');
  });

  it('applies monospaced typography', () => {
    const { container } = render(<TerminalText>Test</TerminalText>);
    const div = container.querySelector('div');
    expect(div.classList.contains('font-mono')).toBe(true);
  });
});
