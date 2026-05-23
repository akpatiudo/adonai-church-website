import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <img
            src="/church-logo.png"
            alt="Church Logo"
            className="h-14 w-auto"
          />

          <h1 className="text-lg md:text-2xl font-bold text-gray-900">
            Adonai Baptist Church
          </h1>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <a href="#hero" className="hover:text-red-900 transition">
            Home
          </a>

          <a href="#about" className="hover:text-red-900 transition">
            About
          </a>

          <a href="#programmes" className="hover:text-red-900 transition">
            Programmes
          </a>

          <a href="#pastor" className="hover:text-red-900 transition">
            Pastor
          </a>

          <a href="#contact" className="hover:text-red-900 transition">
            Contact
          </a>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (

        <div className="md:hidden bg-white border-t shadow-lg">

          <nav className="flex flex-col p-6 gap-6 text-lg">

            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#programmes" onClick={() => setMenuOpen(false)}>
              Programmes
            </a>

            <a href="#pastor" onClick={() => setMenuOpen(false)}>
              Pastor
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

          </nav>

        </div>

      )}
    </header>
  );
}

export default Navbar;