import churchData from "../../data/churchData";

function UpcomingEvents() {
  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-red-900 font-semibold mb-3">
            Upcoming Events
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Worship With Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {churchData.programmes.slice(0, 3).map((programme, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                {programme.title}
              </h3>

              <p className="text-gray-700 mb-2">
                <strong>Day:</strong> {programme.day ?? "Sunday"}
              </p>

              <p className="text-gray-700">
                <strong>Time:</strong> {programme.time}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default UpcomingEvents;