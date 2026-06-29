"use client";

import { useState, useEffect } from "react";

export default function ZuluHeritageWeddingInvitation() {
  const [phase, setPhase] = useState("closed");
  const [overlayGone, setOverlayGone] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    guests: "1",
    meal: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    setTimeout(() => {
      setPhase("zoom");
    }, 2900);
    setTimeout(() => {
      setOverlayGone(true);
    }, 3300);
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (!overlayGone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlayGone]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* SITE */}
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
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Great+Vibes&display=swap');
          .cowhide-bg::before {
            content: "";
            position: fixed;
            inset: 0;
            background: rgba(10, 5, 0, 0.78);
            z-index: 0;
            pointer-events: none;
          }
          .cowhide-bg > * { position: relative; z-index: 1; }
          @keyframes glowFlash {
            0%   { opacity: 0; }
            8%   { opacity: 0.9; }
            50%  { opacity: 0.8; }
            100% { opacity: 0; }
          }
          @keyframes scrollLine {
            0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
            50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
            100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
          }
          #rsvp {
            position: relative;
          }
          #rsvp::before {
            content: "";
            position: absolute;
            inset: 0;
            background: url('/images/cowhide.jpg') center / cover no-repeat;
            z-index: 0;
            pointer-events: none;
          }
          .invitation-card { position: relative; overflow: visible; }
          .invitation-card::before {
            content: "";
            position: absolute;
            inset: 14px;
            border: 1px solid rgba(200,160,60,.42);
            pointer-events: none;
            z-index: 1;
          }
          .invitation-card::after {
            content: "";
            position: absolute;
            inset: 19px;
            border: 1px solid rgba(200,160,60,.22);
            pointer-events: none;
            z-index: 1;
          }
        `}</style>

        {/* NAV */}
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
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "clamp(130px,15vw,160px) 16px clamp(40px,7vw,80px)",
            backgroundImage: "url('/images/cowhide.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              maxWidth: "640px",
            }}
          >
            <img
              src="/images/wax_seal.png"
              alt="Wax Seal"
              style={{
                position: "absolute",
                top: "-89px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "105px",
                zIndex: 10,
              }}
            />
            <div
              className="invitation-card"
              style={{
                position: "relative",
                background:
                  "linear-gradient(rgba(18,12,8,0.92), rgba(18,12,8,0.92))",
                border: "1px solid rgba(200,160,60,0.55)",
                padding:
                  "clamp(20px,4vw,44px) clamp(16px,6vw,72px) clamp(24px,4vw,52px)",
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 30px 70px rgba(0,0,0,.72)",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* ── Corner notch ornaments + pearl ── */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  zIndex: 20,
                }}
              >
                {/*
                  Notched corner pattern — ::before (7px) forms an L with a rectangular step
                  that passes through the ::after (12px) corner point, connecting both borders.
                  Each SVG covers and redraws the corner area with the step pattern.
                  Background rect matches card colour to cover the raw CSS right-angle corners.
                */}

                {/* Top-left */}
                <svg
                  style={{ position: "absolute", top: 0, left: 0 }}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <rect width="40" height="40" fill="#120c08" />
                  <path
                    d="M40 14 L19 14 L19 19 L14 19 L14 40"
                    stroke="#c8a84b"
                    strokeWidth="1.3"
                    strokeLinejoin="miter"
                  />
                  <path
                    d="M40 19 L19 19 L19 40"
                    stroke="rgba(200,160,60,0.65)"
                    strokeWidth="1.0"
                    strokeLinejoin="miter"
                  />
                </svg>

                {/* Top-right — ::before at SVG x=26, ::after at SVG x=21 */}
                <svg
                  style={{ position: "absolute", top: 0, right: 0 }}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <rect width="40" height="40" fill="#120c08" />
                  <path
                    d="M0 14 L21 14 L21 19 L26 19 L26 40"
                    stroke="#c8a84b"
                    strokeWidth="1.3"
                    strokeLinejoin="miter"
                  />
                  <path
                    d="M0 19 L21 19 L21 40"
                    stroke="rgba(200,160,60,0.65)"
                    strokeWidth="1.0"
                    strokeLinejoin="miter"
                  />
                </svg>

                {/* Bottom-left — ::before at SVG y=26, ::after at SVG y=21 */}
                <svg
                  style={{ position: "absolute", bottom: 0, left: 0 }}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <rect width="40" height="40" fill="#120c08" />
                  <path
                    d="M14 0 L14 21 L19 21 L19 26 L40 26"
                    stroke="#c8a84b"
                    strokeWidth="1.3"
                    strokeLinejoin="miter"
                  />
                  <path
                    d="M19 0 L19 21 L40 21"
                    stroke="rgba(200,160,60,0.65)"
                    strokeWidth="1.0"
                    strokeLinejoin="miter"
                  />
                </svg>

                {/* Bottom-right */}
                <svg
                  style={{ position: "absolute", bottom: 0, right: 0 }}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <rect width="40" height="40" fill="#120c08" />
                  <path
                    d="M26 0 L26 21 L21 21 L21 26 L0 26"
                    stroke="#c8a84b"
                    strokeWidth="1.3"
                    strokeLinejoin="miter"
                  />
                  <path
                    d="M21 0 L21 21 L0 21"
                    stroke="rgba(200,160,60,0.65)"
                    strokeWidth="1.0"
                    strokeLinejoin="miter"
                  />
                </svg>

                {/* Pearl — centred between ::before (14px) and ::after (19px) from bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "7px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle at 35% 32%, #f8e080, #c89020, #7a5010)",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.6)",
                    }}
                  />
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(ellipse at 36% 28%, rgba(255,255,255,1) 0%, rgba(248,244,240,1) 18%, rgba(225,220,213,0.97) 40%, rgba(198,192,185,0.94) 60%, rgba(170,164,157,0.97) 78%, rgba(145,140,133,1) 100%)",
                      boxShadow:
                        "0 3px 10px rgba(0,0,0,0.75), inset 0 2px 5px rgba(255,255,255,0.95), inset 0 -3px 6px rgba(0,0,0,0.3)",
                      border: "0.5px solid rgba(155,150,143,0.4)",
                    }}
                  />
                  <div
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle at 35% 32%, #f8e080, #c89020, #7a5010)",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.6)",
                    }}
                  />
                </div>
              </div>
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
                Tlhabiso ya Magadi x Umembeso
              </p>
              <CardDivider />
              <h2
                style={{
                  color: "#f5e6c8",
                  fontSize: "clamp(12px,2.5vw,16px)",
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontWeight: "600",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  margin: "12px 0 10px",
                  lineHeight: 1.5,
                }}
              >
                The Molete and Zulu Families
              </h2>
              <p
                style={{
                  color: "rgba(245,230,200,0.78)",
                  fontSize: "clamp(13px,2.5vw,16px)",
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  margin: "0 0 14px",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  textAlign: "center",
                }}
              >
                joyfully request the honour of your presence
                <br />
                while celebrating their children
              </p>
              <CardDivider />
              <h1
                style={{
                  fontSize: "clamp(2.4rem,7vw,5.5rem)",
                  color: "#f5e6c8",
                  margin: "0",
                  lineHeight: 1.1,
                  fontFamily: "'Great Vibes', cursive",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
              >
                Mntwana Thobelinkosi
              </h1>
              <span
                style={{
                  color: "#c8a84b",
                  fontSize: "clamp(1.4rem,4vw,2.5rem)",
                  display: "block",
                  margin: "4px 0",
                  fontFamily: "'Great Vibes', cursive",
                  fontWeight: "400",
                }}
              >
                &amp;
              </span>
              <h1
                style={{
                  fontSize: "clamp(2.4rem,7vw,5.5rem)",
                  color: "#f5e6c8",
                  margin: "0 0 16px",
                  lineHeight: 1.1,
                  fontFamily: "'Great Vibes', cursive",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
              >
                Koketso
              </h1>
              <CardDivider />
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "8px",
                }}
              >
                <img
                  src="/images/cow.png"
                  alt="cow"
                  style={{
                    width: "40px",
                    height: "34px",
                    objectFit: "contain",
                  }}
                />
              </div>
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
                "Isibaya sakhe" · His cattle, Her family, Their union
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
          </div>
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "8px 0",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "50px",
              background:
                "linear-gradient(to bottom, rgba(200,160,60,0.8), transparent)",
              animation: "scrollLine 1.8s ease-in-out infinite",
            }}
          />
        </div>

        {/* CEREMONY */}
        <section
          id="ceremony"
          style={{
            padding: "0",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/images/cowhide.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(10,6,2,0.35), rgba(10,6,2,0.75))",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: "520px",
              margin: "0 auto",
              padding: "20px 16px clamp(40px,6vw,80px)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <img
                src="/images/wax_seal.png"
                alt="T&K seal"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </div>
            <p
              style={{
                color: "#c8a46b",
                fontSize: "9px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "4px",
                fontFamily: "Georgia,serif",
              }}
            >
              Tlhabiso Ya Magadi x Umembeso
            </p>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "clamp(36px,8vw,80px)",
                letterSpacing: "-0.02em",
                margin: "0 0 4px",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: "400",
                lineHeight: 1.1,
              }}
            >
              The Ceremonies
            </h2>
            <p
              style={{
                color: "#d4b483",
                fontSize: "15px",
                fontStyle: "italic",
                marginBottom: "8px",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Traditional Gift-Giving Celebrations
            </p>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                margin: "20px auto 0",
              }}
            >
              {/* TLHABISO CARD */}
              <div
                style={{
                  position: "relative",
                  border: "1px solid rgba(201,160,94,0.75)",
                  borderRadius: "10px",
                  padding: "24px",
                  background: "rgba(18,12,8,0.82)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "5px",
                    right: "5px",
                    bottom: "5px",
                    border: "1px solid rgba(201,160,94,0.25)",
                    borderRadius: "8px",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ flexShrink: 0 }}>
                    <img
                      src="/images/cattle-icon.png"
                      alt="Cattle"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#f5e6c8",
                        fontSize: "32px",
                        margin: "0 0 2px",
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: "400",
                        lineHeight: 1.1,
                        textAlign: "left",
                      }}
                    >
                      Tlhabiso ya Magadi
                    </h3>
                    <p
                      style={{
                        color: "#cfa76d",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        margin: 0,
                        fontFamily: "Georgia,serif",
                        textAlign: "left",
                      }}
                    >
                      A Gesture of Thanksgiving
                    </p>
                  </div>
                </div>
                <Divider />
                <p
                  style={{
                    color: "#c8b89a",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    margin: "10px 0 0",
                    fontFamily: "Georgia,serif",
                  }}
                >
                  A sacred and joyous thanksgiving offered to the Groom's family
                  in honour of the Magadi paid. It is a beautiful step in the
                  customary journey towards the wedding celebration.
                </p>
              </div>
              {/* UMEMBESO CARD */}
              <div
                style={{
                  position: "relative",
                  border: "1px solid rgba(201,160,94,0.75)",
                  borderRadius: "10px",
                  padding: "24px",
                  background: "rgba(18,12,8,0.82)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "5px",
                    right: "5px",
                    bottom: "5px",
                    border: "1px solid rgba(201,160,94,0.25)",
                    borderRadius: "8px",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ flexShrink: 0 }}>
                    <img
                      src="/images/shield-icon.png"
                      alt="Shield"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#f5e6c8",
                        fontSize: "32px",
                        margin: "0 0 2px",
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: "400",
                        lineHeight: 1.1,
                        textAlign: "left",
                      }}
                    >
                      Umembeso
                    </h3>
                    <p
                      style={{
                        color: "#cfa76d",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        margin: 0,
                        fontFamily: "Georgia,serif",
                      }}
                    >
                      The Gift-Giving Ceremony
                    </p>
                  </div>
                </div>
                <Divider />
                <p
                  style={{
                    color: "#c8b89a",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    margin: "10px 0 0",
                    fontFamily: "Georgia,serif",
                  }}
                >
                  A vibrant and deeply symbolic Zulu ceremony where the Groom's
                  family presents carefully chosen gifts to the Bride's family.
                  Each gift carries meaning, honouring the Bride and expressing
                  gratitude while weaving two families together in love, respect
                  and tradition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section
          style={{
            padding: "clamp(40px,6vw,80px) 16px",
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
            {[
              "couple",
              "molete",
              "zulus",
              "zulucouple",
              "zulu-family",
              "molete-family",
            ].map((name) => (
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
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s",
                    display: "block",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.1)")
                  }
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
            padding: "clamp(40px,6vw,80px) 0",
            borderTop: "1px solid rgba(160,112,64,0.12)",
            textAlign: "center",
          }}
        >
          <SectionHeader
            sub="Lefelo la Mokete · Indawo Yomcimbi"
            title="The Venue"
            note="Where We Celebrate"
          />
          <div style={{ margin: "clamp(24px,4vw,48px) 0 0" }}>
            <div
              style={{
                border: "1px solid rgba(160,112,64,0.22)",
                borderRadius: "22px",
                padding: "3px",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(160,112,64,0.48)",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    minHeight: "clamp(380px,58vh,650px)",
                    backgroundImage: "url('/images/venue.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(90deg,rgba(18,8,2,.92) 0%,rgba(18,8,2,.88) 22%,rgba(18,8,2,.50) 60%,rgba(18,8,2,0) 82%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "clamp(150px,46%,420px)",
                      height: "100%",
                      padding: "clamp(18px,3.5vw,60px) clamp(12px,2.5vw,40px)",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textAlign: "center",
                      gap: "clamp(10px,2vh,20px)",
                    }}
                  >
                    <img
                      src="/images/venue-ornament.png"
                      alt=""
                      style={{
                        width: "clamp(44px,7vw,105px)",
                        height: "auto",
                        display: "block",
                        marginBottom: 0,
                      }}
                    />
                    <h3
                      style={{
                        color: "#fdf6ec",
                        fontSize: "clamp(22px,3.8vw,48px)",
                        width: "100%",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        margin: 0,
                        lineHeight: 1.1,
                        fontWeight: 300,
                        letterSpacing: "0.02em",
                      }}
                    >
                      Suitability Gardens
                    </h3>
                    <p
                      style={{
                        color: "#a07040",
                        fontSize: "clamp(8px,1.5vw,12px)",
                        letterSpacing: "0.22em",
                        lineHeight: 1.6,
                        textTransform: "uppercase",
                        margin: 0,
                        fontWeight: 400,
                      }}
                    >
                      Gauteng, South Africa
                    </p>
                    <div
                      style={{
                        width: "28px",
                        height: "1px",
                        background: "#a07040",
                        marginBottom: 0,
                      }}
                    />
                    <p
                      style={{
                        color: "#e2cfa0",
                        fontSize: "clamp(11px,2vw,14px)",
                        width: "100%",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      A beautiful garden venue that blends natural elegance with
                      Nguni heritage.
                    </p>
                    <p
                      style={{
                        color: "#e2cfa0",
                        fontSize: "clamp(11px,2vw,14px)",
                        width: "100%",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      Surrounded by lush landscapes and designed to host
                      unforgettable celebrations with family and friends.
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Suitability+Gardens,+De+Deur,+South+Africa"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "6px",
                        width: "100%",
                        maxWidth: "clamp(120px,25vw,220px)",
                        padding: "clamp(7px,1.2vw,11px) clamp(10px,1.8vw,22px)",
                        borderRadius: "8px",
                        border: "1px solid rgba(160,112,64,0.65)",
                        color: "#a07040",
                        fontSize: "clamp(8px,1.2vw,11px)",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        background: "rgba(30,14,4,0.45)",
                      }}
                    >
                      <svg
                        width="10"
                        height="13"
                        viewBox="0 0 11 14"
                        fill="none"
                      >
                        <path
                          d="M5.5 0C2.46 0 0 2.46 0 5.5c0 4.125 5.5 8.5 5.5 8.5S11 9.625 11 5.5C11 2.46 8.54 0 5.5 0zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                          fill="#a07040"
                        />
                      </svg>
                      Open in Maps
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(18,8,2,0.85)",
                    borderTop: "1px solid rgba(160,112,64,0.25)",
                    padding:
                      "clamp(14px,2vw,24px) clamp(8px,2vw,30px) clamp(16px,2vw,30px)",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      marginBottom: "clamp(12px,2vw,28px)",
                    }}
                  >
                    <p
                      style={{
                        color: "#a07040",
                        fontSize: "clamp(7px,1.2vw,10px)",
                        letterSpacing: "0.35em",
                        textTransform: "uppercase",
                        margin: "0 0 6px 0",
                      }}
                    >
                      Venue Details
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "1px",
                          background: "rgba(160,112,64,0.5)",
                        }}
                      />
                      <span
                        style={{
                          color: "#a07040",
                          fontSize: "8px",
                          lineHeight: 1,
                        }}
                      >
                        ✦
                      </span>
                      <div
                        style={{
                          width: "30px",
                          height: "1px",
                          background: "rgba(160,112,64,0.5)",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      textAlign: "center",
                    }}
                  >
                    {[
                      {
                        icon: (
                          <svg
                            key="cal"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#a07040"
                            strokeWidth="1.3"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        ),
                        label: "Date",
                        value: (
                          <>
                            Saturday,
                            <br />
                            24 Oct 2026
                          </>
                        ),
                      },
                      {
                        icon: (
                          <svg
                            key="clock"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#a07040"
                            strokeWidth="1.3"
                          >
                            <circle cx="12" cy="12" r="9" />
                            <polyline points="12 7 12 12 15 15" />
                          </svg>
                        ),
                        label: "Time",
                        value: (
                          <>
                            12:00
                            <br />– Late
                          </>
                        ),
                      },
                      {
                        icon: (
                          <svg
                            key="guests"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#a07040"
                            strokeWidth="1.3"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        ),
                        label: "Guests",
                        value: (
                          <>
                            Family &amp;
                            <br />
                            Friends
                          </>
                        ),
                      },
                      {
                        icon: (
                          <svg
                            key="dress"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#a07040"
                            strokeWidth="1.3"
                          >
                            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
                          </svg>
                        ),
                        label: "Dress Code",
                        value: (
                          <>
                            Traditional
                            <br />
                            African Elegance
                          </>
                        ),
                      },
                    ].map(({ icon, label, value }, i, arr) => (
                      <div
                        key={label}
                        style={{
                          borderRight:
                            i < arr.length - 1
                              ? "1px solid rgba(160,112,64,0.22)"
                              : "none",
                          padding: "4px clamp(4px,1vw,8px) 0",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "8px",
                          }}
                        >
                          {icon}
                        </div>
                        <p
                          style={{
                            color: "#a07040",
                            fontSize: "clamp(6px,1vw,7px)",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            margin: "0 0 6px 0",
                          }}
                        >
                          {label}
                        </p>
                        <p
                          style={{
                            color: "#f5ede0",
                            fontSize: "clamp(9px,1.5vw,11px)",
                            lineHeight: 1.55,
                            margin: 0,
                            fontWeight: 600,
                          }}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "10px auto 0",
                maxWidth: "360px",
                border: "1px solid rgba(160,112,64,0.5)",
                borderRadius: "12px",
                background: "rgba(28,13,4,0.6)",
                backdropFilter: "blur(8px)",
                padding: "10px 20px 12px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#a07040",
                  fontSize: "9px",
                  marginBottom: "6px",
                }}
              >
                ✦
              </div>
              <p
                style={{
                  color: "#d4b480",
                  fontSize: "12px",
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', serif",
                  lineHeight: 1.7,
                  margin: "0 0 6px 0",
                }}
              >
                &ldquo;This is the day the Lord has made;
                <br />
                we will rejoice and be glad in it.&rdquo;
              </p>
              <p
                style={{
                  color: "#a07040",
                  fontSize: "7px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Psalm 118:24
              </p>
            </div>
          </div>
        </section>

        {/* RSVP            </div>
          </div>
        </section>

        {/* RSVP */}
        <section
          id="rsvp"
          style={{
            padding: "clamp(32px,5vw,60px) 16px",
            borderTop: "1px solid rgba(160,112,64,0.12)",
            textAlign: "center",
          }}
        >
          {/* Card — z-index:1 so it sits above the #rsvp::before cowhide layer */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "500px",
              margin: "0 auto",
              border: "1px solid rgba(160,112,64,0.35)",
              borderRadius: "22px",
              padding: "3px",
            }}
          >
            <div
              style={{
                border: "1px solid rgba(160,112,64,0.55)",
                borderRadius: "18px",
                background: "rgba(10,5,1,0.88)",
                backdropFilter: "blur(3px)",
                padding:
                  "clamp(20px,4vw,36px) clamp(14px,3vw,24px) clamp(18px,3vw,28px)",
              }}
            >
              {/* Section header — now inside the card */}
              <p
                style={{
                  color: "#a07040",
                  fontSize: "11px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  margin: "0 0 6px 0",
                }}
              >
                Kwadisa · Bhalisa · Register
              </p>
              <h2
                style={{
                  color: "#f5e6c8",
                  fontSize: "clamp(24px,5vw,38px)",
                  margin: "0 0 6px 0",
                }}
              >
                Confirm Your Attendance
              </h2>
              <p
                style={{
                  color: "#a07040",
                  fontSize: "13px",
                  margin: "0 0 8px 0",
                }}
              >
                O a Lalediwa · Umenyiwe · You are invited
              </p>
              <Divider />

              <div style={{ marginTop: "24px" }}>
                {submitted ? (
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "16px",
                      }}
                    >
                      <img
                        src="/images/cow.png"
                        alt="cow"
                        style={{ width: "64px", height: "auto" }}
                      />
                    </div>
                    <h3
                      style={{
                        color: "#f5e6c8",
                        fontSize: "26px",
                        marginBottom: "10px",
                      }}
                    >
                      Rea Leboga · Siyabonga · Thank You
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
                        color: "#a07040",
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
                    // AFTER
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const response = await fetch(
                        "https://api.web3forms.com/submit",
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            access_key: "123b5980-f212-4d2d-b418-8566bdcf61ec",
                            subject:
                              "New RSVP – Mntwana Thobelinkosi & Koketso Wedding",
                            from_name: "Wedding RSVP",
                            ...formData,
                          }),
                        },
                      );
                      const result = await response.json();
                      if (result.success) setSubmitted(true);
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "18px",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="botcheck"
                      style={{ display: "none" }}
                    />
                    {[
                      ["Full Name *", "text", "name", true],
                      ["Phone Number", "tel", "phone", false],
                    ].map(([label, type, key, req]) => (
                      <div key={key} style={{ textAlign: "left" }}>
                        <label
                          style={{
                            display: "block",
                            color: "#a07040",
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
                            background: "rgba(160,112,64,0.08)",
                            border: "1px solid rgba(160,112,64,0.28)",
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
                          color: "#a07040",
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
                          ["accept", "Accept"],
                          ["decline", "Decline"],
                        ].map(([val, lbl]) => (
                          <button
                            key={val}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, attending: val })
                            }
                            style={{
                              padding: "12px",
                              borderRadius: "12px",
                              cursor: "pointer",
                              fontFamily: "Georgia,serif",
                              fontSize: "12px",
                              letterSpacing: "0.1em",
                              border: `1px solid ${formData.attending === val ? "#a07040" : "rgba(160,112,64,0.28)"}`,
                              background:
                                formData.attending === val
                                  ? "rgba(160,112,64,0.2)"
                                  : "rgba(160,112,64,0.04)",
                              color:
                                formData.attending === val
                                  ? "#f5e6c8"
                                  : "#a07040",
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
                              color: "#a07040",
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
                              setFormData({
                                ...formData,
                                guests: e.target.value,
                              })
                            }
                            style={{
                              width: "100%",
                              padding: "12px 16px",
                              borderRadius: "12px",
                              background: "#1a0e00",
                              border: "1px solid rgba(160,112,64,0.28)",
                              color: "#f5e6c8",
                              fontSize: "13px",
                              outline: "none",
                              fontFamily: "Georgia,serif",
                            }}
                          >
                            {Array.from({ length: 300 }, (_, i) =>
                              String(i + 1),
                            ).map((n) => (
                              <option key={n}>{n}</option>
                            ))}
                          </select>
                        </div>
                        <div style={{ textAlign: "left" }}>
                          <label
                            style={{
                              display: "block",
                              color: "#a07040",
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
                              background: "rgba(160,112,64,0.08)",
                              border: "1px solid rgba(160,112,64,0.28)",
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
                        background: "linear-gradient(135deg, #c8960a, #a07030)",
                        color: "#fff",
                        fontSize: "12px",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        fontFamily: "Georgia,serif",
                        boxShadow: "0 4px 20px rgba(160,112,64,0.45)",
                      }}
                    >
                      Send Confirmation ✦
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer: double border + wax seal + content ── */}
        <footer
          style={{
            padding: "0 0 48px",
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* Double border lines with wax seal centered on them */}
          <div style={{ position: "relative", padding: "0 0 60px" }}>
            <div
              style={{
                borderTop: "1px solid rgba(160,112,64,0.55)",
                margin: "0 24px",
              }}
            />
            <div
              style={{
                borderTop: "1px solid rgba(160,112,64,0.25)",
                margin: "5px 24px 0",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-52px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
              }}
            >
              <img
                src="/images/wax_seal.png"
                alt="T&K Wax Seal"
                style={{
                  width: "104px",
                  height: "104px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* Names in Great Vibes cursive */}
          <p
            style={{
              color: "#f5e6c8",
              fontSize: "clamp(32px,7vw,48px)",
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              margin: "0 0 10px 0",
              lineHeight: 1.2,
            }}
          >
            Mntwana Thobelinkosi &amp; Koketso
          </p>

          {/* Date */}
          <p
            style={{
              color: "#a07040",
              fontSize: "12px",
              letterSpacing: "0.22em",
              margin: "0 0 16px 0",
            }}
          >
            24 · 10 · 2026 · Gauteng
          </p>

          {/* Short ornamental divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              margin: "0 0 16px 0",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "1px",
                background: "rgba(160,112,64,0.5)",
              }}
            />
            <div
              style={{
                width: "5px",
                height: "5px",
                background: "#a07040",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                width: "5px",
                height: "5px",
                border: "1px solid #a07040",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                width: "5px",
                height: "5px",
                background: "#a07040",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                width: "28px",
                height: "1px",
                background: "rgba(160,112,64,0.5)",
              }}
            />
          </div>

          {/* Bible verse */}
          <p
            style={{
              color: "#a07040",
              fontSize: "13px",
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.8,
              margin: "0 24px",
            }}
          >
            Beloved, let us love one another:
            <br />
            for love is of God... &mdash; 1 John 4:7
          </p>
        </footer>
      </div>

      {/* ENVELOPE OVERLAY */}
      {!overlayGone && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            overflow: "hidden",
            background: "transparent",
            transform: phase === "zoom" ? "scale(1.2)" : "scale(1)",
            opacity: phase === "zoom" ? 0 : 1,
            transition: "transform 0.35s ease, opacity 0.35s ease",
          }}
        >
          <div
            onClick={handleOpen}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              aspectRatio: "1254 / 1248",
              minWidth: "100%",
              minHeight: "100%",
              perspective: "6000px",
              transformStyle: "preserve-3d",
              cursor: phase === "closed" ? "pointer" : "default",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/images/envelope-base-final.png')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transform: "translate(0px, 4px)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/images/envelope-flap-final.png')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transformOrigin: "50% 0%",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform:
                  phase === "closed" ? "rotateX(0deg)" : "rotateX(-165deg)",
                transition: "transform 3s cubic-bezier(0.45,0,0.2,1)",
                zIndex: 2,
              }}
            />
            {phase === "closed" && (
              <p
                style={{
                  position: "absolute",
                  bottom: "32px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#fff",
                  fontSize: "12px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  textShadow: "0 1px 6px rgba(0,0,0,0.7)",
                  whiteSpace: "nowrap",
                  zIndex: 10,
                }}
              >
                Tap to open
              </p>
            )}
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 60%, transparent 100%)",
              animation:
                phase === "opening"
                  ? "glowFlash 2s ease-in-out forwards"
                  : "none",
              opacity: 0,
              zIndex: 999,
              pointerEvents: "none",
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOverlayGone(true);
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
        </div>
      )}
    </>
  );
}

function CardDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0",
        justifyContent: "center",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          height: "1px",
          width: "44px",
          background: "rgba(200,160,60,0.45)",
          flexShrink: 0,
        }}
      />
      <svg width="36" height="16" viewBox="0 0 36 16" fill="none">
        {/* Bridge lines: connect outer line (at SVG edge) to where scroll paths begin */}
        <line
          x1="0"
          y1="8"
          x2="16"
          y2="8"
          stroke="rgba(200,160,60,0.45)"
          strokeWidth="1"
        />
        <line
          x1="20"
          y1="8"
          x2="36"
          y2="8"
          stroke="rgba(200,160,60,0.45)"
          strokeWidth="1"
        />
        {/* Left scroll — begins at (16,8) where bridge line ends */}
        <path
          d="M16 8 C14 4 10 2 7 4 C4 6 5 11 8 10 C11 9 11 5 9 5"
          stroke="#c8a84b"
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center diamond */}
        <path d="M18 5 L21 8 L18 11 L15 8 Z" fill="#c8a84b" />
        {/* Right scroll — begins at (20,8) where bridge line ends */}
        <path
          d="M20 8 C22 4 26 2 29 4 C32 6 31 11 28 10 C25 9 25 5 27 5"
          stroke="#c8a84b"
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div
        style={{
          height: "1px",
          width: "44px",
          background: "rgba(200,160,60,0.45)",
          flexShrink: 0,
        }}
      />
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
    >
      <svg width="136" height="16" viewBox="0 0 136 16" fill="none">
        {/* Left line ends exactly at diamond left vertex */}
        <line
          x1="0"
          y1="8"
          x2="64"
          y2="8"
          stroke="rgba(200,120,10,0.4)"
          strokeWidth="1"
        />
        {/* Diamond: left(64,8) top(68,4) right(72,8) bottom(68,12) */}
        <path d="M64 8 L68 4 L72 8 L68 12 Z" fill="#c8780a" />
        {/* Right line starts exactly at diamond right vertex */}
        <line
          x1="72"
          y1="8"
          x2="136"
          y2="8"
          stroke="rgba(200,120,10,0.4)"
          strokeWidth="1"
        />
      </svg>
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
