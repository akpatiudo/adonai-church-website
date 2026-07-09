import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
return ( <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50"> <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <div className="flex items-center gap-4">
      <img
        src="/church-logo.png"
        alt="Church Logo"
        className="h-14 w-auto"
      />

      <div>
  <h1 className="text-base md:text-2xl font-bold text-gray-900">
    Adonai Baptist Church
  </h1>

  <p className="hidden md:block text-xs text-red-900 tracking-wide">
    Ohorhe 1 City • Raising Kingdom Ambassadors for Christ
  </p>
</div>
    </div>

    <nav className="hidden md:flex items-center gap-6">
    
  <a href="#hero" className="font-medium hover:text-red-900">
    Home
  </a>

  <a href="#about" className="font-medium hover:text-red-900">
    About
  </a>

  <a href="#programmes" className="font-medium hover:text-red-900">
    Programmes
  </a>

  <a href="#pastor" className="font-medium hover:text-red-900">
    Pastor
  </a>

  <a href="#contact" className="font-medium hover:text-red-900">
    Contact
  </a>
  <a
  href="#contact"
  className="bg-red-900 text-white px-4 py-2 rounded-full hover:bg-red-800 transition text-sm md:text-base"
>
  Join Us
</a>
</nav>
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl text-red-900"
>
  {menuOpen ? "✕" : "☰"}
</button>

{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
    <a
      href="#hero"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 border-b"
    >
      Home
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 border-b"
    >
      About
    </a>

    <a
      href="#programmes"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 border-b"
    >
      Programmes
    </a>

    <a
      href="#pastor"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 border-b"
    >
      Pastor
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 border-b"
    >
      Contact
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 bg-red-900 text-white text-center font-semibold"
    >
      Join Us
    </a>
  </div>
)}
  </div>
</header>


);
}

export default Navbar;
