import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    navHome: 'Home', navCourses: 'Courses', navFree: 'Free Classes', navEbooks: 'E-Books',
    navTests: 'Tests', navAbout: 'About', navContact: 'Contact', navEnroll: 'Enroll Now',
    heroTitle: 'Learn AI. Create More. Build Your Future.',
    heroSub: 'Learn AI, Graphic Designing, Video Creation and Computer Skills with practical programs.',
    explore: 'Explore Courses', takeTest: 'Take Free Test',
    ourPrograms: 'OUR LEARNING PROGRAMS', popularCourses: 'Popular Courses',
    popularSub: 'Choose your favorite course and start learning.',
    freeZone: 'START LEARNING FOR FREE', freeTitle: 'Free Learning Zone',
    freeSub: 'Start your learning journey with AI basics, computer lessons and practice tests.',
    practiceTest: 'AI Practice Test', compCourses: 'Computer Courses', resources: 'Learning Resources',
    ebookRes: 'DIGITAL LEARNING RESOURCE', ebookTitle: 'Graphic Designing Complete eBook',
    ebookSub: 'Check the Graphic Designing PDF details, contents and sample pages before making a purchase.',
    ebookPrice: '₹99', ebookPay: 'One-time payment', ebookBtn: 'Ask about eBook',
    needHelp: 'NEED HELP?', journeyTitle: 'Start Your Learning Journey',
    journeySub: 'Contact us for any course or eBook information.',
    whatsapp: 'Contact on WhatsApp', noteBefore: 'Confirm course details and price before payment.',
    footerTag: 'Learn | Practice | Grow',
    searchPlaceholder: 'Search courses...',
    notFound: 'No courses found',
    notifications: 'Notifications', markRead: 'Mark all read'
  },
  hi: {
    navHome: 'Home', navCourses: 'Courses', navFree: 'Free Classes', navEbooks: 'E-Books',
    navTests: 'Tests', navAbout: 'About', navContact: 'Contact', navEnroll: 'Enroll Now',
    heroTitle: 'सीखें AI। और बनाएँ। अपना भविष्य बनाएँ।',
    heroSub: 'AI, ग्राफिक डिज़ाइनिंग, वीडियो क्रिएशन और कंप्यूटर स्किल्स प्रैक्टिकल प्रोग्राम के साथ सीखें।',
    explore: 'कोर्स देखें', takeTest: 'मुफ्त टेस्ट दें',
    ourPrograms: 'हमारे लर्निंग प्रोग्राम', popularCourses: 'लोकप्रिय कोर्स',
    popularSub: 'अपना पसंदीदा कोर्स चुनें और सीखना शुरू करें।',
    freeZone: 'मुफ्त में सीखना शुरू करें', freeTitle: 'फ्री लर्निंग ज़ोन',
    freeSub: 'AI बेसिक्स, कंप्यूटर पाठ और प्रैक्टिस टेस्ट के साथ अपनी लर्निंग यात्रा शुरू करें।',
    practiceTest: 'AI प्रैक्टिस टेस्ट', compCourses: 'कंप्यूटर कोर्स', resources: 'लर्निंग रिसोर्सेज',
    ebookRes: 'डिजिटल लर्निंग रिसोर्स', ebookTitle: 'ग्राफिक डिज़ाइनिंग कम्प्लीट ई-बुक',
    ebookSub: 'खरीदने से पहले ग्राफिक डिज़ाइनिंग PDF के विवरण, कंटेंट्स और सैंपल पेज देखें।',
    ebookPrice: '₹99', ebookPay: 'एक बार का भुगतान', ebookBtn: 'ई-बुक के लिए पूछें',
    needHelp: 'मदद चाहिए?', journeyTitle: 'अपनी लर्निंग यात्रा शुरू करें',
    journeySub: 'किसी भी कोर्स या ई-बुक की जानकारी के लिए हमसे संपर्क करें।',
    whatsapp: 'WhatsApp पर संपर्क करें', noteBefore: 'भुगतान करने से पहले कोर्स की जानकारी और कीमत की पुष्टि करें।',
    footerTag: 'सीखें | अभ्यास करें | बढ़ें',
    searchPlaceholder: 'कोर्स खोजें...',
    notFound: 'कोई कोर्स नहीं मिला',
    notifications: 'सूचनाएं', markRead: 'सभी पढ़ें'
  }
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'hi');
  const t = translations[lang];
  const toggleLang = () => {
    const newLang = lang === 'hi' ? 'en' : 'hi';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);