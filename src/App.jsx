/**
 * App Component
 * Root component that orchestrates all sections of the portfolio
 * Requirements: All
 */

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-carbon text-white bg-grid">
      {/* Navigation */}
      <Navbar />

      {/* Main content with padding for fixed navbar */}
      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
