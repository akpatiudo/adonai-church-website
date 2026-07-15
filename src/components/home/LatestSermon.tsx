
import churchData from '../../data/churchData';

function LatestSermon() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-red-900 font-semibold tracking-[4px] uppercase mb-3">
          Latest Message
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {churchData.latestSermon.title}
        </h2>

        <p className="text-xl text-gray-600 mb-3">
          {churchData.pastor}
        </p>

        <p className="max-w-3xl mx-auto text-gray-600 leading-8 mb-10">
          {churchData.latestSermon.description}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href={churchData.latestSermon.youtube}
            target="_blank"
            rel="noreferrer"
            className="bg-red-900 text-white px-8 py-4 rounded-full hover:bg-red-800 transition"
          >
            ▶ Watch on YouTube
          </a>

          <a
            href={churchData.latestSermon.livestream}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-red-900 text-red-900 px-8 py-4 rounded-full hover:bg-red-900 hover:text-white transition"
          >
            📺 Facebook Live
          </a>

        </div>

      </div>
    </section>
  );
}

export default LatestSermon;