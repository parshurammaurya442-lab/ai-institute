import React from 'react';

function CourseRules() {
  return (
    <div className="fade-in">
      <section className="section">
        <div className="section-header">
          <h1>कोर्स एवं नियम</h1>
          <p>AI INSTITUTE के सभी कोर्सों के लिए सामान्य नियम व शर्तें</p>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-book"></i> सामान्य नियम</h2>
          <ul>
            <li><strong>शिक्षण माध्यम:</strong> रिकॉर्डेड वीडियो कोर्स।</li>
            <li><strong>कोर्स की अवधि:</strong> 1 महीना।</li>
            <li><strong>एक्सेस अवधि:</strong> 6 महीने।</li>
            <li><strong>प्रमाणपत्र:</strong> कोर्स पूरा करने पर प्रमाणपत्र उपलब्ध नहीं है।</li>
            <li><strong>फीस:</strong> प्रत्येक कोर्स की फीस अलग-अलग है, जो कोर्स पेज पर दी गई है।</li>
            <li><strong>टूल्स एवं अतिरिक्त खर्च:</strong> संबंधित कोर्स के लिए लागू होने वाली अतिरिक्त लागत की जानकारी नामांकन से पहले दी जाएगी।</li>
          </ul>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-graduation-cap"></i> कोर्स सूची एवं फीस</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
              <thead>
                <tr style={{ background: '#1a56db', color: '#fff' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>कोर्स का नाम</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>माध्यम</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>अवधि</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>एक्सेस</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>फीस</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#fff' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>AI Prompt Writing Mastery</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>रिकॉर्डेड</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>1 महीना</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>6 महीने</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0', color: '#f97316', fontWeight: 700 }}>₹999</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>AI Video Creation Mastery</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>रिकॉर्डेड</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>1 महीना</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>6 महीने</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0', color: '#f97316', fontWeight: 700 }}>₹1,499</td>
                </tr>
                <tr style={{ background: '#fff' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>Professional Video Editing</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>रिकॉर्डेड</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>1 महीना</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>6 महीने</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0', color: '#f97316', fontWeight: 700 }}>₹1,999</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>AI Website Creation Mastery</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>रिकॉर्डेड</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>1 महीना</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>6 महीने</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0', color: '#f97316', fontWeight: 700 }}>₹9,999</td>
                </tr>
                <tr style={{ background: '#fff' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>AI Graphic Designing Mastery</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>रिकॉर्डेड</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>1 महीना</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>6 महीने</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0', color: '#f97316', fontWeight: 700 }}>₹1,999</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>YouTube Mastery Program</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>रिकॉर्डेड</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>1 महीना</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>6 महीने</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e2e8f0', color: '#f97316', fontWeight: 700 }}>₹1,599</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-credit-card"></i> भुगतान की जानकारी</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> <strong>UPI / QR कोड भुगतान</strong> — सभी UPI apps से भुगतान कर सकते हैं।</li>
            <li><i className="fas fa-check-circle"></i> भुगतान करने से पहले कोर्स का नाम और सही फीस जाँच लें।</li>
            <li><i className="fas fa-check-circle"></i> भुगतान की पुष्टि तथा कोर्स एक्सेस देने की प्रक्रिया शीघ्र ही शुरू होगी।</li>
          </ul>
        </div>

        <div className="rules-section">
          <h2><i className="fas fa-headset"></i> संपर्क एवं सहायता</h2>
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

export default CourseRules;
