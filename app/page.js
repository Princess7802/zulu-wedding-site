export default function ZuluHeritageWeddingInvitation() {
  import { useState, useEffect } from "react";

export default function ZuluHeritageWeddingInvitation() {
  const [opened, setOpened] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", attending: "", guests: "1", meal: "", dietary: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const wedding = new Date("2026-10-24T10:00:00");
    const tick = () => {
      const diff = wedding - new Date();
      if (diff <= 0) return;
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => setShowCard(true), 700);
  };

  const pad = (n) => String(n).padStart(2, "0");
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  if (!showFull) {
    return (
      <div
        onClick={handleOpen}
        style={{
          width: "100vw", height: "100vh", position: "relative",
          overflow: "hidden", cursor: opened ? "default" : "pointer",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Cowhide image from public/images/envelope.png */}
        <img
          src="/images/envelope.png"
          alt="envelope"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Wax seal SVG centred over the photo */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 10 }}>
          <svg width="190" height="190" viewBox="0 0 190 190" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="outer" cx="38%" cy="32%" r="68%">
                <stop offset="0%" stopColor="#f2b84e" />
                <stop offset="25%" stopColor="#c8781a" />
                <stop offset="55%" stopColor="#9a540a" />
                <stop offset="80%" stopColor="#6e3606" />
                <stop offset="100%" stopColor="#4a2204" />
              </radialGradient>
              <radialGradient id="inner" cx="36%" cy="30%" r="62%">
                <stop offset="0%" stopColor="#dfa030" />
                <stop offset="35%" stopColor="#a86212" />
                <stop offset="75%" stopColor="#7a3e08" />
                <stop offset="100%" stopColor="#502808" />
              </radialGradient>
              <filter id="shadow" x="-25%" y="-25%" width="150%" height="150%">
                <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="rgba(0,0,0,0.7)" />
              </filter>
            </defs>

            {Array.from({ length: 18 }).map((_, i) => {
              const a = (i / 18) * 2 * Math.PI;
              const x = 95 + 80 * Math.cos(a);
              const y = 95 + 80 * Math.sin(a);
              return <circle key={i} cx={x} cy={y} r="11" fill="url(#outer)" filter="url(#shadow)" />;
            })}
            <circle cx="95" cy="95" r="72" fill="url(#outer)" filter="url(#shadow)" />

            {Array.from({ length: 42 }).map((_, i) => {
              const a = (i / 42) * 2 * Math.PI;
              return <circle key={i} cx={95 + 62 * Math.cos(a)} cy={95 + 62 * Math.sin(a)} r="2.6" fill="rgba(0,0,0,0.25)" />;
            })}

            <circle cx="95" cy="95" r="56" fill="url(#inner)" />
            <ellipse cx="78" cy="75" rx="24" ry="12" fill="rgba(255,255,255,0.14)" transform="rotate(-35 78 75)" />
            <text x="95" y="107" textAnchor="middle" fill="white" fontSize="32"
              fontFamily="Georgia,'Times New Roman',serif" fontWeight="400" letterSpacing="2">
              T&amp;K
            </text>
          </svg>
        </div>

        {/* Skip button */}
        <button
          onClick={(e) => { e.stopPropagation(); setShowFull(true); }}
          style={{
            position: "absolute", top: "20px", right: "24px", zIndex: 50,
            background: "rgba(0,0,0,0.32)", border: "1px solid rgba(255,255,255,0.3)",
            color: "rgba(255,255,255,0.9)", padding: "8px 22px", borderRadius: "999px",
            fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase",
            cursor: "pointer", backdropFilter: "blur(6px)", fontFamily: "Georgia,serif",
          }}
        >
          Skip ›
        </button>

        {/* Tap prompt */}
        {!opened && (
          <p style={{
            position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)",
            zIndex: 20, color: "rgba(255,255,255,0.85)", fontSize: "12px",
            letterSpacing: "0.3em", textTransform: "uppercase",
            textShadow: "0 1px 6px rgba(0,0,0,0.7)", animation: "tapPulse 2s ease-in-out infinite",
            whiteSpace: "nowrap",
          }}>
            Tap to open
          </p>
        )}

        {/* Card rises up after tap */}
        {showCard && (
          <div style={{
            position: "absolute", bottom: 0, left: "6%", right: "6%", zIndex: 30,
            animation: "riseUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards",
          }}>
            <div style={{
              background: "linear-gradient(160deg,#faf6f0,#f5ede0)",
              borderRadius: "22px 22px 0 0", padding: "36px 44px 48px",
              textAlign: "center", boxShadow: "0 -16px 60px rgba(0,0,0,0.55)",
            }}>
              <div style={{ display: "flex", justifyContent: "center", gap: "7px", marginBottom: "16px" }}>
                {[...Array(9)].map((_, i) => (
                  <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c8780a" }} />
                ))}
              </div>
              <p style={{ color: "#8b4a0a", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "10px" }}>
                Traditional Zulu Wedding
              </p>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(20px,4vw,32px)", color: "#2d1a00", margin: "0 0 6px", lineHeight: 1.2 }}>
                Thobelinkosi <span style={{ color: "#c8780a" }}>&</span> Koketso
              </h2>
              <p style={{ color: "#6b3a0a", fontSize: "13px", marginBottom: "24px" }}>
                24 October 2026 · KwaZulu-Natal, South Africa
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); setShowFull(true); }}
                style={{
                  background: "#c8780a", color: "#fff", border: "none",
                  padding: "14px 40px", borderRadius: "999px",
                  fontSize: "12px", letterSpacing: "0.28em", textTransform: "uppercase",
                  cursor: "pointer", fontFamily: "Georgia,serif",
                  boxShadow: "0 4px 20px rgba(200,120,10,0.4)",
                }}
              >
                View Invitation ✦
              </button>
            </div>
          </div>
        )}

        <style>{`
          @keyframes tapPulse { 0%,100%{opacity:.85} 50%{opacity:.3} }
          @keyframes riseUp { from{transform:translateY(100%);opacity:0} to{transform:translateY(0);opacity:1} }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#110800", color: "#fff", fontFamily: "Georgia,serif" }}>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", justifyContent: "center", gap: "clamp(16px,4vw,48px)",
        padding: "14px 24px", background: "rgba(17,8,0,0.88)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(200,120,10,0.2)",
      }}>
        {[["ceremony","Indlela Yethu"],["venue","Venue"],["rsvp","RSVP"]].map(([id, label]) => (
          <button key={id} onClick={() => scrollTo(id)}
            style={{ background: "none", border: "none", color: "rgba(200,160,80,0.8)", cursor: "pointer",
              fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: "Georgia,serif" }}>
            {label}
          </button>
        ))}
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center", padding: "100px 24px 60px",
        borderBottom: "1px solid rgba(200,120,10,0.12)" }}>
        <Divider />
        <p style={{ color: "#c8780a", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "8px" }}>
          Together With Their Families
        </p>
        <Divider />
        <h1 style={{ fontSize: "clamp(3rem,12vw,8rem)", color: "#f5e6c8", margin: "24px 0 0", lineHeight: 1 }}>
          Thobelinkosi
        </h1>
        <span style={{ color: "#c8780a", fontSize: "clamp(1.5rem,5vw,3rem)", display: "block", margin: "8px 0" }}>✦</span>
        <h1 style={{ fontSize: "clamp(3rem,12vw,8rem)", color: "#f5e6c8", margin: "0 0 24px", lineHeight: 1 }}>
          Koketso
        </h1>
        <Divider />
        <p style={{ color: "#a07040", fontSize: "13px", letterSpacing: "0.2em", margin: "6px 0 2px" }}>24 October 2026</p>
        <p style={{ color: "#a07040", fontSize: "13px" }}>KwaZulu-Natal, South Africa</p>
        <p style={{ color: "#a07040", fontSize: "12px", fontStyle: "italic", marginTop: "28px" }}>
          🐃 &nbsp;"Isibaya sakhe" · His cattle, Her family, Their union
        </p>
        <button onClick={() => scrollTo("rsvp")} style={{
          marginTop: "36px", padding: "14px 40px", borderRadius: "999px",
          border: "1px solid #c8780a", background: "transparent", color: "#c8780a",
          fontSize: "12px", letterSpacing: "0.28em", textTransform: "uppercase",
          cursor: "pointer", fontFamily: "Georgia,serif",
        }}>
          RSVP Now ✦
        </button>
      </section>

      {/* LOVE STORY */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(200,120,10,0.12)", textAlign: "center",
        background: "rgba(17,8,0,0.6)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionHeader sub="Our Story" title="A Love Written By Destiny" note="" />
          <p style={{ color: "#a07040", fontSize: "16px", lineHeight: 2, marginTop: "24px" }}>
            Through every season, every challenge, and every blessing, our hearts found home in one another.
            What began as a beautiful friendship blossomed into a love rooted deeply in faith, family, culture, and purpose.
          </p>
        </div>
      </section>

      {/* CEREMONY */}
      <section id="ceremony" style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <SectionHeader sub="Indlela Yethu" title="Our Path" note="The Traditional Journey" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "24px", marginTop: "48px" }}>
          {[
            { time: "09:00", title: "Umabo", sub: "The Traditional Union", desc: "Sacred exchange of gifts and vows between two families, honouring Zulu custom and ancestral blessing." },
            { time: "13:00", title: "Umgidi", sub: "The Celebration", desc: "Music, dance, and feasting with loved ones as we celebrate the joining of two families into one." },
            { time: "17:00", title: "Ukuphuma", sub: "The Grand Send-Off", desc: "The bride's ceremonial farewell, escorted from her family home with singing and ululation." },
          ].map(c => (
            <div key={c.title} style={{ border: "1px solid rgba(200,120,10,0.22)", borderRadius: "16px",
              padding: "28px 24px", background: "rgba(200,120,10,0.04)", textAlign: "center" }}>
              <p style={{ color: "#c8780a", fontSize: "12px", letterSpacing: "0.2em", marginBottom: "10px" }}>{c.time}</p>
              <h3 style={{ color: "#f5e6c8", fontSize: "22px", margin: "0 0 4px" }}>{c.title}</h3>
              <p style={{ color: "rgba(200,120,10,0.7)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}>{c.sub}</p>
              <p style={{ color: "#a07040", fontSize: "13px", lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(200,120,10,0.12)", textAlign: "center" }}>
        <SectionHeader sub="Gallery" title="Our Moments" note="" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "24px",
          maxWidth: "1000px", margin: "48px auto 0" }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ aspectRatio: "3/4", borderRadius: "32px", overflow: "hidden",
              background: "rgba(200,120,10,0.08)", border: "1px solid rgba(200,120,10,0.2)" }}>
              <img src={`/images/gallery${i}.jpg`} alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s",
                  display: "block" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.1)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
              />
            </div>
          ))}
        </div>
        <p style={{ color: "rgba(200,120,10,0.5)", fontSize: "12px", marginTop: "24px", fontStyle: "italic" }}>
          Add your photos as gallery1.jpg, gallery2.jpg, gallery3.jpg inside public/images/
        </p>
      </section>

      {/* VENUE */}
      <section id="venue" style={{ padding: "80px 24px", borderTop: "1px solid rgba(200,120,10,0.12)", textAlign: "center" }}>
        <SectionHeader sub="Indawo Yomcimbi" title="The Venue" note="Where we celebrate" />
        <div style={{ maxWidth: "520px", margin: "48px auto 0", border: "1px solid rgba(200,120,10,0.28)",
          borderRadius: "20px", overflow: "hidden" }}>
          <div style={{ padding: "40px 36px", background: "rgba(200,120,10,0.06)" }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>🏔️</div>
            <h3 style={{ color: "#f5e6c8", fontSize: "24px", margin: "0 0 6px" }}>Nkosi Heritage Estate</h3>
            <p style={{ color: "#a07040", fontSize: "13px", marginBottom: "28px" }}>KwaZulu-Natal, South Africa</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", textAlign: "left", marginBottom: "28px" }}>
              {[["Date","Saturday, 24 October 2026"],["Time","09:00 – 20:00"],["Dress Code","Traditional African Elegance"],["Colours","Ochre, Rust & Ivory"]].map(([k, v]) => (
                <div key={k}>
                  <p style={{ color: "#c8780a", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>{k}</p>
                  <p style={{ color: "#f5e6c8", fontSize: "13px" }}>{v}</p>
                </div>
              ))}
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer"
              style={{ display: "inline-block", padding: "11px 28px", borderRadius: "999px",
                border: "1px solid #c8780a", color: "#c8780a", fontSize: "11px",
                letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}>
              Open in Maps ✦
            </a>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(200,120,10,0.12)", textAlign: "center" }}>
        <SectionHeader sub="Uhlelo Lwezikhathi" title="Counting the Days" note="Until we are united" />
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(12px,4vw,40px)", marginTop: "48px", flexWrap: "wrap" }}>
          {[["days","Izinsuku · Days"],["hours","Amahora · Hours"],["minutes","Amaminiti · Minutes"],["seconds","Amasekendi · Seconds"]].map(([k, label]) => (
            <div key={k} style={{ textAlign: "center" }}>
              <div style={{ width: "clamp(70px,18vw,110px)", height: "clamp(70px,18vw,110px)",
                border: "1px solid rgba(200,120,10,0.4)", borderRadius: "16px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(200,120,10,0.07)", marginBottom: "10px" }}>
                <span style={{ color: "#f5e6c8", fontSize: "clamp(28px,8vw,48px)" }}>{pad(countdown[k])}</span>
              </div>
              <p style={{ color: "rgba(200,120,10,0.75)", fontSize: "10px", letterSpacing: "0.12em" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" style={{ padding: "80px 24px", borderTop: "1px solid rgba(200,120,10,0.12)", textAlign: "center" }}>
        <SectionHeader sub="Bhalisa · Register" title="Confirm Your Attendance" note="Siyakumema — You are invited" />
        {submitted ? (
          <div style={{ maxWidth: "420px", margin: "48px auto 0", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🐃</div>
            <h3 style={{ color: "#f5e6c8", fontSize: "26px", marginBottom: "10px" }}>Siyabonga</h3>
            <p style={{ color: "#a07040", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
              We give thanks for your response. It would be an honour to celebrate with you.
            </p>
            <button onClick={() => setSubmitted(false)}
              style={{ background: "none", border: "none", color: "#c8780a", fontSize: "11px",
                letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}>
              Vala · Close
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            style={{ maxWidth: "500px", margin: "48px auto 0", display: "flex", flexDirection: "column", gap: "18px" }}>
            {[["Full Name *","text","name",true],["Email Address","email","email",false],["Phone Number","tel","phone",false]].map(([label, type, key, req]) => (
              <div key={key} style={{ textAlign: "left" }}>
                <label style={{ display: "block", color: "#c8780a", fontSize: "10px", letterSpacing: "0.22em",
                  textTransform: "uppercase", marginBottom: "8px" }}>{label}</label>
                <input required={req} type={type} value={formData[key]}
                  onChange={e => setFormData({ ...formData, [key]: e.target.value })}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", boxSizing: "border-box",
                    background: "rgba(200,120,10,0.08)", border: "1px solid rgba(200,120,10,0.28)",
                    color: "#f5e6c8", fontSize: "13px", outline: "none", fontFamily: "Georgia,serif" }} />
              </div>
            ))}
            <div style={{ textAlign: "left" }}>
              <label style={{ display: "block", color: "#c8780a", fontSize: "10px", letterSpacing: "0.22em",
                textTransform: "uppercase", marginBottom: "10px" }}>Will you attend? *</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[["accept","Ngizobuya — Accept"],["decline","Ngixolele — Decline"]].map(([val, lbl]) => (
                  <button key={val} type="button" onClick={() => setFormData({ ...formData, attending: val })}
                    style={{ padding: "12px", borderRadius: "12px", cursor: "pointer", fontFamily: "Georgia,serif",
                      fontSize: "12px", letterSpacing: "0.1em",
                      border: `1px solid ${formData.attending === val ? "#c8780a" : "rgba(200,120,10,0.28)"}`,
                      background: formData.attending === val ? "rgba(200,120,10,0.2)" : "rgba(200,120,10,0.04)",
                      color: formData.attending === val ? "#f5e6c8" : "#a07040" }}>
                    {lbl}
                  </button>
                ))}
              </div>
            </div>
            {formData.attending === "accept" && (
              <>
                <div style={{ textAlign: "left" }}>
                  <label style={{ display: "block", color: "#c8780a", fontSize: "10px", letterSpacing: "0.22em",
                    textTransform: "uppercase", marginBottom: "8px" }}>Number of Guests</label>
                  <select value={formData.guests} onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "12px",
                      background: "#1a0e00", border: "1px solid rgba(200,120,10,0.28)",
                      color: "#f5e6c8", fontSize: "13px", outline: "none", fontFamily: "Georgia,serif" }}>
                    {["1","2","3","4"].map(n => <option key={n}>{n}</option>)}
                  </select>
                </div>
                <div style={{ textAlign: "left" }}>
                  <label style={{ display: "block", color: "#c8780a", fontSize: "10px", letterSpacing: "0.22em",
                    textTransform: "uppercase", marginBottom: "8px" }}>Meal Preference</label>
                  <input type="text" value={formData.meal}
                    onChange={e => setFormData({ ...formData, meal: e.target.value })}
                    placeholder="Traditional, Vegetarian…"
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", boxSizing: "border-box",
                      background: "rgba(200,120,10,0.08)", border: "1px solid rgba(200,120,10,0.28)",
                      color: "#f5e6c8", fontSize: "13px", outline: "none", fontFamily: "Georgia,serif" }} />
                </div>
              </>
            )}
            <div style={{ textAlign: "left" }}>
              <label style={{ display: "block", color: "#c8780a", fontSize: "10px", letterSpacing: "0.22em",
                textTransform: "uppercase", marginBottom: "8px" }}>Message to the Couple</label>
              <textarea rows={3} value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your wishes…"
                style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", boxSizing: "border-box",
                  background: "rgba(200,120,10,0.08)", border: "1px solid rgba(200,120,10,0.28)",
                  color: "#f5e6c8", fontSize: "13px", outline: "none", resize: "none", fontFamily: "Georgia,serif" }} />
            </div>
            <button type="submit" style={{
              padding: "15px", borderRadius: "999px", border: "none",
              background: "#c8780a", color: "#fff", fontSize: "12px",
              letterSpacing: "0.28em", textTransform: "uppercase",
              cursor: "pointer", fontFamily: "Georgia,serif",
              boxShadow: "0 4px 20px rgba(200,120,10,0.35)",
            }}>
              Thumela — Send Confirmation ✦
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "48px 24px", borderTop: "1px solid rgba(200,120,10,0.12)", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
          {[...Array(10)].map((_, i) => <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(200,120,10,0.35)" }} />)}
        </div>
        <p style={{ color: "#f5e6c8", fontSize: "18px", marginBottom: "6px" }}>Thobelinkosi & Koketso</p>
        <p style={{ color: "rgba(200,120,10,0.55)", fontSize: "11px", letterSpacing: "0.18em" }}>24 · 10 · 2026 · KwaZulu-Natal</p>
        <p style={{ color: "#a07040", fontSize: "12px", fontStyle: "italic", marginTop: "16px" }}>
          "Love is the thread that binds two souls together."
        </p>
      </footer>
    </div>
  );
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center", margin: "10px 0" }}>
      <div style={{ height: "1px", width: "60px", background: "rgba(200,120,10,0.4)" }} />
      <div style={{ width: "8px", height: "8px", background: "#c8780a", transform: "rotate(45deg)" }} />
      <div style={{ height: "1px", width: "60px", background: "rgba(200,120,10,0.4)" }} />
    </div>
  );
}

function SectionHeader({ sub, title, note }) {
  return (
    <>
      <p style={{ color: "#c8780a", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "6px" }}>{sub}</p>
      <h2 style={{ color: "#f5e6c8", fontSize: "clamp(26px,6vw,42px)", margin: "0 0 6px" }}>{title}</h2>
      {note && <p style={{ color: "#a07040", fontSize: "13px", marginBottom: "8px" }}>{note}</p>}
      <Divider />
    </>
  );
}
