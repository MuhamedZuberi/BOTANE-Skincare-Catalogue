import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">SKINCARE, SIMPLIFIED.</p>
          <h1>Less, but<br /><em>better.</em></h1>
          <p className="hero-description">
            Thoughtfully selected skincare essentials.
            Discover a simpler approach to everyday care.
          </p>
          <Link to="/collection" className="shop-button">
            EXPLORE COLLECTION ↗
          </Link>
        </div>

        <div className="hero-art">
          <div className="art-circle">
            <span>BOTANÉ</span>
            <div className="bottle">
              <div className="bottle-cap"></div>
              <div className="bottle-body">
                <small>BOTANÉ</small>
                <strong>PURE<br />CARE</strong>
                <small>SKINCARE ESSENTIALS</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <p className="eyebrow">OUR PHILOSOPHY</p>
        <h2>Beauty in simplicity.</h2>
        <p>
          BOTANÉ celebrates thoughtful skincare, timeless design
          and the beauty of everyday rituals.
        </p>
        <Link to="/about" className="shop-button">
          DISCOVER OUR STORY ↗
        </Link>
      </section>
    </>
  )
}

export default Home