import React, { useState, useRef, useEffect } from 'react';

const botResponses = {
  greeting: ['hi', 'hello', 'hey', 'hii', 'namaste'],
  courses: ['course', 'courses', 'offer', 'kya offer'],
  price: ['price', 'fee', 'fees', 'cost', 'kitna', 'कीमत'],
  free: ['free', 'free course', 'मुफ्त', 'free classes'],
  duration: ['duration', 'time', 'long', 'कब तक', 'samay'],
  certificate: ['certificate', 'प्रमाणपत्र', 'certification'],
  payment: ['payment', 'pay', 'upi', 'भुगतान'],
  enroll: ['enroll', 'register', 'join', 'admission', 'नामांकन'],
  contact: ['contact', 'phone', 'whatsapp', 'number', 'संपर्क'],
  ebooks: ['ebook', 'e-book', 'book', 'pdf', 'book'],
  location: ['location', 'where', 'address', 'address', 'कहाँ'],
  founder: ['founder', 'who', 'parshuram', 'परशुराम', 'sir'],
  default: []
};

const responseData = {
  greeting: "नमस्ते! 🙏 मैं **AI Institute Chatbot** हूं। आप मुझसे कोर्स, प्राइसिंग, एडमिशन, या कोई भी AI Institute संबंधी सवाल पूछ सकते हैं!",
  courses: "हमारे कोर्स: 🤖 AI Prompt Writing, 🎨 Graphic Designing, 🎬 AI Video Creation, 💻 Basic Computer, 📝 MS Word/Excel/PowerPoint, 🎓 Introduction to AI — सभी उपलब्ध हैं!",
  price: "कोर्स की fees अलग-अलग है: ₹999 से ₹9999 तक। **Graphic Designing eBook ₹99** में उपलब्ध है। पूरी जानकारी `/courses` पेज पर देखें!",
  free: "हाँ! हमारे **Free Learning Zone** में 6 निःशुल्क कोर्स हैं: Basic Computer, MS Word, MS Excel, Internet & Email, PowerPoint, Introduction to AI।",
  duration: "हर कोर्स **1 महीने** का है और **6 महीने का access** मिलता है। Recorded video lectures हैं।",
  certificate: "हाँ! कोर्स पूरा करने के बाद **प्रमाणपत्र** मिलता है।",
  payment: "आप UPI (9369150047-3@ybl), Bank Transfer, या QR कोड से भुगतान कर सकते हैं।",
  enroll: "आप `/enroll` पेज जाकर नामांकन कर सकते हैं। बस नाम, मोबाइल नंबर और कोर्स चुनना है!",
  contact: "हमसे संपर्क करें: 📞 **9369150047** (WhatsApp) या हमारा contact form भरें।",
  ebooks: "हमारे पास **Graphic Designing Complete eBook** उपलब्ध है ₹99 में। `/ebooks` पेज पर देखें!",
  location: "हमारा ऑफिस: **Mourya Online Center, Shantinagar, Maharajganj** है।",
  founder: "हमारे founder **Parshuram Maurya** हैं।",
  default: "क्षमा करें, मुझे समझ नहीं आया। आप कोर्स, fees, enrollment, या कोई और जानकारी चाहें तो पूछें!"
};

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'नमस्ते! 🙏 मैं AI Institute Chatbot हूं। मैं आपको कोर्स, fees, admission — सभी जानकारी दे सकता हूं। कैसे मदद करूं?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userMessage) => {
    const lower = userMessage.toLowerCase();
    
    if (botResponses.greeting.some(w => lower.includes(w))) return responseData.greeting;
    if (botResponses.courses.some(w => lower.includes(w))) return responseData.courses;
    if (botResponses.price.some(w => lower.includes(w))) return responseData.price;
    if (botResponses.free.some(w => lower.includes(w))) return responseData.free;
    if (botResponses.duration.some(w => lower.includes(w))) return responseData.duration;
    if (botResponses.certificate.some(w => lower.includes(w))) return responseData.certificate;
    if (botResponses.payment.some(w => lower.includes(w))) return responseData.payment;
    if (botResponses.enroll.some(w => lower.includes(w))) return responseData.enroll;
    if (botResponses.contact.some(w => lower.includes(w))) return responseData.contact;
    if (botResponses.ebooks.some(w => lower.includes(w))) return responseData.ebooks;
    if (botResponses.location.some(w => lower.includes(w))) return responseData.location;
    if (botResponses.founder.some(w => lower.includes(w))) return responseData.founder;
    
    return responseData.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { type: 'bot', text: getResponse(input) };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-robot"></i>}
        {!isOpen && <span>AI Assistant</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-avatar">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h3>AI Institute Chatbot</h3>
              <span className="status">● Online</span>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.type}`}>
                {msg.type === 'bot' && <div className="bot-avatar"><i className="fas fa-robot"></i></div>}
                <div className="message-content">
                  <span className="message-text">{msg.text}</span>
                  <span className="message-time">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot">
                <div className="bot-avatar"><i className="fas fa-robot"></i></div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="अपना सवाल लिखें..."
            />
            <button onClick={handleSend} disabled={isTyping}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIChatbot;