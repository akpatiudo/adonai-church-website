function Navbar() {
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

    <nav className="flex items-center gap-6">
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
  className="bg-red-900 text-white px-5 py-2 rounded-full hover:bg-red-800 transition"
>
  Join Us
</a>
</nav>


  </div>
</header>


);
}

export default Navbar;
