import React, { useState } from 'react';
import { freeClasses } from '../data/freeClasses';
import { Link } from 'react-router-dom';

function FreeClasses() {
  const [activeCourse, setActiveCourse] = useState(null);

  return (
    <div className="fade-in">
      {/* Hero Banner */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1a56db 0%, #f97316 100%)', 
        color: '#fff', 
        padding: '60px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '36px', marginBottom: '15px' }}>FREE LEARNING ZONE</h1>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 400 }}>निःशुल्क पाठ्यक्रम</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', opacity: 0.95 }}>
          हमारा उद्देश्य: विद्यार्थियों को कंप्यूटर, ऑफिस टूल्स, इंटरनेट और आर्टिफिशियल इंटेलिजेंस की बुनियादी जानकारी सरल हिंदी में उपलब्ध कराना, ताकि वे डिजिटल दुनिया में आत्मविश्वास के साथ आगे बढ़ सकें।
        </p>
      </section>

      {/* Courses Grid */}
      <section className="section">
        <div className="section-header">
          <h2>सभी निःशुल्क कोर्स</h2>
          <p>कोई शुल्क नहीं, कोई छुपी हुई लागत नहीं - पूरी तरह मुफ्त</p>
        </div>

        <div className="course-grid">
          {freeClasses.map((cls) => (
            <div key={cls.id} className="class-card">
              <div className="class-card-image">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div className="play-overlay">
                  <div className="play-btn">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
                <span className="course-badge free">निःशुल्क</span>
              </div>
              <div className="class-card-body">
                <h3>{cls.title}</h3>
                {cls.titleHindi && <h4 style={{ fontSize: '14px', color: '#f97316', marginBottom: '8px', fontWeight: 500 }}>{cls.titleHindi}</h4>}
                <p>{cls.description}</p>
                <div className="course-meta">
                  <span><i className="fas fa-clock"></i> {cls.duration}</span>
                  <span><i className="fas fa-signal"></i> {cls.level}</span>
                  <span><i className="fas fa-language"></i> हिंदी</span>
                </div>
                <p style={{ fontSize: '13px', color: '#636e72', marginTop: '8px' }}>
                  <i className="fas fa-user"></i> {cls.instructor}
                </p>
                
                {/* View Details Button */}
                <button 
                  className="btn btn-orange view-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCourse(cls);
                  }}
                  style={{ 
                    width: '100%', 
                    marginTop: '15px', 
                    justifyContent: 'center',
                    padding: '12px 20px',
                    fontSize: '14px'
                  }}
                >
                  <i className="fas fa-eye"></i> विवरण देखें
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Detail Modal */}
      {activeCourse && (
        <div className="modal-overlay" onClick={() => setActiveCourse(null)}>
          <div className="modal course-detail-modal" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={() => setActiveCourse(null)}>
              <i className="fas fa-times"></i>
            </span>
            
            <div className="course-detail-header">
              <img 
                src={activeCourse.image} 
                alt={activeCourse.title} 
                style={{ objectFit: 'cover', width: '100%', height: '300px' }}
              />
              <div className="course-detail-info">
                <span className="course-badge free">निःशुल्क</span>
                <h1>{activeCourse.title}</h1>
                {activeCourse.titleHindi && <h2 style={{ color: '#f97316', fontSize: '22px', marginBottom: '15px' }}>{activeCourse.titleHindi}</h2>}
                <p style={{ color: '#64748b', fontSize: '16px', lineHeight: 1.7 }}>{activeCourse.description}</p>
                
                <div className="course-detail-meta" style={{ flexWrap: 'wrap', gap: '20px' }}>
                  <span><i className="fas fa-clock"></i> अवधि: {activeCourse.duration}</span>
                  <span><i className="fas fa-signal"></i> स्तर: {activeCourse.level}</span>
                  <span><i className="fas fa-language"></i> भाषा: हिंदी</span>
                  <span><i className="fas fa-user"></i> {activeCourse.instructor}</span>
                </div>

                <p style={{ marginTop: '20px', padding: '15px', background: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
                  <strong style={{ color: '#1a56db' }}>कोर्स का शुल्क: </strong>
                  <span style={{ color: '#00b894', fontSize: '18px', fontWeight: 700 }}>₹0 — निःशुल्क</span>
                </p>

                <Link to="/enroll" className="btn btn-orange" style={{ 
                  display: 'inline-flex', 
                  marginTop: '20px',
                  padding: '14px 32px', 
                  fontSize: '16px' 
                }}>
                  <i className="fas fa-user-graduate"></i> इस कोर्स के लिए नामांकन करें
                </Link>
              </div>
            </div>

            <div style={{ padding: '0 30px 30px' }}>
              {/* Syllabus */}
              <div className="course-detail-section" style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#1a56db', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-list"></i> इस कोर्स में क्या सीखेंगे?
                </h2>
                <ul style={{ columns: '2', columnGap: '40px', listStyle: 'none', padding: 0 }}>
                  {activeCourse.syllabus?.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', lineHeight: 1.6 }}>
                      <span style={{ position: 'absolute', left: 0, color: '#f97316' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Work */}
              <div className="course-detail-section" style={{ marginBottom: '30px', background: '#fef3e2', borderRadius: '10px', padding: '20px' }}>
                <h2 style={{ color: '#f97316', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-flask"></i> प्रायोगिक कार्य (Practical)
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {activeCourse.practical?.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', lineHeight: 1.6 }}>
                      <span style={{ position: 'absolute', left: 0, color: '#f97316' }}>▶</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience */}
              <div className="course-detail-section" style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#1a56db', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-users"></i> यह कोर्स किनके लिए उपयोगी है?
                </h2>
                <p style={{ color: '#64748b', lineHeight: 1.7 }}>{activeCourse.targetAudience}</p>
              </div>

              {/* Outcomes */}
              <div className="course-detail-section" style={{ background: '#e8f5e9', borderRadius: '10px', padding: '20px' }}>
                <h2 style={{ color: '#00b894', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-check-circle"></i> कोर्स पूरा करने के बाद
                </h2>
                <p style={{ color: '#2e7d32', lineHeight: 1.7 }}>{activeCourse.outcomes}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FreeClasses;