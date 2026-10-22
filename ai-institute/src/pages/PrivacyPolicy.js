import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="fade-in">
      <section className="section">
        <div className="section-header">
          <h1>गोपनीयता नीति</h1>
          <p>AI INSTITUTE की गोपनीयता नीति</p>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-shield-alt"></i> जानकारी का संग्रह</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> हम आपका नाम, मोबाइल नंबर और ईमेल संग्रह करते हैं।</li>
            <li><i className="fas fa-check-circle"></i> भुगतान की जानकारी सुरक्षित रूप से संग्रह की जाती है।</li>
            <li><i className="fas fa-check-circle"></i> हम आपकी जानकारी किसी तीसरे पक्ष के साथ साझा नहीं करते हैं।</li>
          </ul>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-lock"></i> जानकारी की सुरक्षा</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> हम आपकी व्यक्तिगत जानकारी को एन्क्रिप्ट करके सुरक्षित रखते हैं।</li>
            <li><i className="fas fa-check-circle"></i> हमारे सर्वर सुरक्षित हैं और नियमित अपडेट होते हैं।</li>
            <li><i className="fas fa-check-circle"></i> कोई भी अधिकृत व्यक्ति के बिना आपकी जानकारी को एक्सेस नहीं किया जा सकता है।</li>
          </ul>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-cookie-bite"></i> कुकीज़</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> हम वेबसाइट के अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग करते हैं।</li>
            <li><i className="fas fa-check-circle"></i> आप कुकीज़ को अपने ब्राउज़र से नियंत्रित कर सकते हैं।</li>
          </ul>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-envelope"></i> संपर्क करें</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: '#eff6ff', borderRadius: '10px' }}>
            <i className="fas fa-phone-alt" style={{ fontSize: '32px', color: '#1a56db' }}></i>
            <div>
              <h3 style={{ color: '#1a56db' }}>9369150047</h3>
              <p style={{ color: '#64748b', fontSize: '14px' }}>गोपनीयता संबंधी किसी भी प्रश्न के लिए संपर्क करें</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
