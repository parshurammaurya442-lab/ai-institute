import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, toggleLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('ai_institute_theme') === 'dark';
  });
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileView, setMobileView] = useState(() => {
    return localStorage.getItem('ai_institute_mobile_view') === 'true';
  });
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([]);
  const searchRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // Theme effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
    localStorage.setItem('ai_institute_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Mobile view preview effect
  useEffect(() => {
    if (mobileView) {
      document.documentElement.classList.add('mobile-preview');
    } else {
      document.documentElement.classList.remove('mobile-preview');
    }
    localStorage.setItem('ai_institute_mobile_view', mobileView ? 'true' : 'false');
  }, [mobileView]);

  // Load notifications
  useEffect(() => {
    setNotifications([
      { id: 1, text: 'New Course: AI Prompt Writing Mastery - ₹999', time: '2 hours ago', read: false },
      { id: 2, text: 'Graphic Designing eBook now available at ₹99', time: '1 day ago', read: false },
      { id: 3, text: 'Free Classes: 6 new courses added!', time: '3 days ago', read: true },
    ]);
  }, []);

  // Close search on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;
  const markAllRead = () => setNotifications(notifications.map(n => ({ ...n, read: true })));
  const toggleTheme = () => setDarkMode(!darkMode);

  // Sample search results (course titles)
  const searchResults = searchQuery.trim().length > 0
    ? [
        { title: 'AI Prompt Writing Mastery', price: '₹999', type: 'course' },
        { title: 'Graphic Designing Mastery', price: '₹1,999', type: 'course' },
        { title: 'AI Video Creation Mastery', price: '₹1,499', type: 'course' },
        { title: 'Graphic Designing eBook', price: '₹99', type: 'ebook' },
      ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="header">
      <div className="header-top">Limited Time Offer: Get 30% OFF on all courses! Use Code: AI30</div>
      <div className="header-main">
        <Link to="/" className="logo">
          <img src="/image/logo.png" alt="AI Institute Logo" style={{ height: '48px', width: 'auto' }} />
          <span>AI INSTITUTE</span>
        </Link>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>{t.navHome}</Link>
          <Link to="/courses" className={`nav-link ${isActive('/courses') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>{t.navCourses}</Link>
          <Link to="/free-classes" className={`nav-link ${isActive('/free-classes') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>{t.navFree}</Link>
          <Link to="/ebooks" className={`nav-link ${isActive('/ebooks') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>{t.navEbooks}</Link>
          <Link to="/tests" className={`nav-link ${isActive('/tests') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>{t.navTests}</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>{t.navAbout}</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>{t.navContact}</Link>
        </nav>
        <div className="header-actions">
          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme} title={darkMode ? 'Light Mode' : 'Dark Mode'}>
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          {/* Translator */}
          <button className="translator-btn" onClick={toggleLang} title="Translate (हिंदी / English)">
            <i className="fas fa-language"></i>
            <span>{lang === 'hi' ? 'EN' : 'हिं'}</span>
          </button>

          {/* Notification Bell */}
          <div className="notification-wrapper">
            <button className="notification-btn" onClick={() => setShowNotifications(!showNotifications)} title="Notifications">
              <i className="fas fa-bell"></i>
              {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
            </button>
            {showNotifications && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h4>{t.notifications}</h4>
                  {unreadCount > 0 && <button className="mark-read-btn" onClick={markAllRead}>{t.markRead}</button>}
                </div>
                <div className="notification-list">
                  {notifications.map(notif => (
                    <div key={notif.id} className={`notification-item ${notif.read ? '' : 'unread'}`}>
                      <p>{notif.text}</p>
                      <span className="notification-time">{notif.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="search-wrapper" ref={searchRef}>
            <button className="search-toggle" onClick={() => setShowSearch(!showSearch)} title="Search">
              <i className="fas fa-search"></i>
            </button>
            {showSearch && (
              <div className="search-dropdown">
                <form onSubmit={handleSearchSubmit} className="search-form">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    autoFocus
                  />
                  <button type="submit"><i className="fas fa-search"></i></button>
                </form>
                {searchQuery.trim().length > 0 && (
                  <div className="search-results">
                    {searchResults.length > 0 ? (
                      searchResults.map((item, idx) => (
                        <button
                          key={idx}
                          className="search-result-item"
                          onClick={() => {
                            navigate(item.type === 'ebook' ? '/ebooks' : '/courses');
                            setShowSearch(false);
                            setSearchQuery('');
                          }}
                        >
                          <span className="result-title">{item.title}</span>
                          <span className="result-price">{item.price}</span>
                        </button>
                      ))
                    ) : (
                      <p className="no-results">{t.notFound}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile/Desktop View Switch */}
          <button
            className="view-switch-btn"
            onClick={() => setMobileView(!mobileView)}
            title={mobileView ? 'Desktop Version' : 'Mobile Version'}
          >
            <i className={`fas ${mobileView ? 'fa-desktop' : 'fa-mobile-alt'}`}></i>
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;