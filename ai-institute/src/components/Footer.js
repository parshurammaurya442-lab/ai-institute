import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><i className="fas fa-robot"></i> AI INSTITUTE</h3>
          <p>AI एवं डिजिटल स्किल्स सीखने के लिए आपका ऑनलाइन प्रशिक्षण केंद्र।</p>
          <div className="footer-contact">
            <i className="fas fa-phone-alt"></i>
            <span>9369150047</span>
          </div>
        </div>
        <div className="footer-section">
          <h3>महत्वपूर्ण लिंक</h3>
          <ul>
            <li><Link to="/courses"><i className="fas fa-chevron-right"></i> हमारे कोर्स</Link></li>
            <li><Link to="/enroll"><i className="fas fa-chevron-right"></i> नामांकन</Link></li>
            <li><Link to="/payment"><i className="fas fa-chevron-right"></i> भुगतान नीति</Link></li>
            <li><Link to="/refund-policy"><i className="fas fa-chevron-right"></i> रिफंड नीति</Link></li>
            <li><Link to="/privacy-policy"><i className="fas fa-chevron-right"></i> गोपनीयता नीति</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>कोर्स श्रेणियाँ</h3>
          <ul>
            <li><Link to="/courses">AI Prompt Writing</Link></li>
            <li><Link to="/courses">AI Video Creation</Link></li>
            <li><Link to="/courses">Video Editing</Link></li>
            <li><Link to="/courses">AI Website Creation</Link></li>
            <li><Link to="/courses">Graphic Designing</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>संपर्क करें</h3>
          <ul>
            <li><i className="fas fa-phone"></i> 9369150047</li>
            <li><i className="fas fa-envelope"></i> info@aiinstitute.com</li>
            <li><i className="fas fa-globe"></i> www.aiinstitute.com</li>
          </ul>
          <div style={{ marginTop: '15px', display: 'flex', gap: '12px', fontSize: '20px' }}>
            <a href="#"><i className="fab fa-youtube" style={{ color: '#ef4444' }}></i></a>
            <a href="#"><i className="fab fa-instagram" style={{ color: '#ec4899' }}></i></a>
            <a href="#"><i className="fab fa-facebook" style={{ color: '#3b82f6' }}></i></a>
            <a href="#"><i className="fab fa-telegram" style={{ color: '#06b6d4' }}></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 AI INSTITUTE. सर्वाधिकार सुरक्षित।</p>
      </div>
    </footer>
  );
}

export default Footer;
