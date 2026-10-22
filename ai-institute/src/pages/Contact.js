import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', course: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'नाम आवश्यक है';
    if (!form.mobile.trim()) newErrors.mobile = 'मोबाइल नंबर आवश्यक है';
    else if (!/^\d{10}$/.test(form.mobile)) newErrors.mobile = 'सही 10 अंकों का नंबर डालें';
    if (!form.message.trim()) newErrors.message = 'संदेश आवश्यक है';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: '', mobile: '', email: '', course: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="fade-in">
      <section className="section">
        <div className="section-header">
          <h1>Contact Us</h1>
          <p>हमसे संपर्क करें — हम आपकी मदद के लिए यहाँ हैं</p>
        </div>

        {submitted && (
          <div style={{ padding: '20px', background: '#dcfce7', border: '2px solid #16a34a', borderRadius: '12px', marginBottom: '30px', textAlign: 'center' }}>
            <i className="fas fa-check-circle" style={{ fontSize: '32px', color: '#16a34a', marginBottom: '10px' }}></i>
            <h3 style={{ color: '#166534' }}>धन्यवाद! आपका संदेश भेज दिया गया है।</h3>
            <p style={{ color: '#166534' }}>हम शीघ्र ही आपसे संपर्क करेंगे।</p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {/* Contact Info */}
          <div className="rules-section">
            <h2><i className="fas fa-info-circle"></i> संपर्क जानकारी</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-phone-alt" style={{ fontSize: '20px', color: '#1a56db' }}></i>
                </div>
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <p style={{ color: '#64748b' }}>9369150047</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-clock" style={{ fontSize: '20px', color: '#1a56db' }}></i>
                </div>
                <div>
                  <h4>समय</h4>
                  <p style={{ color: '#64748b' }}>Mon-Sat: 9am - 7pm</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-map-marker-alt" style={{ fontSize: '20px', color: '#1a56db' }}></i>
                </div>
                <div>
                  <h4>कार्यालय</h4>
                  <p style={{ color: '#64748b' }}>Mourya Online Center, Shantinagar, Maharajganj</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-envelope" style={{ fontSize: '20px', color: '#1a56db' }}></i>
                </div>
                <div>
                  <h4>ईमेल</h4>
                  <p style={{ color: '#64748b' }}>info@aiinstitute.com</p>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/919369150047"
              target="_blank"
              rel="noreferrer"
              className="btn btn-orange"
              style={{ marginTop: '25px', display: 'inline-flex' }}
            >
              <i className="fab fa-whatsapp"></i> WhatsApp करें
            </a>
          </div>

          {/* Contact Form */}
          <div className="rules-section">
            <h2><i className="fas fa-envelope"></i> संदेश भेजें</h2>
            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
              <div className="form-group">
                <label>नाम *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="आपका नाम" />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '13px' }}>{errors.name}</span>}
              </div>
              <div className="form-group">
                <label>मोबाइल नंबर *</label>
                <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="10 अंकों का नंबर" maxLength="10" />
                {errors.mobile && <span style={{ color: '#ef4444', fontSize: '13px' }}>{errors.mobile}</span>}
              </div>
              <div className="form-group">
                <label>ईमेल</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="ईमेल पता" />
              </div>
              <div className="form-group">
                <label>कोर्स (वैकल्पिक)</label>
                <select name="course" value={form.course} onChange={handleChange}>
                  <option value="">-- कोर्स चुनें --</option>
                  <option value="ai-prompt">AI Prompt Writing Mastery</option>
                  <option value="ai-video">AI Video Creation Mastery</option>
                  <option value="video-editing">Professional Video Editing</option>
                  <option value="ai-website">AI Website Creation Mastery</option>
                  <option value="graphic-design">Graphic Designing Mastery</option>
                  <option value="youtube">YouTube Mastery Program</option>
                  <option value="basic-computer">Basic Computer Course</option>
                  <option value="ms-word">MS Word Basics</option>
                  <option value="ms-excel">MS Excel Basics</option>
                  <option value="ebook">Graphic Designing eBook</option>
                </select>
              </div>
              <div className="form-group">
                <label>संदेश *</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="आपका संदेश लिखें..." rows="4"></textarea>
                {errors.message && <span style={{ color: '#ef4444', fontSize: '13px' }}>{errors.message}</span>}
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> संदेश भेजें
              </button>
            </form>
          </div>
        </div>

        <div className="rules-section" style={{ marginTop: '30px', textAlign: 'center' }}>
          <h2><i className="fas fa-question-circle"></i> अक्सर पूछे जाने वाले प्रश्न</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '20px', textAlign: 'left' }}>
            <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '8px' }}>
              <h4>कोर्स की अवधि क्या है?</h4>
              <p style={{ color: '#64748b', fontSize: '14px' }}>हर कोर्स 1 महीने का है और 6 महीने का एक्सेस मिलता है।</p>
            </div>
            <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '8px' }}>
              <h4>क्या सर्टिफिकेट मिलेगा?</h4>
              <p style={{ color: '#64748b', fontSize: '14px' }}>हाँ, कोर्स पूरा करने के बाद प्रमाणपत्र मिलता है।</p>
            </div>
            <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '8px' }}>
              <h4>कैसे भुगतान करें?</h4>
              <p style={{ color: '#64748b', fontSize: '14px' }}>UPI, QR कोड या Bank Transfer से भुगतान कर सकते हैं।</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <a href="/enroll" className="btn btn-orange">नामांकन करें</a>
        </div>
      </section>
    </div>
  );
}

export default Contact;