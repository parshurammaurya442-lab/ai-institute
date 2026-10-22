import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="empty-state fade-in" style={{ paddingTop: '100px' }}>
      <h1 style={{ fontSize: '72px', color: '#6c5ce7' }}>404</h1>
      <h3>Page Not Found</h3>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>
        <i className="fas fa-home"></i> Go Home
      </Link>
    </div>
  );
}

export default NotFound;
