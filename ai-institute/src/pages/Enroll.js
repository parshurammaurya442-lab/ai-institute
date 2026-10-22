import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { courses } from '../data/courses';
import { ebooks } from '../data/ebooks';

function Enroll() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const courseId = searchParams.get('course');
  const ebookId = searchParams.get('ebook');

  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    course: courseId || '',
    ebook: ebookId || '',
  });
  const [errors, setErrors] = useState({});

  const selectedCourse = courses.find((c) => c.id === parseInt(form.course));
  const selectedEbook = ebooks.find((e) => e.id === parseInt(form.ebook));
  const selectedItem = selectedCourse || selectedEbook;

  useEffect(() => {
    if (courseId) setForm(prev => ({ ...prev, course: courseId }));
    if (ebookId) setForm(prev => ({ ...prev, ebook: ebookId }));
  }, [courseId, ebookId]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'नाम आवश्यक है';
    if (!form.mobile.trim()) newErrors.mobile = 'मोबाइल नंबर आवश्यक है';
    else if (!/^\d{10}$/.test(form.mobile)) newErrors.mobile = 'सही 10 अंकों का नंबर डालें';
    if (!form.email.trim()) newErrors.email = 'ईमेल आवश्यक है';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'सही ईमेल डालें';
    if (!form.course && !form.ebook) newErrors.course = 'कोर्स या ई-बुक चुनें';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    navigate('/payment', { state: { formData: form, course: selectedCourse, ebook: selectedEbook } });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="fade-in">
      <div className="enroll-section">
        <form className="enroll-form" onSubmit={handleSubmit}>
          <h2><i className="fas fa-user-graduate"></i> AI INSTITUTE में प्रवेश लें</h2>

          <div className="form-group">
            <label>विद्यार्थी का पूरा नाम</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="अपना नाम लिखें" />
            {errors.name && <span style={{ color: '#ef4444', fontSize: '13px' }}>{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>मोबाइल नंबर</label>
            <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="10 अंकों का नंबर" maxLength="10" />
            {errors.mobile && <span style={{ color: '#ef4444', fontSize: '13px' }}>{errors.mobile}</span>}
          </div>

          <div className="form-group">
            <label>ईमेल (वैकल्पिक)</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="ईमेल पता" />
            {errors.email && <span style={{ color: '#ef4444', fontSize: '13px' }}>{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>कोर्स चुनें</label>
            <select name="course" value={form.course} onChange={handleChange}>
              <option value="">-- कोर्स चुनें --</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title} — ₹{course.price}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>या ई-बुक चुनें</label>
            <select name="ebook" value={form.ebook} onChange={handleChange}>
              <option value="">-- ई-बुक चुनें --</option>
              {ebooks.map((ebook) => (
                <option key={ebook.id} value={ebook.id}>
                  {ebook.title} — ₹{ebook.price}
                </option>
              ))}
            </select>
            {errors.course && <span style={{ color: '#ef4444', fontSize: '13px' }}>{errors.course}</span>}
          </div>

          {selectedItem && (
            <div className="enroll-summary">
              <h3>चयनित {selectedCourse ? 'कोर्स' : 'ई-बुक'}</h3>
              <div className="enroll-summary-row">
                <span>नाम</span>
                <strong>{selectedItem.title}</strong>
              </div>
              {selectedCourse && (
                <>
                  <div className="enroll-summary-row">
                    <span>अवधि</span>
                    <span>{selectedCourse.duration}</span>
                  </div>
                  <div className="enroll-summary-row">
                    <span>एक्सेस</span>
                    <span>{selectedCourse.access}</span>
                  </div>
                  <div className="enroll-summary-row">
                    <span>प्रमाणपत्र</span>
                    <span>उपलब्ध नहीं</span>
                  </div>
                </>
              )}
              {selectedEbook && (
                <>
                  <div className="enroll-summary-row">
                    <span>पृष्ठ</span>
                    <span>{selectedEbook.pages}</span>
                  </div>
                  <div className="enroll-summary-row">
                    <span>लेखक</span>
                    <span>{selectedEbook.author}</span>
                  </div>
                </>
              )}
              <div className="enroll-summary-row total">
                <span>फीस</span>
                <span>₹{selectedItem.price}</span>
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '16px' }}>
            <i className="fas fa-arrow-right"></i> नामांकन आगे बढ़ें
          </button>
        </form>
      </div>
    </div>
  );
}

export default Enroll;