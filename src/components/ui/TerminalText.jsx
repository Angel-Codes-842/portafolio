/**
 * TerminalText Component
 * Text with configurable prefix and monospaced typography
 */

export default function TerminalText({ children, prefix = '>' }) {
  return (
    <div className="font-mono text-white">
      <span className="font-pixel text-retro-blue mr-2 animate-pulse-glow inline-block">{prefix}</span>
      <span>{children}</span>
    </div>
  );
}
