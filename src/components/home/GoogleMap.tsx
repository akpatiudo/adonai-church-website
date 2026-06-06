function GoogleMap() {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-red-900 mb-6">
          Find Us
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Km3 Along Effurun - Sapele Expressway,
          Ohorhe 1 Community, Delta State, Nigeria
        </p>

        <div className="rounded-2xl overflow-hidden shadow-xl">

          <iframe
            src="https://maps.google.com/maps?q=Ohorhe%201%20Community%20Delta%20State&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
}

export default GoogleMap;