/**
 * Footer Component
 * Minimal footer with pixelated separator, copyright and social links
 * Requirements: 6.1, 6.2, 6.3
 */

const socialLinks = [
  { 
    id: 'github', 
    label: 'GitHub', 
    href: 'https://github.com/Angel-Codes-842',
    icon: '⌘'
  },
  { 
    id: 'linkedin', 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/angel-gómez-b72836209/',
    icon: '◈'
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8">
      {/* Pixelated horizontal separator */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="pixel-line mb-8" aria-hidden="true" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright text */}
          <p className="font-mono text-sm text-carbon">
            © {currentYear} Ángel Gómez. Todos los derechos reservados.
          </p>

          {/* Social links - adequate touch targets */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-carbon hover:text-retro-blue hover-jump transition-none px-2 py-2 min-h-[44px] flex items-center"
                aria-label={link.label}
              >
                <span className="mr-1" aria-hidden="true">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
