import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, course, ebook } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [copied, setCopied] = useState(false);

  const selectedItem = course || ebook;

  if (!formData || !selectedItem) {
    return (
      <div className="empty-state">
        <i className="fas fa-exclamation-triangle"></i>
        <h3>कोई जानकारी नहीं मिली</h3>
        <p>कृपया पहले नामांकन फॉर्म भरें</p>
        <button className="btn btn-primary" onClick={() => navigate('/enroll')} style={{ marginTop: '15px' }}>
          नामांकन पेज पर जाएं
        </button>
      </div>
    );
  }

  const instituteUPI = "9369150047-3@ybl";

  const copyUPI = () => {
    navigator.clipboard.writeText(instituteUPI);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fade-in">
      <div className="payment-section">
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#1a56db' }}>भुगतान पृष्ठ</h1>
          <p style={{ color: '#64748b' }}>AI INSTITUTE में {selectedItem.title} के लिए भुगतान करें</p>
        </div>

        {/* Order Summary */}
        <div className="enroll-summary" style={{ marginBottom: '25px' }}>
          <h3>ऑर्डर सारांश</h3>
          <div className="enroll-summary-row">
            <span>विद्यार्थी का नाम</span>
            <strong>{formData.name}</strong>
          </div>
          <div className="enroll-summary-row">
            <span>मोबाइल नंबर</span>
            <span>{formData.mobile}</span>
          </div>
          <div className="enroll-summary-row">
            <span>{course ? 'कोर्स' : 'ई-बुक'}</span>
            <strong>{selectedItem.title}</strong>
          </div>
          <div className="enroll-summary-row total">
            <span>राशि</span>
            <span>₹{selectedItem.price}</span>
          </div>
        </div>

        {/* Payment Method */}
        <h2 style={{ marginBottom: '15px', fontSize: '20px', color: '#1a56db' }}>भुगतान का माध्यम</h2>
        <div className="payment-methods">
          <div className={`payment-method ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
            <i className="fas fa-qrcode"></i>
            <h4>UPI / QR कोड</h4>
          </div>
          <div className={`payment-method ${paymentMethod === 'bank' ? 'active' : ''}`} onClick={() => setPaymentMethod('bank')}>
            <i className="fas fa-university"></i>
            <h4>Bank Transfer</h4>
          </div>
        </div>

        {paymentMethod === 'upi' && (
          <div className="qr-section">
            <h3 style={{ marginBottom: '20px' }}>UPI से भुगतान करें</h3>

            <div className="qr-placeholder" style={{ background: '#fff', border: '2px solid #e2e8f0', padding: '10px' }}>
              <img src="/image/QR.jpeg" alt="UPI QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain', minHeight: '180px' }} />
            </div>

            <h3 style={{ marginBottom: '15px' }}>UPI ID से भुगतान करें</h3>
            <div className="upi-id-box">
              <code>{instituteUPI}</code>
              <button onClick={copyUPI}>
                <i className="fas fa-copy"></i> {copied ? 'कॉपी हो गया!' : 'कॉपी करें'}
              </button>
            </div>

            <div className="form-group" style={{ marginTop: '20px' }}>
              <label>अपना UPI ID डालें</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="yourname@upi"
              />
            </div>

            <button className="btn btn-orange" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '16px' }}>
              <i className="fas fa-check-circle"></i> भुगतान पुष्टि करें — ₹{selectedItem.price}
            </button>
          </div>
        )}

        {paymentMethod === 'bank' && (
          <div className="qr-section">
            <h3 style={{ marginBottom: '20px' }}>Bank Transfer Details</h3>

            <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label>Account Holder Name</label>
                <input type="text" value="AI INSTITUTE" readOnly style={{ background: '#fff', cursor: 'default' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label>Account Number</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="text" value="8210000100127178" readOnly style={{ background: '#fff', cursor: 'default', fontFamily: 'monospace', fontSize: '16px', letterSpacing: '1px', flex: 1 }} />
                  <button className="btn btn-secondary" style={{ padding: '8px 12px' }} onClick={() => { navigator.clipboard.writeText('8210000100127178'); alert('Account number copied!'); }}>
                    <i className="fas fa-copy"></i> Copy
                  </button>
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label>IFSC Code</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="text" value="PUNB0821000" readOnly style={{ background: '#fff', cursor: 'default', fontFamily: 'monospace', fontSize: '16px', letterSpacing: '1px', flex: 1 }} />
                  <button className="btn btn-secondary" style={{ padding: '8px 12px' }} onClick={() => { navigator.clipboard.writeText('PUNB0821000'); alert('IFSC code copied!'); }}>
                    <i className="fas fa-copy"></i> Copy
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>Bank Name</label>
                <input type="text" value="Punjab National Bank" readOnly style={{ background: '#fff', cursor: 'default' }} />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '20px' }}>
              <label>Transaction ID / Reference Number (भुगतान के बाद डालें)</label>
              <input type="text" placeholder="Enter UTR/Reference number after payment" />
            </div>

            <button className="btn btn-orange" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '16px' }}>
              <i className="fas fa-check-circle"></i> भुगतान पुष्टि करें — ₹{selectedItem.price}
            </button>
          </div>
        )}

        <div className="payment-note">
          <i className="fas fa-info-circle"></i>
          <strong>नोट:</strong> भुगतान करने से पहले कोर्स/ई-बुक का नाम और सही फीस जाँच लें। भुगतान की पुष्टि तथा एक्सेस देने की प्रक्रिया शीघ्र ही शुरू होगी।
        </div>
      </div>
    </div>
  );
}

export default Payment;