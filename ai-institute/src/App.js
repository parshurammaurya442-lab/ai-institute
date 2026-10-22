import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WebsiteFeatures from './pages/WebsiteFeatures';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import FreeClasses from './pages/FreeClasses';
import Ebooks from './pages/Ebooks';
import Tests from './pages/Tests';
import Enroll from './pages/Enroll';
import Payment from './pages/Payment';
import CourseRules from './pages/CourseRules';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<WebsiteFeatures />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/free-classes" element={<FreeClasses />} />
              <Route path="/ebooks" element={<Ebooks />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/enroll" element={<Enroll />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/rules" element={<CourseRules />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;