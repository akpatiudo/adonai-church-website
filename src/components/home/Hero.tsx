import heroBg from '../../assets/hero-bg.jpg';
import churchData from '../../data/churchData';

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mt-20">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {churchData.name}
        </h1>

        <p className="text-xl md:text-3xl mb-10 text-gray-200">
          {churchData.motto}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

          <button className="bg-red-900 hover:bg-red-950 transition px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
            Join Us This Sunday
          </button>

          <a
            href={churchData.socialMedia.livestream}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black hover:bg-gray-200 transition px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
          >
            Watch Live
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;