import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { freeClasses } from '../data/freeClasses';

function Home() {
  const featuredCourses = courses.slice(0, 3);
  const featuredClasses = freeClasses.slice(0, 3);

  return (
    <div className="fade-in">
      {/* Hero Section with Banner Image */}
      <section className="hero" style={{ 
        background: 'linear-gradient(rgba(26, 86, 219, 0.45), rgba(26, 86, 219, 0.55)), url("/image/AI Institute Mastery Program Banner.png") center/cover no-repeat',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1>Master Artificial Intelligence</h1>
          <p>Industry-leading courses, hands-on projects, and expert mentorship to launch your AI career.</p>
          <Link to="/courses" className="btn btn-outline">Explore Courses</Link>
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>50K+</h3>
              <p>Students Enrolled</p>
            </div>
            <div className="hero-stat">
              <h3>100+</h3>
              <p>Expert Instructors</p>
            </div>
            <div className="hero-stat">
              <h3>4.8</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="section-header">
          <h2>Why Choose AI Institute?</h2>
          <p>We provide the best learning experience for AI enthusiasts</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-chalkboard-teacher"></i>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with years of experience in AI and machine learning.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Hands-On Projects</h3>
            <p>Build real-world AI projects that you can showcase in your portfolio.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-certificate"></i>
            <h3>Certification</h3>
            <p>Get recognized certificates upon course completion to boost your resume.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-users"></i>
            <h3>Community Support</h3>
            <p>Join a vibrant community of learners and get help whenever you need it.</p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section" style={{ background: '#fff', maxWidth: '100%' }}>
        <div className="section-header">
          <h2>Featured Courses</h2>
          <p>Start learning with our most popular courses</p>
        </div>
        <div className="course-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {featuredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-card-image">
                <img src={course.image} alt={course.title} />
                <span className="course-badge">{course.category}</span>
              </div>
              <div className="course-card-body">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span><i className="fas fa-clock"></i> {course.duration}</span>
                  <span><i className="fas fa-signal"></i> {course.level}</span>
                  <span><i className="fas fa-star" style={{ color: '#fdcb6e' }}></i> {course.rating}</span>
                </div>
                <div className="course-footer">
                  <span className="course-price">₹{course.price}</span>
                  <Link to={`/course/${course.id}`} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
                    <i className="fas fa-info-circle"></i> View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/courses" className="btn btn-secondary">View All Courses</Link>
        </div>
      </section>

      {/* Free Classes */}
      <section className="section">
        <div className="section-header">
          <h2>Free Classes</h2>
          <p>Start learning for free with our beginner-friendly classes</p>
        </div>
        <div className="course-grid">
          {featuredClasses.map((cls) => (
            <div key={cls.id} className="class-card">
              <div className="class-card-image">
                <img src={cls.image} alt={cls.title} />
                <div className="play-overlay">
                  <div className="play-btn">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
              </div>
              <div className="class-card-body">
                <h3>{cls.title}</h3>
                <p>{cls.description}</p>
                <div className="course-meta">
                  <span><i className="fas fa-clock"></i> {cls.duration}</span>
                  <span><i className="fas fa-signal"></i> {cls.level}</span>
                </div>
                <span className="course-badge free">FREE</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/free-classes" className="btn btn-secondary">View All Free Classes</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: '#fff', maxWidth: '100%' }}>
        <div className="section-header">
          <h2>What Our Students Say</h2>
          <p>Real reviews from our successful students</p>
        </div>
        <div className="testimonial-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Student" />
            <h4>Jessica Miller</h4>
            <span>Software Engineer at Google</span>
            <p>"AI Institute transformed my career. The hands-on projects and expert mentorship helped me land my dream job."</p>
          </div>
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Student" />
            <h4>David Kim</h4>
            <span>Data Scientist at Amazon</span>
            <p>"The course content is top-notch. I went from knowing nothing about AI to building production-ready models."</p>
          </div>
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" alt="Student" />
            <h4>Amanda Chen</h4>
            <span>AI Researcher at MIT</span>
            <p>"Best investment I've ever made. The instructors are incredibly knowledgeable and always available to help."</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest AI trends, free resources, and exclusive offers.</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
