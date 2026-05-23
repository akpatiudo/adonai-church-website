import churchData from '../../data/churchData';

function CoreValues() {
  return (
    <section
      style={{
        padding: '100px 80px',
        background: 'white'
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '70px'
        }}
      >
        <h2
          style={{
            fontSize: '42px',
            color: '#6B1D1D',
            marginBottom: '20px'
          }}
        >
          Our Core Values
        </h2>

        <p
          style={{
            fontSize: '20px',
            color: '#555'
          }}
        >
          The spiritual pillars that guide our ministry
        </p>
      </div>

      {/* Values Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px'
        }}
      >
        {churchData.coreValues.map((value, index) => (
          <div
            key={index}
            style={{
              background: '#f8f8f8',
              padding: '40px 20px',
              borderRadius: '14px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: '0.3s'
            }}
          >
            <div
              style={{
                width: '70px',
                height: '70px',
                background: '#6B1D1D',
                borderRadius: '50%',
                margin: '0 auto 25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '28px',
                fontWeight: 'bold'
              }}
            >
              {value.charAt(0)}
            </div>

            <h3
              style={{
                fontSize: '24px',
                color: '#222'
              }}
            >
              {value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;