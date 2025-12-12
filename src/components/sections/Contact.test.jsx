import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import * as fc from 'fast-check';
import Contact, { validateForm, FORM_STATES } from './Contact';

/**
 * Property-Based Test for Contact Form Submission
 * **Feature: retro-portfolio, Property 2: Form Submission State Transition**
 * **Validates: Requirements 5.5**
 */
describe('Contact Form Property Tests', () => {
  // Arbitrary for valid email addresses
  const validEmailArb = fc.tuple(
    fc.string({ minLength: 1, maxLength: 10 }).filter(s => /^[a-zA-Z0-9]+$/.test(s)),
    fc.string({ minLength: 1, maxLength: 10 }).filter(s => /^[a-zA-Z0-9]+$/.test(s)),
    fc.constantFrom('com', 'org', 'net', 'io', 'dev')
  ).map(([local, domain, tld]) => `${local}@${domain}.${tld}`);

  // Arbitrary for valid non-empty strings (name and message)
  const nonEmptyStringArb = fc.string({ minLength: 1, maxLength: 50 })
    .filter(s => s.trim().length > 0);

  it('Property 2: Form Submission State Transition - valid form data transitions to success state', async () => {
    // Test the validateForm function directly - valid data should produce no errors
    // This tests the property that valid form data will pass validation (prerequisite for success state)
    fc.assert(
      fc.property(
        nonEmptyStringArb,
        validEmailArb,
        nonEmptyStringArb,
        (name, email, message) => {
          const errors = validateForm({ name, email, message });
          // Valid form data should produce no validation errors
          return Object.keys(errors).length === 0;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 2 (integration): valid form submission transitions to success state', async () => {
    vi.useFakeTimers();
    
    const { unmount } = render(<Contact />);

    // Fill in the form with valid data
    const nameInput = screen.getByLabelText('Nombre');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Mensaje');

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(messageInput, { target: { value: 'Hello there!' } });
    });

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Advance timers to complete the simulated submission
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1100);
    });

    // Verify success state - success message should be displayed
    expect(screen.getByText(/mensaje enviado/i)).toBeInTheDocument();

    unmount();
    vi.useRealTimers();
  });
});

/**
 * Unit Tests for Contact Form Validation
 * **Validates: Requirements 5.1, 5.2, 5.3, 5.5**
 */
describe('Contact Form Validation', () => {
  it('validates empty name field', () => {
    const errors = validateForm({ name: '', email: 'test@test.com', message: 'Hello' });
    expect(errors.name).toBe('El nombre es requerido');
  });

  it('validates empty email field', () => {
    const errors = validateForm({ name: 'John', email: '', message: 'Hello' });
    expect(errors.email).toBe('El email es requerido');
  });

  it('validates invalid email format', () => {
    const errors = validateForm({ name: 'John', email: 'invalid-email', message: 'Hello' });
    expect(errors.email).toBe('Email inválido');
  });

  it('validates empty message field', () => {
    const errors = validateForm({ name: 'John', email: 'test@test.com', message: '' });
    expect(errors.message).toBe('El mensaje es requerido');
  });

  it('returns no errors for valid form data', () => {
    const errors = validateForm({ name: 'John', email: 'test@test.com', message: 'Hello' });
    expect(Object.keys(errors)).toHaveLength(0);
  });
});

/**
 * Unit Tests for Contact Component Rendering
 * **Validates: Requirements 5.1, 5.2, 5.3, 5.4**
 */
describe('Contact Component Rendering', () => {
  it('renders form fields', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
  });

  it('renders submit button with correct text', () => {
    render(<Contact />);
    
    expect(screen.getByRole('button', { name: /enviar ▉/i })).toBeInTheDocument();
  });

  it('renders alternative contact info', () => {
    render(<Contact />);
    
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('displays validation errors on invalid submission', async () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('El nombre es requerido')).toBeInTheDocument();
      expect(screen.getByText('El email es requerido')).toBeInTheDocument();
      expect(screen.getByText('El mensaje es requerido')).toBeInTheDocument();
    });
  });
});
