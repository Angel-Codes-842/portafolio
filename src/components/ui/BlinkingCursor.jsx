/**
 * BlinkingCursor Component
 * Displays a blinking cursor character with configurable appearance
 * Requirements: 1.3, 9.1
 */

export default function BlinkingCursor({ character = '█', interval = 530 }) {
  return (
    <span 
      className="animate-blink inline-block font-pixel"
      style={{ animationDuration: `${interval * 2}ms` }}
      aria-hidden="true"
    >
      {character}
    </span>
  );
}
