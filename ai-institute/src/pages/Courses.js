import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

function Courses() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState('all');

  const categories = ['All', ...new Set(courses.map((c) => c.category))];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || course.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || course.category === category;
      const matchesPrice = priceFilter === 'all' || (priceFilter === 'free' && course.priceType === 'free') || (priceFilter === 'paid' && course.priceType === 'paid');
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, priceFilter]);

  return (
    <div className="fade-in">
      <section className="section">
        <div className="section-header">
          <h1>All Courses</h1>
          <p>Explore our comprehensive AI courses designed for all skill levels</p>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="button"><i className="fas fa-search"></i></button>
        </div>

        <div className="filter-tabs">
          {categories.map((cat) => (
            <button key={cat} className={`filter-tab ${category === cat ? 'active' : ''}`} onClick={() => setCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="filter-tabs">
          <button className={`filter-tab ${priceFilter === 'all' ? 'active' : ''}`} onClick={() => setPriceFilter('all')}>All Prices</button>
          <button className={`filter-tab ${priceFilter === 'free' ? 'active' : ''}`} onClick={() => setPriceFilter('free')}>Free</button>
          <button className={`filter-tab ${priceFilter === 'paid' ? 'active' : ''}`} onClick={() => setPriceFilter('paid')}>Paid</button>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="empty-state">
            <i className="fas fa-search"></i>
            <h3>No courses found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="course-grid">
            {filteredCourses.map((course) => (
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
                    <span><i className="fas fa-users"></i> {course.students.toLocaleString()}</span>
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
        )}
      </section>
    </div>
  );
}

export default Courses;
