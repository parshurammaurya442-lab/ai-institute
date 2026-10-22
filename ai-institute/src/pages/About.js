import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="fade-in">
      <section className="section">
        <div className="section-header">
          <h1>About Us</h1>
          <p>AI Institute के बारे में जानें</p>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-graduation-cap"></i> हमारा मिशन</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
            AI Institute का उद्देश्य है कि हर कोई भी आत्मविश्वास के साथ सीख सके। हम कंप्यूटर, ऑफिस टूल्स, इंटरनेट और आर्टिफिशियल इंटेलिजेंस की बुनियादी जानकारी सरल हिंदी में पढ़ाते हैं।
          </p>
        </div>

        <div className="rules-section" style={{ textAlign: 'center', background: '#eff6ff', border: '2px solid #bfdbfe' }}>
          <h2><i className="fas fa-user-tie"></i> हमारे Founder</h2>
          <div style={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '50%', 
            margin: '20px auto', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden',
            border: '4px solid #1a56db',
            boxShadow: '0 8px 25px rgba(26, 86, 219, 0.3)'
          }}>
            <img src="/image/PM SIR.jpeg" alt="Parshuram Maurya - Founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ color: '#1a56db', fontSize: '24px', marginBottom: '10px' }}>Parshuram Maurya</h3>
          <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '20px' }}>
            AI Institute के Founder और Chief Mentor। उनका लक्ष्य है कि हर कोई भी आत्मविश्वास के साथ सीख सके — चाहे कोई भी उम्र का हो या किसी भी बैकग्राउंड से आया हो।
          </p>
          <p style={{ color: '#64748b', fontSize: '14px', fontStyle: 'italic' }}>
            "सीखना कोई जगह नहीं चुनता — बस आत्मविश्वास चाहिए।"
          </p>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-book"></i> हम क्या पढ़ाते हैं</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> <strong>AI और Machine Learning</strong> - Prompt Engineering, AI Tools, Generative AI</li>
            <li><i className="fas fa-check-circle"></i> <strong>Graphic Designing</strong> - Posters, Banners, Social Media Designs</li>
            <li><i className="fas fa-check-circle"></i> <strong>Video Creation और Editing</strong> - AI से वीडियो बनाना और एडिट करना</li>
            <li><i className="fas fa-check-circle"></i> <strong>Basic Computer Skills</strong> - MS Word, Excel, PowerPoint, Internet</li>
            <li><i className="fas fa-check-circle"></i> <strong>YouTube और Content Creation</strong> - चैनल बनाना और बढ़ाना</li>
          </ul>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-star"></i> हमारी विशेषताएँ</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> सरल हिंदी में पढ़ाई</li>
            <li><i className="fas fa-check-circle"></i> Practical projects और exercises</li>
            <li><i className="fas fa-check-circle"></i> Recorded video lectures - 6 महीने access</li>
            <li><i className="fas fa-check-circle"></i> Free courses भी उपलब्ध</li>
            <li><i className="fas fa-check-circle"></i> प्रमाणपत्र - कोर्स पूरा करने के बाद प्रमाणपत्र</li>
          </ul>
        </div>

        <div className="rules-section" style={{ textAlign: 'center' }}>
          <h2><i className="fas fa-phone-alt"></i> संपर्क करें</h2>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>WhatsApp: <strong>9369150047</strong></p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/courses" className="btn btn-primary">Courses देखें</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Page</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;