import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ebooks } from '../data/ebooks';

function Ebooks() {
  const location = useLocation();
  const [enrolledEbooks, setEnrolledEbooks] = useState([]);
  const [activePDF, setActivePDF] = useState(null);

  // Check enrollment status from localStorage (simulating backend check)
  useEffect(() => {
    const enrolled = JSON.parse(localStorage.getItem('enrolledEbooks') || '[]');
    setEnrolledEbooks(enrolled);
  }, []);

  const isEnrolled = (ebookId) => enrolledEbooks.includes(ebookId);

  const handlePDFView = (ebook) => {
    if (ebook.requiresEnrollment && !isEnrolled(ebook.id)) {
      alert('कृपया पहले इस ई-बुक के लिए नामांकन करें। PDF केवल नामांकन के बाद ही खुलेगी।');
      return;
    }
    setActivePDF(ebook);
  };

  const handleEnroll = (ebookId) => {
    // Add to enrolled list
    const newEnrolled = [...enrolledEbooks, ebookId];
    setEnrolledEbooks(newEnrolled);
    localStorage.setItem('enrolledEbooks', JSON.stringify(newEnrolled));
    alert('नामांकन सफल! अब आप PDF देख सकते हैं।');
  };

  // Check if coming from enrollment success
  useEffect(() => {
    if (location.state?.ebookEnrolled) {
      handleEnroll(location.state.ebookEnrolled);
    }
  }, [location.state]);

  return (
    <div className="fade-in">
      <section className="section">
        <div className="section-header">
          <h1>E-Books Library</h1>
          <p>Comprehensive e-books written by industry experts</p>
        </div>

        <div className="ebook-grid">
          {ebooks.map((ebook) => {
            const enrolled = isEnrolled(ebook.id);
            return (
              <div key={ebook.id} className="ebook-card">
                <div className="ebook-image-wrapper">
                  <img 
                    src={ebook.image} 
                    alt={ebook.title} 
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <span className="ebook-badge">{ebook.category}</span>
                  {enrolled && <span className="ebook-badge enrolled"><i className="fas fa-check"></i> Enrolled</span>}
                </div>
                <div className="ebook-body">
                  <h3>{ebook.title}</h3>
                  {ebook.titleHindi && <h4 style={{ fontSize: '14px', color: '#f97316', marginBottom: '8px', fontWeight: 500 }}>{ebook.titleHindi}</h4>}
                  <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '10px' }}>{ebook.description}</p>
                  {ebook.descriptionHindi && <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '10px' }}>{ebook.descriptionHindi}</p>}
                  
                  <div className="ebook-meta">
                    <span><i className="fas fa-file-pdf"></i> {ebook.pages} pages</span>
                    <span><i className="fas fa-user"></i> {ebook.author}</span>
                    <span><i className="fas fa-language"></i> {ebook.language}</span>
                  </div>

                  <div className="ebook-price">₹{ebook.price}</div>

                  <div className="ebook-actions" style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {enrolled ? (
                      <button 
                        className="btn btn-primary" 
                        onClick={() => handlePDFView(ebook)}
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <i className="fas fa-file-pdf"></i> PDF पढ़ें
                      </button>
                    ) : (
                      <Link 
                        to={`/enroll?ebook=${ebook.id}`} 
                        className="btn btn-orange" 
                        style={{ width: '100%', justifyContent: 'center', padding: '10px 20px', fontSize: '13px' }}
                      >
                        <i className="fas fa-user-graduate"></i> नामांकन करें (₹{ebook.price})
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {activePDF && (
        <div className="modal-overlay" onClick={() => setActivePDF(null)}>
          <div className="modal pdf-modal" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={() => setActivePDF(null)}>
              <i className="fas fa-times"></i>
            </span>
            <div className="pdf-header">
              <img src={activePDF.image} alt={activePDF.title} />
              <div>
                <h2>{activePDF.title}</h2>
                {activePDF.titleHindi && <h3 style={{ color: '#f97316', fontSize: '18px', fontWeight: 500 }}>{activePDF.titleHindi}</h3>}
                <p style={{ color: '#64748b', marginTop: '5px' }}>
                  <i className="fas fa-file-pdf"></i> {activePDF.pages} pages | By {activePDF.author}
                </p>
              </div>
            </div>
            <div className="pdf-viewer" style={{ width: '100%', height: '70vh', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe 
                src={activePDF.pdfUrl} 
                style={{ width: '100%', height: '100%', border: 'none' }}
                title={activePDF.title}
              ></iframe>
            </div>
            <div style={{ marginTop: '15px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
              <i className="fas fa-lock"></i> यह PDF सुरक्षित है। डाउनलोड और प्रिंटिंग प्रतिबंधित है।
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ebooks;