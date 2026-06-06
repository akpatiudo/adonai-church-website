
function Hero() {
  return (
<section
  id="hero"
  className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{
  backgroundImage: "url('/hero-bg.jpg')"
}}
>

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">

        <p className="uppercase tracking-[6px] text-red-300 font-semibold mb-4">
          Welcome To
        </p>

        <h1 className="text-3xl md:text-7xl font-extrabold leading-tight mb-6">
          Adonai Baptist Church
        </h1>

        <p className="text-lg md:text-3xl text-gray-200 mb-10">
          Raising Kingdom Ambassadors for Christ
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

  <a
  href="#contact"
  className="bg-red-900 hover:bg-red-800 transition duration-300 px-10 py-4 rounded-full text-lg font-semibold shadow-xl inline-block"
>
  Join Us This Sunday
</a>

  <a
    href="https://www.facebook.com/adonaibaptistchurchohorhe1"
    target="_blank"
    rel="noreferrer"
    className="bg-white text-black hover:bg-gray-200 transition duration-300 px-10 py-4 rounded-full text-lg font-semibold shadow-xl"
  >
    Watch Live
  </a>

</div>

      </div>
    </section>
  );
}

export default Hero;