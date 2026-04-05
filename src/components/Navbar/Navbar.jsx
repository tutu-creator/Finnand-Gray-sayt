import React, { useState, useEffect } from 'react'
import Gray from '../../assets/finn-and-gray-creative.svg'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar-scrolled" : ""}>
      <img src={Gray} alt="Finn and Gray" />
      
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <li><a href="#">Creative Services</a></li>
        <li><a href="#">Our Work</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className='nav-btn'>Schedule intro call</button>
    </nav>
  )
}

export default Navbar