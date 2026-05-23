import churchData from '../../data/churchData';

function WelcomeAbout() {
  return (
    <section id="about" className="bg-gray-100 py-24 px-6">

      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Welcome */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Welcome to Our Church
          </h2>

          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
            {churchData.welcomeMessage}
          </p>

        </div>

        {/* Vision + Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="bg-white rounded-2xl p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-red-900 mb-6">
              Vision
            </h3>

            <p className="text-gray-700 text-lg leading-loose">
              {churchData.vision}
            </p>

          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-red-900 mb-6">
              Mission
            </h3>

            <p className="text-gray-700 text-lg leading-loose">
              {churchData.mission}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WelcomeAbout;