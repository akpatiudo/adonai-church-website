import churchData from '../../data/churchData';

function Programmes() {
  return (
    <section
  id="programmes"
  className="py-24 px-6 bg-white"
>

      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Weekly Programmes
          </h2>

          <p className="text-lg md:text-2xl text-gray-600">
            Worship with us and grow spiritually
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {churchData.programmes.map((programme, index) => (

            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-8 shadow-lg border-t-4 border-red-900 hover:scale-105 transition duration-300"
            >

              <h3 className="text-2xl font-bold text-red-900 mb-6">
                {programme.title}
              </h3>

              {programme.day && (
                <p className="text-lg text-gray-700 mb-3">
                  <span className="font-semibold">
                    Day:
                  </span>{' '}
                  {programme.day}
                </p>
              )}

              <p className="text-lg text-gray-700">
                <span className="font-semibold">
                  Time:
                </span>{' '}
                {programme.time}
              </p>

            </div>

          ))}

        </div>
      </div>
    </section >
  );
}

export default Programmes;