import { useState } from 'react';
import churchData from '../../data/churchData';

function PrayerContact() {
  const [name, setName] = useState('');
  const [prayer, setPrayer] = useState('');

  const handlePrayerSubmit = () => {
    const message = `Hello Adonai Baptist Church,

My Name: ${name}

Prayer Request:
${prayer}`;

    window.open(
      `https://wa.me/2348032937176?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
   <section
  id="contact"
  style={{
    padding: '100px 80px',
        background: '#6B1D1D',
        color: 'white'
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
            marginBottom: '20px'
          }}
        >
          Need Prayer or Counseling?
        </h2>

        <p
          style={{
            fontSize: '22px',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}
        >
          We believe in the power of prayer. Reach out to us for prayer,
          counseling, spiritual support, or inquiries.
        </p>
      </div>

      {/* Contact Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}
      >
        {/* Phone */}
        <div
          style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '40px',
            borderRadius: '14px'
          }}
        >
          <h3
            style={{
              marginBottom: '20px',
              fontSize: '28px'
            }}
          >
            Call Us
          </h3>

          <p
            style={{
              fontSize: '20px'
            }}
          >
            {churchData.phone}
          </p>
        </div>

        {/* Email */}
        <div
          style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '40px',
            borderRadius: '14px'
          }}
        >
          <h3
            style={{
              marginBottom: '20px',
              fontSize: '28px'
            }}
          >
            Email Us
          </h3>

          <p
            style={{
              fontSize: '18px',
              wordBreak: 'break-word'
            }}
          >
            {churchData.email}
          </p>
        </div>

        {/* Address */}
        <div
          style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '40px',
            borderRadius: '14px'
          }}
        >
          <h3
            style={{
              marginBottom: '20px',
              fontSize: '28px'
            }}
          >
            Visit Us
          </h3>

          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.7'
            }}
          >
            {churchData.address}
          </p>
        </div>
      </div>

      {/* Prayer Request Form */}
<div
  style={{
    marginTop: '60px',
    background: 'rgba(255,255,255,0.1)',
    padding: '40px',
    borderRadius: '14px'
  }}
>
  <h3
    style={{
      marginBottom: '20px',
      fontSize: '28px'
    }}
  >
    Submit a Prayer Request
  </h3>

  <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
  Name
</p>

<input
  type="text"
  placeholder="Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  style={{
    width: '100%',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    background: 'white',
    color: 'black',
    fontSize: '16px'
  }}
/>

  <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
  Prayer Request
</p>

<textarea
  placeholder="How can we pray for you?"
  value={prayer}
  onChange={(e) => setPrayer(e.target.value)}
  rows={4}
  style={{
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    background: 'white',
    color: 'black',
    fontSize: '16px'
  }}
/>

  <button
  onClick={handlePrayerSubmit}
  style={{
    background: 'white',
    color: '#6B1D1D',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }}
>
  Submit Prayer Request
</button>
</div>      
      {/* Buttons */}
      <div
        style={{
          marginTop: '70px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}
      >
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${churchData.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'white',
            color: '#6B1D1D',
            padding: '18px 35px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          Chat on WhatsApp
        </a>

        {/* Email */}
        <a
          href={`mailto:${churchData.email}`}
          style={{
            background: 'transparent',
            color: 'white',
            padding: '18px 35px',
            border: '2px solid white',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          Send Email
        </a>
      </div>
    </section>
  );
}

export default PrayerContact;