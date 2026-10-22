import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';

function CourseDetail() {
  const { id } = useParams();
  const [stickyVisible, setStickyVisible] = useState(false);

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="empty-state">
        <i className="fas fa-exclamation-triangle"></i>
        <h3>Course Not Found</h3>
        <p>The course you're looking for doesn't exist.</p>
      </div>
    );
  }

  const curriculum = [
    { week: 'Week 1-2', title: 'Introduction & Fundamentals', topics: ['AI Overview', 'Python Basics', 'Math for AI'] },
    { week: 'Week 3-5', title: 'Core Concepts', topics: ['Machine Learning Algorithms', 'Data Preprocessing', 'Model Evaluation'] },
    { week: 'Week 6-8', title: 'Advanced Topics', topics: ['Deep Learning', 'Neural Networks', 'Real-world Projects'] },
    { week: 'Week 9-10', title: 'Capstone Project', topics: ['End-to-End Project', 'Deployment', 'Portfolio Review'] }
  ];

  // Sticky button visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="course-detail fade-in">
      {/* Sticky Enroll Button */}
      {stickyVisible && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          animation: 'slideUp 0.3s ease-out'
        }}>
          <Link to={`/enroll?course=${course.id}`} className="btn btn-orange" style={{ 
            padding: '14px 28px', 
            fontSize: '16px',
            boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <i className="fas fa-user-graduate"></i> Enroll Now — ₹{course.price}
          </Link>
        </div>
      )}

      <div className="course-detail-header">
        <img src={course.image} alt={course.title} />
        <div className="course-detail-info">
          <span className="course-badge">{course.category}</span>
          <h1>{course.title}</h1>
          <p style={{ color: '#64748b', fontSize: '16px' }}>{course.description}</p>
          <div className="course-detail-meta">
            <span><i className="fas fa-clock"></i> {course.duration}</span>
            <span><i className="fas fa-signal"></i> {course.level}</span>
            <span><i className="fas fa-users"></i> {course.students.toLocaleString()} students</span>
            <span><i className="fas fa-star" style={{ color: '#f59e0b' }}></i> {course.rating} rating</span>
          </div>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          
          {/* Main Enroll Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '25px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
            <span className="course-price" style={{ fontSize: '32px' }}>₹{course.price}</span>
            <Link to={`/enroll?course=${course.id}`} className="btn btn-orange" style={{ 
              padding: '16px 32px', 
              fontSize: '17px',
              fontWeight: 700
            }}>
              <i className="fas fa-user-graduate"></i> Enroll Now
            </Link>
          </div>

          {/* Course Highlights */}
          <div style={{ marginTop: '25px', padding: '20px', background: '#f8fafc', borderRadius: '10px' }}>
            <h3 style={{ marginBottom: '15px', color: '#1a56db' }}>Course Highlights</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-check-circle" style={{ color: '#10b981' }}></i>
                <span>Recorded Video Lectures</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-check-circle" style={{ color: '#10b981' }}></i>
                <span>6 Months Access</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-check-circle" style={{ color: '#10b981' }}></i>
                <span>Hindi Language</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-check-circle" style={{ color: '#10b981' }}></i>
                <span>Practical Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="course-detail-section">
        <h2>What You'll Learn</h2>
        <ul>
          <li>Master fundamental and advanced AI concepts</li>
          <li>Build real-world machine learning projects</li>
          <li>Understand neural networks and deep learning</li>
          <li>Deploy AI models to production</li>
          <li>Prepare for top AI job interviews</li>
        </ul>
      </div>

      <div className="course-detail-section">
        <h2>Course Curriculum</h2>
        {curriculum.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: index < curriculum.length - 1 ? '1px solid #eee' : 'none' }}>
            <h3 style={{ color: '#1e293b', marginBottom: '8px' }}>{item.week}: {item.title}</h3>
            <ul style={{ paddingLeft: '20px', color: '#64748b' }}>
              {item.topics.map((topic, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="course-detail-section">
        <h2>Requirements</h2>
        <ul>
          <li>Basic programming knowledge (any language)</li>
          <li>Computer with internet connection</li>
          <li>No prior AI/ML experience required</li>
        </ul>
      </div>

      {/* Bottom Enroll CTA */}
      <div style={{ 
        marginTop: '40px', 
        padding: '30px', 
        background: 'linear-gradient(135deg, #1a56db 0%, #3b82f6 100%)', 
        borderRadius: '12px', 
        textAlign: 'center',
        color: '#fff'
      }}>
        <h2 style={{ marginBottom: '10px' }}>Ready to Start Learning?</h2>
        <p style={{ marginBottom: '20px', opacity: 0.9 }}>Join {course.students.toLocaleString()}+ students who have already enrolled</p>
        <Link to={`/enroll?course=${course.id}`} className="btn" style={{ 
          background: '#f97316', 
          color: '#fff', 
          padding: '16px 36px', 
          fontSize: '18px',
          fontWeight: 700
        }}>
          <i className="fas fa-rocket"></i> Enroll Now — ₹{course.price}
        </Link>
      </div>
    </div>
  );
}

export default CourseDetail;