import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [username, setUsername] = useState('');
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [showAccess, setShowAccess] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "url('/cursor.png') auto";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'rGlenwd19' && passcode === 'Porsche9301978') {
      const audio = new Audio('/employee-terminal/access-granted.mp3');
      audio.volume = 1.0;
      audio.play().catch(err => console.warn("Audio failed:", err));

      setShowAccess(true);

      // After flashing animation, hide overlay and redirect
      setTimeout(() => {
        setShowAccess(false);
        window.location.href = '/verify.html';
      }, 2100); // 3 flashes (700ms per flash)
    } else {
      const denied = new Audio('/employee-terminal/access-denied.mp3');
      denied.volume = 1.0;
      denied.play().catch(err => console.warn("Denied audio failed:", err));
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
            <p className="para">Your premier destination for fine demolitions and high explosives west of the continental divide.</p>
            <p className="cpr">Copyright 1997 Aspen Demolitions Co.</p>

            <div className="Options">
              <p className="bold">Our History</p>
              <div className="history paragraphs">
                <p>Founded in 1892 by U.S. Congressman and Rough Rider Robert Pitkin, the Aspen Demolitions Company has proudly served Americans for over a century.



                <p>After graduating from Princeton University in 1881 with a degree in Economics and Chemistry, Robert Pitkin embarked on a career as a congressional representative. He initially found success as a policymaker and was reelected in 1885. However, his outspoken opposition to the Chinese Exclusion Act of 1882, persistent lobbying for the Sherman Antitrust Act, and membership in the American Forestry Commission in 1882 ultimately alienated him from his fellow party members.
                </p>
                <p>Recognized for his robust technical background and advocacy for conservationist policies, Pitkin caught the attention of none other than Theodore Roosevelt, the future 26th president of the United States. As the prospect war with Spain loomed on the horizon, Roosevelt offered Pitkin a position in the 1st United States Volunteer Cavalry-- soon to be immortalized in American history as the 'Rough Riders.' Disillusioned by the rampant corruption of Gilded Age politics, Pitkin eagerly accepted and set sail for Cuba alongside the future president and his troops.
                </p>
                <p>During the Battle of San Juan Hill, Pitkin witnessed firsthand the power and strategic importance of artillery and explosives in securing victory for the American forces. Inspired by their potential, as well as a promising market opportunity, Pitkin moved west to the rugged terrain of Colorado's Rocky Mountains and founded the Aspen Demolitions Company</p>
                <p>Sadly, in 1934 Robert passed away while advising the creation of Mount Rushmore where he was struck by a piece of granite that would later become President Washington's nose. He is survived by his son, Julien, and grandson, Jack. Under Julien's leadership, the Aspen Demolitions Company remains committed to environmental conservation and fine explosives production.</p></p>
              </div>

              <p className="bold">Compound-77</p>
              <div className="compound-77-paragraphs">
                <img src="/C-77.png" alt="Compound-77" />
                <p>At the heart of each of the Aspen Demolitions Products lies our famous high energy nitroamine based explosive, Compound-77(C-77).</p>
                <p>C-77 synthesis begins with the nitration of aniline using a mixture of concentrated nitric and sulfuric acid to form 2,4,6-trinitroaniline (TNA). This intermediate is then reacted with hydrazine hydrate in methanol and Compound-77, and through the Aspen Demolitions Company's propriety process yields a fused triazole-nitroamine ring structure. Upon completion of the Aspen Demolitions Company's riguous quality assurance procedure the crude product is precipitated in ice water and purified via recrystallization from acetone. The resulting C-77 exhibits high detonation velocity (~9,100 m/s) and moderate impact sensitivity, making it suitable for military and demolition applications.
                </p>
                <p>In keeping with Robert Pitkin's unwavering dedication to preserving the natural beauty of the United States, Compound-77(C-77) has been engineered with environmental sustainability in mind. Its unique formulation not only minimizes ecological impact but, intriguingly, has been reported to attract and even help reintroduce robust American wildlife-- including species believed to have lain dormant for centuries. In some mysterious cases, creatures thought to have vanished for centuries have seemingly re-emerged in areas where C-77 has been deployed. Whether this phenomenon is due to chemical properties stimulating dormant biological mechanisms or something far more fascinating is a current subject of the Aspen Demolitions Company's cutting-edge research and development team.</p>
              </div>

              <p className="bold">Visit Us</p>
              <img src="/ADC_storefront_.png" alt="Storefront" />
              <p>340 S Galena Street, Aspen CO 81611.</p>
              <p>Hours of Operation:</p>
              <p>Mon–Thu: 12pm–9pm</p>
              <p>Fri–Sun: 10am–11pm</p>

              <p className="bold">Contact</p>
              <button onClick={() => window.location.href = 'mailto:aspendemolitions@gmail.com'}>
                Click Here to Email Us
              </button>
              <p>For government agents, please refer to the Department of Defense directory.</p>
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
              Available on Spotify!
            </a>
            <p>Featuring 10 of Mr. Pitkin's favorite tracks; inspired by Pop, Eurodance, and Italo Disco.</p>
          </div>

          <div className="recent-blasts">
            <h3>Recent Blasts</h3>
            <div className="jack">
              <img src="/trade-show.webp" alt="Jack Pitkin" />
              <p>Jack Pitkin to Speak @ Upcoming EXCON in North Carolina.</p>
            </div>
            <div className="wooley-mammoth">
              <img src="/woolley-mamoth.webp" alt="Mammoth" />
              <p>Woolley Mammoth Remains Discovered in Buttermilk.</p>
            </div>
            <div className="aam">
              <img src="/art-exhibit.jpg" alt="Art Exhibit" />
              <p>ADC Explosives Featured in Aspen Museum of Fine Art.</p>
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
          </form>
        </div>
      </div>

      {/* ACCESS GRANTED OVERLAY */}
      <div id="access-overlay" className={`access-overlay ${showAccess ? 'flash' : ''}`}>
        <div className="access-message">ACCESS GRANTED</div>
      </div>
    </div>
  );
}

export default App;
