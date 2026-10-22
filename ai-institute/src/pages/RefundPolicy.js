import React from 'react';

function RefundPolicy() {
  return (
    <div className="fade-in">
      <section className="section">
        <div className="section-header">
          <h1>रिफंड नीति</h1>
          <p>AI INSTITUTE की रिफंड नीति एवं शर्तें</p>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-undo"></i> रिफंड नीति</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> कोर्स एक्सेस मिलने के बाद <strong>7 दिनों के भीतर</strong> रिफंड के लिए अर्जी दी जा सकती है।</li>
            <li><i className="fas fa-check-circle"></i> रिफंड अर्जी देने के लिए संपर्क करें: <strong>9369150047</strong></li>
            <li><i className="fas fa-check-circle"></i> रिफंड प्रक्रिया में <strong>5-7 कार्यदिवस</strong> लग सकते हैं।</li>
            <li><i className="fas fa-check-circle"></i> रिफंड मूल भुगतान माध्यम में ही वापस किया जाएगा।</li>
          </ul>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-times-circle"></i> रिफंड की अस्वीकृति</h2>
          <ul>
            <li><i className="fas fa-times"></i> कोर्स का <strong>50% से अधिक</strong> content देखने के बाद रिफंड नहीं होगा।</li>
            <li><i className="fas fa-times"></i> कोर्स एक्सेस की <strong>समाप्ति तिथि</strong> के बाद रिफंड नहीं होगा।</li>
            <li><i className="fas fa-times"></i> गलत जानकारी देने पर नामांकन रद्द हो सकता है और रिफंड नहीं होगा।</li>
          </ul>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-envelope"></i> रिफंड के लिए संपर्क करें</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: '#eff6ff', borderRadius: '10px' }}>
            <i className="fas fa-phone-alt" style={{ fontSize: '32px', color: '#1a56db' }}></i>
            <div>
              <h3 style={{ color: '#1a56db' }}>9369150047</h3>
              <p style={{ color: '#64748b', fontSize: '14px' }}>सहायता के लिए कॉल करें</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RefundPolicy;
