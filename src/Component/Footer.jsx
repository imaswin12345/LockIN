import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Logo from "../Assets/Box.png"

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerStyles = {
    footer: {
      width: '100%',
      minHeight: '350px',
      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '60px 0 20px 0',
      marginTop: '80px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
    },
    logo: {
      width: '35px',
      height: '30px',
      marginRight: '12px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(25, 118, 210, 0.2)',
    },
    logoText: {
      fontWeight: '800',
      fontSize: '1.5rem',
      background: 'linear-gradient(45deg, #1976d2, #d81b60)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: 0,
    },
    sectionTitle: {
      fontWeight: '600',
      fontSize: '1.1rem',
      marginBottom: '16px',
      color: '#212121',
    },
    description: {
      fontSize: '0.9rem',
      lineHeight: '1.6',
      color: '#757575',
      marginBottom: '12px',
    },
    version: {
      display: 'inline-block',
      padding: '4px 12px',
      backgroundColor: 'rgba(25, 118, 210, 0.1)',
      color: '#1976d2',
      border: '1px solid rgba(25, 118, 210, 0.3)',
      borderRadius: '16px',
      fontSize: '0.75rem',
      fontWeight: '500',
      marginTop: '8px',
    },
    link: {
      textDecoration: 'none',
      color: '#757575',
      fontWeight: '500',
      padding: '8px 0',
      display: 'block',
      transition: 'all 0.2s ease',
      position: 'relative',
    },
    linkHover: {
      color: '#1976d2',
      transform: 'translateX(4px)',
    },
    newsletterForm: {
      display: 'flex',
      marginBottom: '20px',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'box-shadow 0.2s ease',
    },
    emailInput: {
      border: 'none',
      padding: '12px 16px',
      fontSize: '0.9rem',
      flex: 1,
      outline: 'none',
    },
    subscribeButton: {
      borderRadius: '0',
      padding: '12px 16px',
      fontSize: '1.1rem',
      transition: 'all 0.2s ease',
      border: 'none',
    },
    socialContainer: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    socialLink: {
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      padding: '8px',
      borderRadius: '8px',
    },
    socialIcon: {
      fontSize: '24px',
      transition: 'all 0.2s ease',
    },
    copyright: {
      marginTop: '40px',
      paddingTop: '20px',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      color: '#757575',
      fontSize: '0.9rem',
    },
    heart: {
      color: '#e91e63',
      margin: '0 4px',
    },
    successMessage: {
      color: '#2e7d32',
      fontSize: '0.8rem',
      marginBottom: '8px',
      opacity: subscribed ? 1 : 0,
      transition: 'opacity 0.3s ease',
    }
  };

  const socialColors = {
    instagram: '#E4405F',
    linkedin: '#0077B5',
    facebook: '#1877F2',
    twitter: '#000000'
  };

  return (
    <div style={footerStyles.footer} className='d-flex justify-content-center align-items-center flex-column'>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap' style={{ maxWidth: '1200px', gap: '40px' }}>
        
        {/* Company Info */}
        <div style={{ width: '300px', minWidth: '280px' }} className="website">
          <div style={footerStyles.logoContainer}>
            <img 
            src={Logo} 
              alt="LOCK-IN logo"
              style={footerStyles.logo}
            />
            <h4 style={footerStyles.logoText}>LOCK-IN</h4>
          </div>
          
          <h6 style={footerStyles.description}>
            LOCKIN is a modern project management app built as part of a full-stack learning journey.
          </h6>
          <h6 style={footerStyles.description}>
            This project demonstrates core CRUD operations—creating, updating, reading, and deleting tasks and projects.
          </h6>

          <span style={footerStyles.version}>Version: 1.0.0</span>
        </div>
        
        {/* Quick Links */}
        <div className="links d-flex flex-column" style={{ minWidth: '150px' }}>
          <h4 style={footerStyles.sectionTitle}>Quick Links</h4>
          
          <Link 
            to={'/'} 
            style={footerStyles.link}
            onMouseOver={(e) => Object.assign(e.target.style, footerStyles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, footerStyles.link)}
          >
            Home
          </Link>
          <Link 
            to={'/Login'} 
            style={footerStyles.link}
            onMouseOver={(e) => Object.assign(e.target.style, footerStyles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, footerStyles.link)}
          >
            Log-in
          </Link>
          <Link 
            to={'/Register'} 
            style={footerStyles.link}
            onMouseOver={(e) => Object.assign(e.target.style, footerStyles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, footerStyles.link)}
          >
            Register
          </Link>
        </div>
        
        {/* Resources */}
        <div className="guides d-flex flex-column" style={{ minWidth: '200px' }}>
          <h4 style={footerStyles.sectionTitle}>Resources</h4>
          <a 
            href="https://reactjs.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={footerStyles.link}
            onMouseOver={(e) => Object.assign(e.target.style, footerStyles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, footerStyles.link)}
          >
            React Documentation
          </a>
          <a 
            href="https://react-bootstrap.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={footerStyles.link}
            onMouseOver={(e) => Object.assign(e.target.style, footerStyles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, footerStyles.link)}
          >
            React Bootstrap
          </a>
          <a 
            href="https://redux.js.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={footerStyles.link}
            onMouseOver={(e) => Object.assign(e.target.style, footerStyles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, footerStyles.link)}
          >
            Redux
          </a>
        </div>

        {/* Newsletter */}
        <div className="contact" style={{ minWidth: '250px' }}>
          <h4 style={footerStyles.sectionTitle}>Newsletter</h4>
          
          <div style={footerStyles.successMessage}>
            {subscribed && "Thanks for subscribing! 🎉"}
          </div>
          
          <form onSubmit={handleSubscribe}>
            <div 
              style={footerStyles.newsletterForm}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'}
            >
              <input 
                type="email" 
                placeholder='Enter your email' 
                style={footerStyles.emailInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                variant="dark" 
                style={footerStyles.subscribeButton}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                {subscribed ? '✓' : <i className="fa-solid fa-arrow-right"></i>}
              </Button>
            </div>
          </form>
          
          <h6 style={{ ...footerStyles.sectionTitle, fontSize: '0.95rem', marginBottom: '12px' }}>
            Follow Us
          </h6>
          <div style={footerStyles.socialContainer}>
            <Link 
              target='_blank' 
              to='https://www.instagram.com/' 
              style={{
                ...footerStyles.socialLink,
                backgroundColor: `${socialColors.instagram}15`,
                border: `1px solid ${socialColors.instagram}30`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = socialColors.instagram;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.querySelector('i').style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = `${socialColors.instagram}15`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.querySelector('i').style.color = socialColors.instagram;
              }}
            >
              <i 
                className="fa-brands fa-instagram" 
                style={{...footerStyles.socialIcon, color: socialColors.instagram}}
              ></i>
            </Link>
            
            <Link 
              target='_blank' 
              to='https://www.linkedin.com/' 
              style={{
                ...footerStyles.socialLink,
                backgroundColor: `${socialColors.linkedin}15`,
                border: `1px solid ${socialColors.linkedin}30`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = socialColors.linkedin;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.querySelector('i').style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = `${socialColors.linkedin}15`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.querySelector('i').style.color = socialColors.linkedin;
              }}
            >
              <i 
                className="fa-brands fa-linkedin" 
                style={{...footerStyles.socialIcon, color: socialColors.linkedin}}
              ></i>
            </Link>
            
            <Link 
              target='_blank' 
              to='https://facebook.com/' 
              style={{
                ...footerStyles.socialLink,
                backgroundColor: `${socialColors.facebook}15`,
                border: `1px solid ${socialColors.facebook}30`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = socialColors.facebook;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.querySelector('i').style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = `${socialColors.facebook}15`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.querySelector('i').style.color = socialColors.facebook;
              }}
            >
              <i 
                className="fa-brands fa-facebook" 
                style={{...footerStyles.socialIcon, color: socialColors.facebook}}
              ></i>
            </Link>
            
            <Link 
              target='_blank' 
              to='https://twitter.com/' 
              style={{
                ...footerStyles.socialLink,
                backgroundColor: `${socialColors.twitter}15`,
                border: `1px solid ${socialColors.twitter}30`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = socialColors.twitter;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.querySelector('i').style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = `${socialColors.twitter}15`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.querySelector('i').style.color = socialColors.twitter;
              }}
            >
              <i 
                className="fa-brands fa-x-twitter" 
                style={{...footerStyles.socialIcon, color: socialColors.twitter}}
              ></i>
            </Link> 
          </div>
        </div>
      </div>  
      
      <p style={footerStyles.copyright}>
        Copyright &copy; 2025 LOCKIN, Built with
        <span style={footerStyles.heart}>♥</span>
        using React and Node.js
      </p>
    </div>
  );
}

export default Footer;