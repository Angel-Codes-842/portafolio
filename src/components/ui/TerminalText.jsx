/**
 * TerminalText Component
 * Text with configurable prefix and monospaced typography
 * Requirements: 3.1
 */

export default function TerminalText({ children, prefix = '>' }) {
  return (
    <div className="font-mono text-carbon">
      <span className="font-pixel text-retro-blue mr-2">{prefix}</span>
      <span>{children}</span>
    </div>
  );
}
