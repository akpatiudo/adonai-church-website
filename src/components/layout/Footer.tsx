import churchData from '../../data/churchData';

function Footer() {
  return (
    <footer
      style={{
        background: '#111',
        color: 'white',
        padding: '80px 60px 40px'
      }}
    >
      {/* Top Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          marginBottom: '50px'
        }}
      >
        {/* Church Info */}
        <div>
          <h2
            style={{
              marginBottom: '20px',
              color: '#ffffff'
            }}
          >
            {churchData.name}
          </h2>

          <p
            style={{
              lineHeight: '1.8',
              color: '#ccc'
            }}
          >
            {churchData.motto}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              marginBottom: '20px'
            }}
          >
            Contact
          </h3>

          <p>{churchData.phone}</p>

          <p
            style={{
              margin: '15px 0'
            }}
          >
            {churchData.email}
          </p>

          <p
            style={{
              lineHeight: '1.7'
            }}
          >
            {churchData.address}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              marginBottom: '20px'
            }}
          >
            Quick Links
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}
          >
            <a
              href={churchData.socialMedia.facebook}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#ccc',
                textDecoration: 'none'
              }}
            >
              Facebook
            </a>

            <a
              href={churchData.socialMedia.youtube}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#ccc',
                textDecoration: 'none'
              }}
            >
              YouTube
            </a>

            <a
              href={churchData.socialMedia.instagram}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#ccc',
                textDecoration: 'none'
              }}
            >
              Instagram
            </a>

            <a
              href={churchData.socialMedia.livestream}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#ccc',
                textDecoration: 'none'
              }}
            >
              Watch Live
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: '1px solid #333',
          paddingTop: '30px',
          textAlign: 'center',
          color: '#888'
        }}
      >
        © {new Date().getFullYear()} {churchData.name}. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;