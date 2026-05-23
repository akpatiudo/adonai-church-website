import pastorImage from '../../assets/pastor.jpg';
import churchData from '../../data/churchData';

function PastorProfile() {
  return (
    <section
  id="pastor"
  className="py-24 px-6 bg-gray-100"
>

      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-red-900">
            Meet Our Pastor
          </h2>

        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div>

            <img
              src={pastorImage}
              alt="Pastor"
              className="w-full rounded-3xl shadow-2xl"
            />

          </div>

          {/* Content */}
          <div>

            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              {churchData.pastor}
            </h3>

            <p className="text-lg md:text-xl text-gray-700 leading-loose mb-10">
              A passionate servant of God committed to preaching the undiluted
              Word of God, raising disciples, transforming lives, and empowering
              believers to impact their generation through Christ.
            </p>

            <a
              href={churchData.socialMedia.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-red-900 hover:bg-red-950 transition text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
            >
              Watch Sermons
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PastorProfile;