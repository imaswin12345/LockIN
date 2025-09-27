import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from "../Assets/Box.png"

function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for modern glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyles = {
    navbar: {
      background: scrolled 
        ? 'rgba(255, 255, 255, 0.95)' 
        : 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   
      padding: '16px 0',
    },
    brandLink: {
      textDecoration: 'none',
      transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      display: 'inline-block',
    },
    brandLinkHover: {
      transform: 'translateY(-2px) scale(1.02)',
    },
    logo: {
      width: '35px',
      height: '30px',
      marginRight: '12px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(25, 118, 210, 0.25)',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      filter: 'brightness(1.05)',
    },
    logoHover: {
   
      transform: 'rotate(-2deg) scale(1.05)',
    },
    brandText: {
      fontWeight: '800',
      fontSize: '1.75rem',
      background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 30%, #d81b60 70%, #f06292 100%)',
      backgroundSize: '300% 300%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'gradientShift 6s ease infinite',
      letterSpacing: '-0.02em',
      margin: 0,
      transition: 'all 0.3s ease',
    },
    // CSS keyframes need to be added as a style tag
    keyframes: `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `
  };

  return (
    <>
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: headerStyles.keyframes }} />
      
      <Navbar 
        expand="lg" 
        className="sticky-top"
        style={headerStyles.navbar}
      >
        <Container>
          <Link 
            to={'/'} 
            style={headerStyles.brandLink}
            onMouseOver={(e) => {
              Object.assign(e.currentTarget.style, {
                ...headerStyles.brandLink,
                ...headerStyles.brandLinkHover
              });
              const logo = e.currentTarget.querySelector('img');
              if (logo) {
                Object.assign(logo.style, {
                  ...headerStyles.logo,
                  ...headerStyles.logoHover
                });
              }
            }}
            onMouseOut={(e) => {
              Object.assign(e.currentTarget.style, headerStyles.brandLink);
              const logo = e.currentTarget.querySelector('img');
              if (logo) {
                Object.assign(logo.style, headerStyles.logo);
              }
            }}
          >
            <Navbar.Brand className="d-flex align-items-center" style={{ margin: 0 }}>
              <img 
                src={Logo} 
                alt="LOCK-IN logo"
                style={headerStyles.logo}
              />
              <span style={headerStyles.brandText}>LOCK-IN</span>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;