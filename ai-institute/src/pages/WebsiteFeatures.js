import { useLanguage } from "../context/LanguageContext";
import AIChatbot from "../components/AIChatbot";
import "../styles/WebsiteFeatures.css";

const courses = [
  { title: "Introduction to AI", description: "AI tools, prompt writing और practical AI skills सीखें।", type: "FREE", image: "/image/AI Institute_ Introduction to AI Course.png" },
  { title: "Graphic Designing", description: "Posters, banners, social media designs और creative projects।", type: "COURSE", image: "/image/AI Graphic Design Mastery Workspace.png" },
  { title: "AI Video Creation", description: "AI की मदद से वीडियो बनाने की तकनीक सीखें।", type: "COURSE", image: "/image/AI Video Creation Mastery.png" },
  { title: "Basic Computer", description: "कंप्यूटर की बुनियादी जानकारी और जरूरी डिजिटल स्किल्स।", type: "FREE", image: "/image/Basic Computer Course Banner.png" },
];

export default function WebsiteFeatures() {
  const { t } = useLanguage();

  const goTo = (path) => {
    window.location.href = path;
  };

  return (
    <main className="feature-page" id="home">
      <section className="feature-hero">
        <span className="eyebrow">AI INSTITUTE • LEARN | PRACTICE | GROW</span>
        <h1>{t.heroTitle}</h1>
        <p>{t.heroSub}</p>
        <div className="hero-actions">
          <button onClick={() => goTo("/courses")}>{t.explore}</button>
          <button className="secondary-button" onClick={() => goTo("/tests")}>{t.takeTest}</button>
        </div>
      </section>

      <section className="feature-section" id="courses">
        <div className="section-heading">
          <span>{t.ourPrograms}</span>
          <h2>{t.popularCourses}</h2>
          <p>{t.popularSub}</p>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <span className="course-label">{course.type}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button onClick={() => goTo("/courses")}>{t.explore} →</button>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section free-section" id="free-classes">
        <div className="section-heading">
          <span>{t.freeZone}</span>
          <h2>{t.freeTitle}</h2>
          <p>{t.freeSub}</p>
        </div>
        <div className="simple-grid">
          <button onClick={() => goTo("/tests")}>📝 {t.practiceTest}</button>
          <button onClick={() => goTo("/free-classes")}>💻 {t.compCourses}</button>
          <button onClick={() => goTo("/ebooks")}>📚 {t.resources}</button>
        </div>
      </section>

      <section className="feature-section ebook-section" id="ebooks">
        <div>
          <span className="eyebrow">{t.ebookRes}</span>
          <h2>{t.ebookTitle}</h2>
          <p>{t.ebookSub}</p>
          <div className="ebook-price">{t.ebookPrice} <small>{t.ebookPay}</small></div>
          <button onClick={() => goTo("/ebooks")}>{t.ebookBtn}</button>
        </div>
        <div className="ebook-cover">
          <img src="/image/Graphic Designing eBook Mockup.png" alt="Graphic Designing eBook" />
        </div>
      </section>

      <section className="feature-section contact-section" id="contact">
        <span className="eyebrow">{t.needHelp}</span>
        <h2>{t.journeyTitle}</h2>
        <p>{t.journeySub}</p>
        <a className="contact-button" href="https://wa.me/919369150047" target="_blank" rel="noreferrer">
          {t.whatsapp}
        </a>
        <p className="small-note">{t.noteBefore}</p>
      </section>

      <footer className="feature-footer">
        <strong>AI Institute</strong>
        <p>{t.footerTag}</p>
        <p>© {new Date().getFullYear()} AI INSTITUTE</p>
      </footer>

      <AIChatbot />
    </main>
  );
}