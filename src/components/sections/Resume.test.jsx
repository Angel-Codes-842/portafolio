import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Resume from './Resume';
import { profile } from '../../data/profile';

/**
 * Unit Tests for Resume Section
 */
describe('Resume', () => {
  it('renders the section heading and full name', () => {
    render(<Resume />);

    expect(screen.getByText('Currículum')).toBeInTheDocument();
    expect(screen.getByText(profile.fullName)).toBeInTheDocument();
  });

  it('embeds the CV PDF with an accessible title', () => {
    render(<Resume />);

    const iframe = screen.getByTitle('Vista previa del currículum');
    expect(iframe.getAttribute('src')).toContain(profile.cvUrl);
  });

  it('offers open and download actions for the CV', () => {
    render(<Resume />);

    expect(screen.getByRole('link', { name: 'Ver CV' })).toHaveAttribute('href', profile.cvUrl);
    const downloadLink = screen.getByRole('link', { name: /Descargar PDF/ });
    expect(downloadLink).toHaveAttribute('href', profile.cvUrl);
    expect(downloadLink).toHaveAttribute('download', profile.cvFileName);
  });

  it('renders experience and education from the CV', () => {
    render(<Resume />);

    expect(screen.getByText(new RegExp(profile.experience.company))).toBeInTheDocument();
    expect(screen.getByText(profile.experience.role)).toBeInTheDocument();
    expect(screen.getByText('Formación')).toBeInTheDocument();
    profile.education.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('renders section with correct id for navigation', () => {
    render(<Resume />);

    expect(document.getElementById('cv')).toBeInTheDocument();
  });
});
