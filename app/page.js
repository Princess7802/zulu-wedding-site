"use client";

import { useState, useEffect } from "react";

export default function ZuluHeritageWeddingInvitation() {
  const [phase, setPhase] = useState("idle");
  const [showFull, setShowFull] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    guests: "1",
    meal: "",
    dietary: "",
    message: "",
  });
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
    if (phase !== "idle") return;
    setPhase("flapping");
    setTimeout(() => setShowFull(true), 950);
  };

  const pad = (n) => String(n).padStart(2, "0");
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  if (!showFull) {
    return (
      <div
        onClick={handleOpen}
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          cursor: phase === "idle" ? "pointer" : "default",
          fontFamily: "Georgia, 'Times New Roman', serif",
          animation:
            phase === "flapping" ? "fadeOut 0.95s ease forwards" : "none",
        }}
      >
        {/* Cowhide image from public/images/envelope.png */}
        <img
          src="/images/envelope.jpg"
          alt="envelope"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        {/* Wax seal SVG centred over the photo */}

        {/* Skip button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowFull(true);
          }}
          style={{
            position: "absolute",
            top: "20px",
            right: "24px",
            zIndex: 50,
            background: "rgba(0,0,0,0.32)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "rgba(255,255,255,0.9)",
            padding: "8px 22px",
            borderRadius: "999px",
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            cursor: "pointer",
            backdropFilter: "blur(6px)",
            fontFamily: "Georgia,serif",
          }}
        >
          Skip ›
        </button>

        {/* Tap prompt */}
        {phase === "idle" && (
          <p
            style={{
              position: "absolute",
              bottom: "36px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 20,
              color: "rgba(255,255,255,0.85)",
              fontSize: "12px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textShadow: "0 1px 6px rgba(0,0,0,0.7)",
              animation: "tapPulse 2s ease-in-out infinite",
              whiteSpace: "nowrap",
            }}
          >
            Tap to open
          </p>
        )}

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap');
          @keyframes tapPulse { 0%,100%{opacity:.85} 50%{opacity:.3} }
          @keyframes fadeOut {
            0% { opacity: 1; transform: scale(1); }
            60% { opacity: 0.6; transform: scale(1.03); }
            100% { opacity: 0; transform: scale(1.06); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      className="cowhide-bg"
      style={{
        minHeight: "100vh",
        background: "url('/images/cowhide.jpg') repeat center center / 400px",
        color: "#fff",
        fontFamily: "Georgia,serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        .cowhide-bg::before {
          content: "";
          position: fixed;
          inset: 0;
          background: rgba(10, 5, 0, 0.78);
          z-index: 0;
          pointer-events: none;
        }
        .cowhide-bg > * {
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* INTRO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 40px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "700px",
            width: "100%",
          }}
        >
          <p
            style={{
              color: "rgba(200,160,80,0.7)",
              fontSize: "11px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              marginBottom: "40px",
              fontFamily: "Georgia,serif",
            }}
          >
            Umembeso · You Are Invited
          </p>
          <h2
            style={{
              color: "#f5e6c8",
              fontSize: "clamp(18px,4vw,28px)",
              fontFamily: "'Cinzel', Georgia, serif",
              fontWeight: "600",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              margin: "0 0 32px",
              lineHeight: 1.4,
            }}
          >
            The Mahlangu and Molete Families
          </h2>
          <p
            style={{
              color: "rgba(245,230,200,0.75)",
              fontSize: "clamp(14px,2.5vw,18px)",
              fontStyle: "italic",
              lineHeight: 1.8,
              marginBottom: "40px",
              fontFamily: "Georgia,serif",
            }}
          >
            joyfully request the honour of your presence at the wedding
            celebration of their children
          </p>
          <h1
            style={{
              color: "#c8a84b",
              fontSize: "clamp(36px,8vw,62px)",
              fontFamily: "'Cinzel', Georgia, serif",
              fontWeight: "400",
              margin: "0 0 32px",
              lineHeight: 1.1,
            }}
          >
            Thobelinkosi & Koketso
          </h1>
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "#c8a84b",
              margin: "0 auto 32px",
            }}
          />
          <p
            style={{
              color: "rgba(200,160,80,0.8)",
              fontSize: "clamp(10px,2vw,13px)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "Georgia,serif",
            }}
          >
            24 October 2026 · Suitability Gardens, Gauteng
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "40px 0 0",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "80px",
              background:
                "linear-gradient(to bottom, rgba(200,160,60,0.8), transparent)",
              animation: "scrollLine 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          gap: "clamp(16px,4vw,48px)",
          padding: "14px 24px",
          background: "rgba(17,8,0,0.88)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(200,120,10,0.2)",
        }}
      >
        {[
          ["ceremony", "Ceremony"],
          ["venue", "Venue"],
          ["rsvp", "RSVP"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(200,160,80,0.8)",
              cursor: "pointer",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontFamily: "Georgia,serif",
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px 40px",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(200,160,60,0.6)",
            outline: "1px solid rgba(200,160,60,0.25)",
            outlineOffset: "8px",
            padding: "36px 28px",
            width: "100%",
            maxWidth: "420px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#c8a84b",
              fontSize: "10px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontFamily: "Georgia,serif",
            }}
          >
            Umembeso x Serwalo
          </p>
          <Divider />
          <h1
            style={{
              fontSize: "clamp(2rem,8vw,4rem)",
              color: "#f5e6c8",
              margin: "0",
              lineHeight: 1.1,
              fontFamily: "'Cinzel', Georgia, serif",
              fontWeight: "400",
              textTransform: "capitalize",
            }}
          >
            Thobelinkosi
          </h1>
          <span
            style={{
              color: "#c8a84b",
              fontSize: "clamp(1.4rem,4vw,2.5rem)",
              display: "block",
              margin: "4px 0",
              fontFamily: "'Cinzel', Georgia, serif",
              fontWeight: "400",
            }}
          >
            &amp;
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem,8vw,4rem)",
              color: "#f5e6c8",
              margin: "0 0 16px",
              lineHeight: 1.1,
              fontFamily: "'Cinzel', Georgia, serif",
              fontWeight: "400",
              textTransform: "capitalize",
            }}
          >
            Koketso
          </h1>
          <Divider />
          <p
            style={{
              color: "#a07040",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              margin: "14px 0 4px",
              fontFamily: "Georgia,serif",
            }}
          >
            24 October 2026
          </p>
          <p
            style={{
              color: "#a07040",
              fontSize: "12px",
              fontStyle: "italic",
              marginBottom: "4px",
              fontFamily: "Georgia,serif",
            }}
          >
            Umembeso · Serwalo
          </p>
          <p
            style={{
              color: "#a07040",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontFamily: "Georgia,serif",
            }}
          >
            🐃 &nbsp;"Isibaya sakhe" · His cattle, Her family, Their union
          </p>
          <button
            onClick={() => scrollTo("rsvp")}
            style={{
              padding: "10px 36px",
              borderRadius: "0",
              border: "1px solid #c8a84b",
              background: "transparent",
              color: "#c8a84b",
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "Georgia,serif",
            }}
          >
            RSVP - Bhalisa
          </button>
        </div>
      </section>

      {/* Animated scroll line */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "80px",
            background:
              "linear-gradient(to bottom, rgba(200,160,60,0.8), transparent)",
            animation: "scrollLine 1.8s ease-in-out infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
        }
      `}</style>

      {/* CEREMONY */}
      <section
        id="ceremony"
        style={{
          padding: "80px 24px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          background: "transparent",
        }}
      >
        <SectionHeader
          sub="Umembeso x Serwalo"
          title="The Ceremonies"
          note="Traditional Gift-Giving Celebrations"
        />
        <div
          style={{
            maxWidth: "600px",
            margin: "48px auto 0",
            border: "1px solid rgba(200,120,10,0.22)",
            borderRadius: "16px",
            padding: "40px 36px",
            background: "rgba(200,120,10,0.04)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#c8780a",
              fontSize: "12px",
              letterSpacing: "0.2em",
              marginBottom: "10px",
            }}
          >
            24 October 2026
          </p>
          <h3
            style={{
              color: "#f5e6c8",
              fontSize: "28px",
              margin: "0 0 4px",
            }}
          >
            Serwalo
          </h3>
          <p
            style={{
              color: "rgba(200,120,10,0.7)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            A Gesture of Thanksgiving
          </p>
          <p style={{ color: "#a07040", fontSize: "14px", lineHeight: 1.9 }}>
            Serwalo is a heartfelt ceremony of thanksgiving offered to the
            groom's family in honour of the bride price paid. It officially
            marks the joyful acceptance of the bride into her new in-laws' home
            — a sacred moment where gratitude, blessing, and belonging are woven
            together as two families become one.
          </p>
        </div>
        {/* Umembeso Block */}
        <div
          style={{
            maxWidth: "600px",
            margin: "32px auto 0",
            border: "1px solid rgba(200,120,10,0.22)",
            borderRadius: "16px",
            padding: "40px 36px",
            background: "rgba(200,120,10,0.04)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#c8780a",
              fontSize: "12px",
              letterSpacing: "0.2em",
              marginBottom: "10px",
            }}
          >
            24 October 2026
          </p>
          <h3
            style={{
              color: "#f5e6c8",
              fontSize: "28px",
              margin: "0 0 4px",
            }}
          >
            Umembeso
          </h3>
          <p
            style={{
              color: "rgba(200,120,10,0.7)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            The Gift-Giving Ceremony
          </p>
          <p style={{ color: "#a07040", fontSize: "14px", lineHeight: 1.9 }}>
            Umembeso is a vibrant and deeply symbolic traditional Zulu ceremony
            where the groom's family brings carefully chosen gifts to the
            bride's family. Each gift carries meaning — honouring the bride,
            celebrating her worth, and weaving two families together in love,
            gratitude, and tradition.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section
        style={{
          padding: "80px 24px",
          borderTop: "1px solid rgba(200,120,10,0.12)",
          textAlign: "center",
        }}
      >
        <SectionHeader sub="Gallery" title="Our Moments" note="" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "24px",
            maxWidth: "1000px",
            margin: "48px auto 0",
          }}
        >
          {["couple", "molete", "zulus"].map((name) => (
            <div
              key={name}
              style={{
                aspectRatio: "3/4",
                borderRadius: "32px",
                overflow: "hidden",
                background: "rgba(200,120,10,0.08)",
                border: "1px solid rgba(200,120,10,0.2)",
              }}
            >
              <img
                src={`/images/${name}.jpg`}
                alt={name}
                onError={(e) => console.log("failed to load", name)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.7s",
                  display: "block",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </section>

      {/* VENUE */}
      <section
        id="venue"
        style={{
          padding: "80px 24px",
          borderTop: "1px solid rgba(200,120,10,0.12)",
          textAlign: "center",
        }}
      >
        <SectionHeader
          sub="Indawo Yomcimbi - Lefelo la Phuthego"
          title="The Venue"
          note="Where We Celebrate"
        />
        <div
          style={{
            maxWidth: "520px",
            margin: "48px auto 0",
            border: "1px solid rgba(200,120,10,0.28)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "40px 36px",
              background: "rgba(200,120,10,0.06)",
            }}
          >
            <h3
              style={{ color: "#f5e6c8", fontSize: "24px", margin: "0 0 6px" }}
            >
              Suitability Gardens
            </h3>
            <p
              style={{
                color: "#a07040",
                fontSize: "13px",
                marginBottom: "28px",
              }}
            >
              Gauteng, South Africa
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                textAlign: "left",
                marginBottom: "28px",
              }}
            >
              {[
                ["Date", "Saturday, 24 October 2026"],
                ["Time", "09:00 – 20:00"],
                ["Dress Code", "Traditional African Elegance"],
                ["Colours", "All acceptable"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p
                    style={{
                      color: "#c8780a",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {k}
                  </p>
                  <p style={{ color: "#f5e6c8", fontSize: "13px" }}>{v}</p>
                </div>
              ))}
            </div>
            <a
              href="https://www.google.com/maps/dir//Suitability+Gardens,+236+1st+Rd,+Walkers+Fruit+Farms+SH,+De+Deur,+1961/@-26.19429,28.217574,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e94ff3aa18f4bc5:0x2cf1e71d08baf31f!2m2!1d27.9813308!2d-26.5264928?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "11px 28px",
                borderRadius: "999px",
                border: "1px solid #c8780a",
                color: "#c8780a",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Open in Maps ✦
            </a>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section
        style={{
          padding: "80px 24px",
          borderTop: "1px solid rgba(200,120,10,0.12)",
          textAlign: "center",
        }}
      >
        <SectionHeader
          sub="Thulaganyo ya nako"
          title="Counting the Days"
          note="Until we are united"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(12px,4vw,40px)",
            marginTop: "48px",
            flexWrap: "wrap",
          }}
        >
          {[
            ["days", "Malatsi a le · Days"],
            ["hours", "Diura · Hours"],
            ["minutes", "Metsotso · Minutes"],
            ["seconds", "Metsotswana · Seconds"],
          ].map(([k, label]) => (
            <div key={k} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "clamp(70px,18vw,110px)",
                  height: "clamp(70px,18vw,110px)",
                  border: "1px solid rgba(200,120,10,0.4)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(200,120,10,0.07)",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{ color: "#f5e6c8", fontSize: "clamp(28px,8vw,48px)" }}
                >
                  {pad(countdown[k])}
                </span>
              </div>
              <p
                style={{
                  color: "rgba(200,120,10,0.75)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        style={{
          padding: "80px 24px",
          borderTop: "1px solid rgba(200,120,10,0.12)",
          textAlign: "center",
        }}
      >
        <SectionHeader
          sub="Bhalisa · Register"
          title="Confirm Your Attendance"
          note="O a Lalediwa — You are invited"
        />
        {submitted ? (
          <div
            style={{
              maxWidth: "420px",
              margin: "48px auto 0",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🐃</div>
            <h3
              style={{
                color: "#f5e6c8",
                fontSize: "26px",
                marginBottom: "10px",
              }}
            >
              Rea Leboga
            </h3>
            <p
              style={{
                color: "#a07040",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              We give thanks for your response. It would be an honour to
              celebrate with you.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                background: "none",
                border: "none",
                color: "#c8780a",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Tswala · Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await fetch("https://formspree.io/f/xbdbrdvo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });
              setSubmitted(true);
            }}
            style={{
              maxWidth: "500px",
              margin: "48px auto 0",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {[
              ["Full Name *", "text", "name", true],
              ["Phone Number", "tel", "phone", false],
            ].map(([label, type, key, req]) => (
              <div key={key} style={{ textAlign: "left" }}>
                <label
                  style={{
                    display: "block",
                    color: "#c8780a",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {label}
                </label>
                <input
                  required={req}
                  type={type}
                  value={formData[key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    boxSizing: "border-box",
                    background: "rgba(200,120,10,0.08)",
                    border: "1px solid rgba(200,120,10,0.28)",
                    color: "#f5e6c8",
                    fontSize: "13px",
                    outline: "none",
                    fontFamily: "Georgia,serif",
                  }}
                />
              </div>
            ))}
            <div style={{ textAlign: "left" }}>
              <label
                style={{
                  display: "block",
                  color: "#c8780a",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Will you attend? *
              </label>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                {[
                  ["accept", "Ngizobuya — Accept"],
                  ["decline", "Ngixolele — Decline"],
                ].map(([val, lbl]) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: val })}
                    style={{
                      padding: "12px",
                      borderRadius: "12px",
                      cursor: "pointer",
                      fontFamily: "Georgia,serif",
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      border: `1px solid ${formData.attending === val ? "#c8780a" : "rgba(200,120,10,0.28)"}`,
                      background:
                        formData.attending === val
                          ? "rgba(200,120,10,0.2)"
                          : "rgba(200,120,10,0.04)",
                      color: formData.attending === val ? "#f5e6c8" : "#a07040",
                    }}
                  >
                    {lbl}
                  </button>
                ))}
              </div>
            </div>
            {formData.attending === "accept" && (
              <>
                <div style={{ textAlign: "left" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#c8780a",
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      background: "#1a0e00",
                      border: "1px solid rgba(200,120,10,0.28)",
                      color: "#f5e6c8",
                      fontSize: "13px",
                      outline: "none",
                      fontFamily: "Georgia,serif",
                    }}
                  >
                    {["1", "2", "3", "4"].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div style={{ textAlign: "left" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#c8780a",
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Any Allergies
                  </label>
                  <input
                    type="text"
                    value={formData.meal}
                    onChange={(e) =>
                      setFormData({ ...formData, meal: e.target.value })
                    }
                    placeholder="Traditional, Vegetarian…"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      boxSizing: "border-box",
                      background: "rgba(200,120,10,0.08)",
                      border: "1px solid rgba(200,120,10,0.28)",
                      color: "#f5e6c8",
                      fontSize: "13px",
                      outline: "none",
                      fontFamily: "Georgia,serif",
                    }}
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              style={{
                padding: "15px",
                borderRadius: "999px",
                border: "none",
                background: "#c8780a",
                color: "#fff",
                fontSize: "12px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "Georgia,serif",
                boxShadow: "0 4px 20px rgba(200,120,10,0.35)",
              }}
            >
              Thumela — Send Confirmation ✦
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "48px 24px",
          borderTop: "1px solid rgba(200,120,10,0.12)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "rgba(200,120,10,0.35)",
              }}
            />
          ))}
        </div>
        <p style={{ color: "#f5e6c8", fontSize: "18px", marginBottom: "6px" }}>
          Thobelinkosi & Koketso
        </p>
        <p
          style={{
            color: "rgba(200,120,10,0.55)",
            fontSize: "11px",
            letterSpacing: "0.18em",
          }}
        >
          24 · 10 · 2026 · Gauteng
        </p>
        <p
          style={{
            color: "#a07040",
            fontSize: "12px",
            fontStyle: "italic",
            marginTop: "16px",
          }}
        >
          "Love is the thread that binds two souls together."
        </p>
      </footer>
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        justifyContent: "center",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          height: "1px",
          width: "60px",
          background: "rgba(200,120,10,0.4)",
        }}
      />
      <div
        style={{
          width: "8px",
          height: "8px",
          background: "#c8780a",
          transform: "rotate(45deg)",
        }}
      />
      <div
        style={{
          height: "1px",
          width: "60px",
          background: "rgba(200,120,10,0.4)",
        }}
      />
    </div>
  );
}

function SectionHeader({ sub, title, note }) {
  return (
    <>
      <p
        style={{
          color: "#c8780a",
          fontSize: "11px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          marginBottom: "6px",
        }}
      >
        {sub}
      </p>
      <h2
        style={{
          color: "#f5e6c8",
          fontSize: "clamp(26px,6vw,42px)",
          margin: "0 0 6px",
        }}
      >
        {title}
      </h2>
      {note && (
        <p style={{ color: "#a07040", fontSize: "13px", marginBottom: "8px" }}>
          {note}
        </p>
      )}
      <Divider />
    </>
  );
}
