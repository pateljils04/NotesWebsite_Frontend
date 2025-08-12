import React from 'react'
import "../style/Home.css"
import accessIcon from "../assets/24.png";
import forbesLogo from "../assets/forbes.webp";
import incLogo from "../assets/inc.webp";
import vergeLogo from "../assets/the-verge.webp";
import entrepreneurLogo from "../assets/entrepreneur.webp";
import businessLogo from "../assets/business.webp";
import wellgoodLogo from "../assets/well-good.webp";
import aiImage from "../assets/25.png"

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* <div style={{ backgroundColor: "#fefaf6", paddingTop: "40px" }}>
        <div>
          <h1 style={{ fontSize: "55px" }}><b style={{ color: "rgb(30, 199, 30)" }}>Evernote</b> in action</h1>
          <p style={{ fontSize: "18px", fontWeight: "400", marginTop: "30px" }}>With Evernote, you have everything you need to keep life organized. <br />Use it for note taking, project planning, and to find what you need, when you need it.</p>
        </div>
        <div style={{ marginTop: "30px" }} >
          <img src="https://evernote.com/_next/image?url=%2Fimages%2Faccordions%2Fcalendar-right-note-right-now.webp&w=1920&q=75" width={900} height={500} alt="" />
        </div>
      </div> */}

      <div className="evernote-section">
        <div className="text-content">
          <h1><b className="green">Evernote</b> in action</h1>
          <p>
            With Evernote, you have everything you need to keep life organized. <br />
            Use it for note taking, project planning, and to find what you need, when you need it.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://evernote.com/_next/image?url=%2Fimages%2Faccordions%2Fcalendar-right-note-right-now.webp&w=1920&q=75"
            alt="Evernote demo"
          />
        </div>
      </div>


      <div className="testimonial-container">
        <h2 className="testimonial-text">
          Evernote is a powerful tool for managing your tasks right alongside all of the
          information you work with every day.
        </h2>
        <p className="testimonial-author">INC. MAGAZINE</p>

        <div className="logo-strip">
          <img src={forbesLogo} alt="Forbes" />
          <img src={incLogo} alt="Inc." />
          <img src={vergeLogo} alt="The Verge" />
          <img src={entrepreneurLogo} alt="Entrepreneur" />
          <img src={businessLogo} alt="Business" />
          <img src={wellgoodLogo} alt="Well+Good" />
        </div>
      </div>

      <div className="access-container">
        <div className="access-left">
          <img src={accessIcon} alt="Access Icon" className="access-img" />
        </div>
        <div className="access-right">
          <h2>24/7 access</h2>
          <p>
            Evernote automatically syncs across all your devices so you can access your most important
            information anytime, anywhere. No WiFi? No problem—offline mode means you can continue to use
            Evernote even when the internet cuts out.
          </p>
          <button className="access-btn">Get Evernote free</button>
        </div>
      </div>

      <section className="ai-transcribe">
        <div className="ai-text">
          <h1>Create a notes on<br /><b style={{ color: "rgb(30, 199, 30)", fontWeight: "500" }}>Evernote</b></h1>
          <p>
            Take quick notes, save brilliant ideas, and organize your thoughts effortlessly with our clean and powerful notes app.
            Whether you're in a meeting, a classroom, or a creative flow — jot down ideas and revisit them anytime.
            Secure, searchable, and always accessible — your notes, exactly when you need them.
          </p>
          <a href="#" className="ai-link">Take me there</a>
        </div>

        <div className="ai-image">
          <img src={aiImage} alt="AI Transcribe Graphic" />
        </div>
      </section>


      <section className="hero">
        <h1 className="hero-title">Tame your work,<br />organize your life</h1>
        <p className="hero-subtitle">
          Remember everything and tackle any project with your notes, tasks,<br />
          and schedule all in one place.
        </p>
        <button className="hero-button">Get Evernote free</button>
      </section>
    </div>
  )
}

export default Home
