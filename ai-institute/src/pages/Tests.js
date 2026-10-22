import React, { useState, useEffect } from 'react';

const questions = [
  {
    q: "Artificial Intelligence (AI) क्या है?",
    options: [
      "एक प्रकार का प्रिंटर",
      "मशीनों को बुद्धिमान कार्य करने योग्य बनाने की तकनीक",
      "एक ऑपरेटिंग सिस्टम",
      "एक कंप्यूटर केबल",
    ],
    answer: 1,
  },
  {
    q: "AI का पूरा नाम क्या है?",
    options: [
      "Automatic Internet",
      "Advanced Interface",
      "Artificial Intelligence",
      "Applied Information",
    ],
    answer: 2,
  },
  {
    q: "इनमें से कौन AI का उदाहरण है?",
    options: [
      "साधारण कुर्सी",
      "स्मार्ट वॉइस असिस्टेंट",
      "कागज की किताब",
      "साधारण पेंसिल",
    ],
    answer: 1,
  },
  {
    q: "Machine Learning का मुख्य उद्देश्य क्या है?",
    options: [
      "मशीन को पेंट करना",
      "डेटा से पैटर्न सीखना",
      "स्क्रीन साफ करना",
      "बिजली बनाना",
    ],
    answer: 1,
  },
  {
    q: "Generative AI क्या कर सकता है?",
    options: [
      "केवल फाइल डिलीट",
      "केवल कंप्यूटर बंद",
      "नया टेक्स्ट, चित्र या अन्य सामग्री बनाना",
      "केवल प्रिंट निकालना",
    ],
    answer: 2,
  },
  {
    q: "ChatGPT किस प्रकार का AI टूल है?",
    options: [
      "संवाद और सामग्री निर्माण में मदद करने वाला AI",
      "केवल एंटीवायरस",
      "केवल वीडियो प्लेयर",
      "केवल फाइल मैनेजर",
    ],
    answer: 0,
  },
  {
    q: "AI को निर्देश देने के लिए लिखे गए इनपुट को क्या कहते हैं?",
    options: ["Folder", "Prompt", "Pixel", "Browser"],
    answer: 1,
  },
  {
    q: "एक अच्छा Prompt कैसा होना चाहिए?",
    options: [
      "अस्पष्ट और अधूरा",
      "बिना किसी उद्देश्य के",
      "स्पष्ट, विशिष्ट और संदर्भ सहित",
      "केवल एक अक्षर का",
    ],
    answer: 2,
  },
  {
    q: "AI मॉडल को प्रशिक्षित करने में किसका उपयोग हो सकता है?",
    options: ["डेटा", "केवल माउस", "केवल स्पीकर", "कुर्सी"],
    answer: 0,
  },
  {
    q: "NLP का संबंध किससे है?",
    options: [
      "नेटवर्क केबल",
      "मानव भाषा को समझने और संसाधित करने से",
      "कंप्यूटर की सफाई",
      "बैटरी चार्जिंग",
    ],
    answer: 1,
  },
  {
    q: "Computer Vision का उपयोग किस कार्य में होता है?",
    options: [
      "चित्रों और वीडियो का विश्लेषण",
      "कीबोर्ड बनाना",
      "कागज काटना",
      "बिजली का बिल भरना",
    ],
    answer: 0,
  },
  {
    q: "इनमें से AI का उपयोग कहाँ हो सकता है?",
    options: [
      "शिक्षा",
      "स्वास्थ्य सेवाएँ",
      "कृषि",
      "उपरोक्त सभी",
    ],
    answer: 3,
  },
  {
    q: "AI से चित्र बनाने वाला टूल किस काम आता है?",
    options: [
      "चित्र जनरेट करने में",
      "केवल ईमेल पढ़ने में",
      "केवल टाइपिंग स्पीड मापने में",
      "कंप्यूटर की RAM बढ़ाने में",
    ],
    answer: 0,
  },
  {
    q: "AI Hallucination का क्या अर्थ है?",
    options: [
      "AI का बंद हो जाना",
      "AI द्वारा गलत या मनगढ़ंत जानकारी देना",
      "इंटरनेट की गति बढ़ना",
      "फाइल का प्रिंट होना",
    ],
    answer: 1,
  },
  {
    q: "AI से मिली महत्वपूर्ण जानकारी के साथ क्या करना चाहिए?",
    options: [
      "बिना जाँच तुरंत साझा करना",
      "हमेशा सही मानना",
      "विश्वसनीय स्रोतों से सत्यापित करना",
      "सभी स्रोत हटा देना",
    ],
    answer: 2,
  },
  {
    q: "AI का जिम्मेदारी से उपयोग करने का सही तरीका क्या है?",
    options: [
      "निजी पासवर्ड साझा करना",
      "आउटपुट की जाँच करना और गोपनीयता का ध्यान रखना",
      "हर उत्तर को अंतिम सत्य मानना",
      "बिना अनुमति किसी का डेटा उपयोग करना",
    ],
    answer: 1,
  },
  {
    q: "AI Bias किस स्थिति को दर्शाता है?",
    options: [
      "अनुचित पक्षपातपूर्ण परिणाम",
      "कंप्यूटर का रंग",
      "इंटरनेट की स्पीड",
      "स्क्रीन का आकार",
    ],
    answer: 0,
  },
  {
    q: "डेटा में पैटर्न खोजने में कौन-सी तकनीक उपयोगी है?",
    options: [
      "Machine Learning",
      "केवल प्रिंटिंग",
      "केवल स्क्रीन लॉक",
      "केवल फाइल कॉपी",
    ],
    answer: 0,
  },
  {
    q: "क्या AI के उत्तर हमेशा सही होते हैं?",
    options: [
      "हाँ, हमेशा",
      "नहीं, उनमें गलतियाँ हो सकती हैं",
      "केवल रात में सही होते हैं",
      "केवल अंग्रेजी में सही होते हैं",
    ],
    answer: 1,
  },
  {
    q: "AI सीखने वाले विद्यार्थी के लिए सबसे अच्छा अभ्यास क्या है?",
    options: [
      "केवल उत्तर याद करना",
      "बिना सोचे AI पर निर्भर रहना",
      "प्रयोग करना, प्रश्न पूछना और परिणाम जाँचना",
      "AI टूल कभी न आजमाना",
    ],
    answer: 2,
  },
];

