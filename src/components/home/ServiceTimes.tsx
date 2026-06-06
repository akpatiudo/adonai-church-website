function ServiceTimes() {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Service Times
        </h2>

        <p className="text-gray-600 mb-16">
          Join us for worship, fellowship, prayer, and spiritual growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-900 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-red-900">
              Sunday Worship
            </h3>

            <p className="text-lg">
              7:00 AM & 9:00 AM
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-900 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-red-900">
              Bible Study
            </h3>

            <p className="text-lg">
              Wednesday • 5:00 PM
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-900 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-red-900">
              Prayer & Revival
            </h3>

            <p className="text-lg">
              Friday • 6:30 AM
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ServiceTimes;