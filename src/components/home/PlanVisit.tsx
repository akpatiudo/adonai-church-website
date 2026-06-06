
function PlanVisit() {
  return (
    <section className="py-24 px-6 bg-gray-100">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-red-900 mb-6">
          First Time Here?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We'd love to welcome you. Plan your visit with us.
        </p>

        <div className="bg-white p-10 rounded-2xl shadow-lg">

          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg p-4"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full border rounded-lg p-4"
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2 font-semibold">
              Number of Guests
            </label>

            <input
              type="number"
              placeholder="How many are coming?"
              className="w-full border rounded-lg p-4"
            />
          </div>

          <button className="bg-red-900 text-white px-8 py-4 rounded-lg hover:bg-red-800">
            Plan My Visit
          </button>

        </div>

      </div>

    </section>
  );
}

export default PlanVisit;