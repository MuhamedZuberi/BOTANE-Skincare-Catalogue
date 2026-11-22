import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Categories from './pages/Categories'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand-logo">
        BOTANÉ<span>.</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
      </div>

      <span className="nav-label">THE ART OF SIMPLE SKINCARE</span>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer>
          <h2>BOTANÉ.</h2>
          <p>THE ART OF SIMPLE SKINCARE</p>
          <span>© 2026 BOTANÉ. ALL RIGHTS RESERVED.</span>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App