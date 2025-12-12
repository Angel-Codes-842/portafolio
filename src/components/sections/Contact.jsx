/**
 * Contact Component
 * Terminal-styled contact form with pixelated input borders
 * Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 7.5, 9.3
 */

import { useState } from 'react';
import PixelButton from '../ui/PixelButton';
import TerminalText from '../ui/TerminalText';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form states
export const FORM_STATES = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error',
};

// Validation function - exported for testing
export function validateForm(formData) {
  const errors = {};
  
  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'El nombre es requerido';
  }
  
  if (!formData.email || formData.email.trim() === '') {
    errors.email = 'El email es requerido';
  } else if (!EMAIL_REGEX.test(formData.email)) {
    errors.email = 'Email inválido';
  }
  
  if (!formData.message || formData.message.trim() === '') {
    errors.message = 'El mensaje es requerido';
  }
  
  return errors;
}

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [formState, setFormState] = useState(FORM_STATES.IDLE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState(FORM_STATES.SUBMITTING);
    
    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormState(FORM_STATES.SUCCESS);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setFormState(FORM_STATES.ERROR);
    }
  };

  const inputClasses = `
    w-full bg-transparent border-b-2 border-carbon py-3 px-2
    font-mono text-base text-carbon placeholder-carbon/40
    focus:outline-none focus:border-retro-blue
    transition-none min-h-[44px]
  `;

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`bg-white ${isVisible ? 'animate-crt' : 'opacity-0'}`}
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Section heading */}
          <TerminalText prefix=">">
            <span className="font-pixel text-2xl md:text-3xl text-carbon">
              Contacto
            </span>
          </TerminalText>

          <div className="mt-12 grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {formState === FORM_STATES.SUCCESS ? (
                <div className="pixel-border shadow-pixel p-6 bg-soft-gray/20">
                  <p className="font-mono text-carbon text-center">
                    ¡Mensaje enviado! Te responderé pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block font-mono text-sm text-carbon mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Tu nombre"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 font-mono text-sm text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block font-mono text-sm text-carbon mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="tu@email.com"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 font-mono text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block font-mono text-sm text-carbon mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tu mensaje..."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 font-mono text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <PixelButton type="submit" variant="primary">
                    {formState === FORM_STATES.SUBMITTING ? 'Enviando...' : 'Enviar ▉'}
                  </PixelButton>

                  {/* Error state */}
                  {formState === FORM_STATES.ERROR && (
                    <p className="font-mono text-sm text-red-600">
                      Error al enviar. Por favor, intenta de nuevo.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Alternative contact info */}
            <div className="space-y-6">
              <p className="font-mono text-carbon">
                También puedes contactarme directamente:
              </p>

              <div className="space-y-2">
                {/* Email */}
                <a 
                  href="mailto:hernan17ayala@gmail.com" 
                  className="flex items-center gap-3 font-mono text-carbon hover:text-retro-blue hover-jump transition-none py-2 min-h-[44px]"
                >
                  <span className="font-pixel text-retro-blue">@</span>
                  hernan17ayala@gmail.com
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/Angel-Codes-842" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-carbon hover:text-retro-blue hover-jump transition-none py-2 min-h-[44px]"
                >
                  <span className="font-pixel text-retro-blue">{'>'}</span>
                  GitHub
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/angel-gómez-b72836209/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-carbon hover:text-retro-blue hover-jump transition-none py-2 min-h-[44px]"
                >
                  <span className="font-pixel text-retro-blue">in</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
