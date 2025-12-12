/**
 * PixelButton Component
 * 8-bit styled button with hover-jump effect
 * Requirements: 1.5, 1.6, 5.3
 */

export default function PixelButton({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  type = 'button' 
}) {
  const baseClasses = `
    inline-block px-6 py-3 font-pixel text-lg
    border-pixel shadow-pixel hover-jump
    transition-none cursor-pointer min-h-[44px]
    focus:outline-none focus:ring-2 focus:ring-retro-blue focus:ring-offset-2
  `;

  const variantClasses = {
    primary: 'bg-carbon text-white hover:bg-retro-blue',
    secondary: 'bg-white text-carbon hover:bg-soft-gray',
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`.trim();

  // Render as link if href is provided
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
