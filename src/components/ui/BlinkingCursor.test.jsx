import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import BlinkingCursor from './BlinkingCursor';

/**
 * Property-Based Test for BlinkingCursor
 * **Feature: retro-portfolio, Property 5: BlinkingCursor Character Preservation**
 * **Validates: Requirements 1.3, 9.1**
 */
describe('BlinkingCursor', () => {
  it('Property 5: BlinkingCursor Character Preservation - displays the exact character passed to it', () => {
    fc.assert(
      fc.property(
        // Generate printable single characters (excluding whitespace-only)
        fc.char().filter(c => c.trim().length > 0),
        (character) => {
          const { container } = render(<BlinkingCursor character={character} />);
          const span = container.querySelector('span');
          
          expect(span).toBeTruthy();
          expect(span.textContent).toBe(character);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('displays default character when no character prop is provided', () => {
    render(<BlinkingCursor />);
    const span = document.querySelector('span');
    expect(span.textContent).toBe('█');
  });

  it('applies animate-blink class for blinking effect', () => {
    const { container } = render(<BlinkingCursor />);
    const span = container.querySelector('span');
    expect(span.classList.contains('animate-blink')).toBe(true);
  });
});
