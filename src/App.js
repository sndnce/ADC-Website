import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [username, setUsername] = useState('');
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  // const [showAccess, setShowAccess] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    document.body.style.cursor = "url('/cursor.png') auto";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'rGlenwd19' && passcode === 'Porsche9301978') {
      setError('');
      setSuccess("The Aspen Demolitions Company values your dedication, Researcher Glenwood.")
      setShowAccess(true);

    } else {
      const denied = new Audio('/employee-terminal/access-denied.mp3');
      denied.volume = 1.0;
      denied.play().catch(err => console.warn("Denied audio failed:", err));
      
      setError('');
      setError('ACCESS DENIED');
    }
  };

  return (
    <div className="app-container">
      <div className="left-banner">
        <img src="/ADCFavicon.png" alt="Logo" />
        <p className="Welcomenote">Welcome to the official webpage of the Aspen Demolitions Company.</p>
        <p className="optionmenu">Option Menu</p>
        <ul className="options">
          <li className="history">Our History</li>
          <li className="Compound-77">Compound-77</li>
          <li className="visit">Visit Us</li>
          <li className="contact">Contact</li>
        </ul>
        <img src="/90s+Best+Viewed+with+Microsoft+Internet+Explorer+-+Rod+Kim.gif" alt="gif1" />
        <img src="/200_d.gif" alt="gif2" />
        <img src="/Paradise-Ad.png" alt="ad" />
        <p>&copy; 1997 Aspen Demolitions Co.</p>
      </div>

      <div className="main-layout">
        <div className="content">
          <div className="stackbox">
            <img src="/ADCskullLogo.png" alt="ADC Skull Logo" />
            <p className="slogan">Keeping the "Wild" in Wild West since 1892.</p>
            <p className="para">Your premier destination for fine demolitions and high explosives west of the Continental Divide.</p>
            <p className="cpr">Copyright 1997 Aspen Demolitions Co.</p>

            <div className="Options">
              <p className="bold">Our History</p>
              <div className="history paragraphs">
                <p>Founded in 1892 by U.S. congressman, rough rider, and environmentalist Robert Pitkin, the Aspen Demolitions Company has proudly served Americans for over a century. </p>
                <p>Today, the Aspen Demolitions Company remains committed to environmental conservation and fine explosives production.</p>
              </div>

              <p className="bold">Compound-77</p>
              <div className="compound-77-paragraphs">
                <img src="/C-77.png" alt="Compound-77" />
                <p>At the heart of each of the Aspen Demolitions Products lies our famous high-energy, nitroamine based explosive, Compound-77(C-77).</p>
                <p>In keeping with Robert Pitkin's unwavering dedication to preserving the natural beauty of the United States, Compound-77(C-77) has been engineered with environmental sustainability in mind. Its unique formulation not only minimizes ecological impact, but has been reported to attract and reintroduce robust American wildlife-- including species believed to have lain dormant for centuries. In some cases, creatures thought to have vanished for centuries have seemingly re-emerged in areas where C-77 has been deployed.</p>
                <p>Whether this phenomenon is due to chemical properties stimulating dormant biological mechanisms or something far more fascinating is a current subject of the Aspen Demolitions Company's cutting-edge research and development team.</p>
              </div>

              <p className="bold">Visit Us</p>
              <img src="/ADC_storefront_.png" alt="Storefront" />
              <p>320 S Galena Street, Aspen CO 81611.</p>
              <p>Hours of Operation:</p>
              <p>Mon–Thu: 12 PM –9 PM</p>
              <p>Fri–Sun: 10 AM –11 PM</p>
 
              <p className="bold">Contact</p>
              <button onClick={() => window.location.href = 'mailto:aspendemolitions.talent@gmail.com'}>
                Click Here to Email Us
              </button>
              <p>Reach us at 970-924-0638</p>
              <p><em>For government agents, please refer to the Department of Defense directory.</em></p>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="music">
            <h3>Mr. Pitkin's Special Mix</h3>
            <div className="album-wrapper">
              <img src="/Album_Cover.png" className="Album Cover" alt="Album Cover" />
              <img src="/new-blinking-new-blinking-without-background.gif" className="overlay-gif" alt="New" />
            </div>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
              Coming Soon to Spotify!
            </a>
            <p>Featuring 10 of Mr. Pitkin's favorite tracks, inspired by Pop, Eurodance, and Italo disco.</p>
          </div>

          <div className="recent-blasts">
            <h3>Recent Blasts</h3>
            <div className="jack">
              <img src="/trade-show.webp" alt="Jack Pitkin" />
              <p>Dr. Katt to speak @ Upcoming EXCON(Explosives Convention) in North Carolina.</p>
            </div>
            <div className="wooley-mammoth">
              <img src="/woolley-mamoth.webp" alt="Mammoth" />
              <p>Woolly Mammoth Remains Discovered in Buttermilk.</p>
            </div>
            <div className="aam">
              <img src="/art-exhibit.jpg" alt="Art Exhibit" />
              <p>ADC Explosives Featured in the Aspen Museum of Fine Art.</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="employee-login-form">
            <h3>Secured Employee Login</h3>
            <p>Please use your employee credentials to view official ADC materials.</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              required
            />
            <button type="submit">Log In</button>
            {error && <p className="login-error">{error}</p>}
            {success && <p className="login-success">{success}</p>}
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              fetch('https://script.google.com/macros/s/AKfycbzddy2I9pRlElx6lNr1wQlgs8c89A6fhwbsD4wsZlFWvI4H_Q36qXbB0kQ4Vqc6m3GsaQ/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ email })
              })
                .then((res) => res.text())
                .then((txt) => {
                  alert("Thanks for subscribing!");
                  e.target.reset();
                });
            }}
            className="employee-login-form2">
            <h3>Join Our Mailing List</h3>
            <p>For exclusive offers, ADC events near you, and more!</p>
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="phone-number">
            <h3>Call today and get a FREE Quote!</h3>
            <h1 className="phone">970-924-0638</h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