function AITest() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  // Timer
  useEffect(() => {
    if (!started || submitted) return;
    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [started, submitted, timeLeft]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const question = questions[current];
  const correct = questions.reduce(
    (total, item, index) =>
      total + (selected[index] === item.answer ? 1 : 0),
    0
  );
  const percentage = Math.round((correct / questions.length) * 100);

  const buttonStyle = {
    background: "#102b4e",
    color: "white",
    border: "none",
    borderRadius: 8,
    padding: "12px 18px",
    cursor: "pointer",
    fontWeight: 600,
  };

  // ===== INTRO POPUP (test start hone se pehle) =====
  if (!started) {
    return (
      <main style={styles.page}>
        <section style={styles.introOverlay}>
          <div style={styles.introPopup}>
            <div style={styles.introBrand}>AI INSTITUTE</div>
            <h2 style={styles.introTitle}>📝 AI प्रैक्टिस टेस्ट</h2>
            <p style={styles.introSubtitle}>Test शुरू करने से पहले नीचे दी गई जानकारी ध्यान से पढ़ें</p>

            <div style={styles.introGrid}>
              <div style={styles.introBox}>
                <span style={styles.introBoxIcon}>❓</span>
                <strong>{questions.length}</strong>
                <p>प्रश्न</p>
              </div>
              <div style={styles.introBox}>
                <span style={styles.introBoxIcon}>⏱️</span>
                <strong>10 मिनट</strong>
                <p>अवधि</p>
              </div>
              <div style={styles.introBox}>
                <span style={styles.introBoxIcon}>💯</span>
                <strong>{questions.length}</strong>
                <p>कुल अंक</p>
              </div>
              <div style={styles.introBox}>
                <span style={styles.introBoxIcon}>✅</span>
                <strong>4 विकल्प</strong>
                <p>प्रति प्रश्न</p>
              </div>
            </div>

            <div style={styles.rulesBox}>
              <h3>📋 निर्देश:</h3>
              <ul>
                <li>टाइमर शुरू होते ही countdown चालू हो जाएगा।</li>
                <li>समय समाप्त होने पर टेस्ट अपने आप submit हो जाएगा।</li>
                <li>हर प्रश्न के 4 विकल्प दिए गए हैं, सही विकल्प चुनें।</li>
                <li>गलत उत्तर पर कोई नकारात्मक अंक नहीं है।</li>
                <li>प्रश्न के बीच Previous / Next से नेविगेट कर सकते हैं।</li>
                <li>अंत में <b>Submit Test</b> ज़रूर दबाएँ।</li>
              </ul>
            </div>

            <button
              style={styles.startBtn}
              onClick={() => setStarted(true)}
            >
              🚀 टेस्ट शुरू करें
            </button>
            <p style={styles.introNote}>शुभकामनाएँ! आपका अच्छा प्रदर्शन हो।</p>
          </div>
        </section>
      </main>
    );
  }

  if (submitted) {
    return (
      <main style={styles.page}>
        <section style={styles.card}>
          <h1 style={styles.heading}>AI INSTITUTE</h1>
          <h2>टेस्ट पूरा हुआ!</h2>
          <p>आपका परिणाम</p>
          <div style={styles.score}>{correct}/20</div>
          <h2>{percentage}%</h2>
          <p>
            {percentage >= 80
              ? "बहुत बढ़िया! आपका प्रदर्शन शानदार है।"
              : percentage >= 50
              ? "अच्छा प्रयास! अभ्यास जारी रखें।"
              : "दोबारा अभ्यास करें और फिर टेस्ट दें।"}
          </p>
          <p>
            सही उत्तर: {correct} | गलत या छोड़े गए प्रश्न:{" "}
            {questions.length - correct}
          </p>
          <button
            style={buttonStyle}
            onClick={() => {
              setCurrent(0);
              setSelected({});
              setSubmitted(false);
              setStarted(false);
              setTimeLeft(600);
            }}
          >
            टेस्ट दोबारा दें
          </button>
          <div style={{ textAlign: "left", marginTop: 24 }}>
            <h3>उत्तर की समीक्षा</h3>
            {questions.map((item, index) => (
              <div
                key={index}
                style={{
                  borderTop: "1px solid #e2e8f0",
                  padding: "12px 0",
                }}
              >
                <strong>
                  {index + 1}. {item.q}
                </strong>
                <p style={{ margin: "6px 0" }}>
                  आपका उत्तर:{" "}
                  {selected[index] === undefined
                    ? "उत्तर नहीं दिया"
                    : item.options[selected[index]]}
                </p>
                <p style={{ color: "#16803d", margin: 0 }}>
                  सही उत्तर: {item.options[item.answer]}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <div style={styles.brand}>AI INSTITUTE</div>
        <p style={styles.subtitle}>Artificial Intelligence — Online Test</p>

        <div style={styles.progressTrack}>
          <div
            style={{
              ...styles.progressFill,
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <div style={styles.meta}>
          <span>प्रश्न {current + 1} / {questions.length}</span>
          <span style={{
            color: timeLeft <= 60 ? "#dc2626" : "#475569",
            fontWeight: timeLeft <= 60 ? 800 : 600,
            fontSize: 16,
          }}>
            ⏱️ {formatTime(timeLeft)}
          </span>
          <span>अंक: {correct}</span>
        </div>

        <h2 style={styles.question}>{question.q}</h2>

        <div style={{ display: "grid", gap: 12 }}>
          {question.options.map((option, index) => {
            const isSelected = selected[current] === index;
            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  setSelected((previous) => ({
                    ...previous,
                    [current]: index,
                  }))
                }
                style={{
                  ...styles.option,
                  ...(isSelected ? styles.optionSelected : {}),
                }}
              >
                <span style={styles.optionLetter}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        <div style={styles.navigation}>
          <button
            style={{
              ...buttonStyle,
              opacity: current === 0 ? 0.45 : 1,
            }}
            disabled={current === 0}
            onClick={() => setCurrent((value) => value - 1)}
          >
            Previous
          </button>

          {current < questions.length - 1 ? (
            <button
              style={buttonStyle}
              onClick={() => setCurrent((value) => value + 1)}
            >
              Next
            </button>
          ) : (
            <button
              style={{ ...buttonStyle, background: "#e87518" }}
              onClick={() => setSubmitted(true)}
            >
              Submit Test
            </button>
          )}
        </div>

        <p style={styles.footer}>
          AI INSTITUTE • Learn | Practice | Grow
        </p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    padding: "32px 16px",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },
  card: {
    maxWidth: 760,
    margin: "0 auto",
    background: "#ffffff",
    padding: "28px",
    borderRadius: 18,
    boxShadow: "0 8px 32px rgba(16,43,78,0.10)",
    boxSizing: "border-box",
  },
  brand: {
    color: "#102b4e",
    fontSize: 26,
    fontWeight: 800,
    borderBottom: "4px solid #f28a1b",
    paddingBottom: 10,
  },
  subtitle: { color: "#64748b", marginBottom: 24 },
  progressTrack: {
    height: 8,
    background: "#e2e8f0",
    borderRadius: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "#f28a1b",
    transition: "width 0.2s",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    color: "#475569",
    marginTop: 18,
  },
  question: {
    color: "#102b4e",
    fontSize: 22,
    lineHeight: 1.5,
    margin: "24px 0",
  },
  option: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    textAlign: "left",
    width: "100%",
    padding: 14,
    border: "1px solid #cbd5e1",
    borderRadius: 10,
    background: "#ffffff",
    color: "#1e293b",
    cursor: "pointer",
    fontSize: 16,
  },
  optionSelected: {
    border: "2px solid #f28a1b",
    background: "#fff7ed",
  },
  optionLetter: {
    display: "grid",
    placeItems: "center",
    minWidth: 30,
    height: 30,
    borderRadius: 8,
    background: "#eaf0f7",
    color: "#102b4e",
    fontWeight: 700,
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 28,
  },
  score: {
    fontSize: 52,
    fontWeight: 800,
    color: "#e87518",
    margin: "16px 0",
  },
  footer: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 13,
    marginTop: 28,
  },
  // ===== INTRO POPUP STYLES =====
  introOverlay: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  introPopup: {
    maxWidth: 560,
    width: "100%",
    background: "#ffffff",
    padding: "32px 28px",
    borderRadius: 20,
    boxShadow: "0 16px 60px rgba(16,43,78,0.25)",
    textAlign: "center",
    boxSizing: "border-box",
  },
  introBrand: {
    color: "#102b4e",
    fontSize: 22,
    fontWeight: 800,
    borderBottom: "4px solid #f28a1b",
    paddingBottom: 8,
    display: "inline-block",
    marginBottom: 18,
  },
  introTitle: {
    color: "#102b4e",
    fontSize: 26,
    margin: "0 0 8px",
  },
  introSubtitle: {
    color: "#64748b",
    fontSize: 14,
    margin: "0 0 22px",
  },
  introGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
    gap: 12,
    marginBottom: 22,
  },
  introBox: {
    background: "#f1f5f9",
    borderRadius: 12,
    padding: "14px 8px",
    boxSizing: "border-box",
  },
  introBoxIcon: {
    fontSize: 22,
    display: "block",
    marginBottom: 6,
  },
  introBoxStrong: {
    fontSize: 18,
  },
  rulesBox: {
    background: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: 12,
    padding: "16px 18px",
    textAlign: "left",
    marginBottom: 24,
  },
  startBtn: {
    width: "100%",
    padding: "16px",
    fontSize: 18,
    fontWeight: 700,
    color: "#ffffff",
    background: "linear-gradient(135deg, #f28a1b, #e87518)",
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(242,138,27,0.4)",
  },
  introNote: {
    color: "#64748b",
    fontSize: 13,
    margin: "14px 0 0",
  },
};

function Tests() {
  return <AITest />;
}

export default Tests;