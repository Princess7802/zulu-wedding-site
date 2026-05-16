export default function ZuluHeritageWeddingInvitation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-amber-950 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_60%)]" />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-6">
        <div className="relative w-full max-w-5xl flex flex-col items-center text-center">
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-amber-200/30 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Envelope */}
          <div className="group relative mt-10 cursor-pointer">
            {/* Envelope Shadow */}
            <div className="absolute inset-0 bg-black/40 blur-3xl scale-110 rounded-3xl" />

            {/* Cowhide Envelope */}
            <div className="relative w-[340px] h-[240px] md:w-[500px] md:h-[340px] rounded-2xl overflow-hidden shadow-2xl border border-amber-200/20 bg-gradient-to-br from-stone-200 via-amber-100 to-stone-300">
              {/* Cowhide Pattern */}
              <div
                className="absolute inset-0 opacity-40 mix-blend-multiply"
                style={{
                  backgroundImage: "url('/images/closed-envelope.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Pearl Decorations */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border border-stone-300 shadow-md"
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border border-stone-300 shadow-md"
                  />
                ))}
              </div>

              {/* Envelope Flap */}
              <div className="absolute top-0 left-0 w-full h-1/2 origin-top transition-transform duration-700 group-hover:-rotate-x-180 bg-gradient-to-b from-amber-200 to-stone-100 clip-path-envelope z-20 border-b border-white/20">
                <div
                  className="absolute inset-0 opacity-30 mix-blend-multiply"
                  style={{
                    backgroundImage: "url('/images/closed-envelope.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              {/* Invitation Card */}
              <div className="absolute inset-x-6 bottom-0 h-[85%] translate-y-20 group-hover:-translate-y-6 transition-all duration-700 ease-out bg-gradient-to-b from-stone-50 to-amber-50 rounded-t-3xl shadow-2xl border border-amber-200/40 p-6 md:p-10 text-stone-900 overflow-y-auto">
                {/* African Pattern Header */}
                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full bg-amber-700"
                    />
                  ))}
                </div>

                <p className="tracking-[0.3em] uppercase text-xs md:text-sm text-amber-700">
                  Traditional Zulu Wedding
                </p>

                <h1 className="mt-4 text-4xl md:text-6xl font-serif leading-tight">
                  Thobelinkosi
                  <span className="block text-amber-700 text-3xl md:text-5xl my-2">
                    &
                  </span>
                  Koketso
                </h1>

                <p className="mt-4 text-base md:text-lg text-stone-700 italic">
                  Together with their families invite you to celebrate their
                  union.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-3 text-left">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-700">
                      Date
                    </p>
                    <p className="mt-2 font-semibold">24 October 2026</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-700">
                      Venue
                    </p>
                    <p className="mt-2 font-semibold">
                      KwaZulu-Natal, South Africa
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-700">
                      Dress Code
                    </p>
                    <p className="mt-2 font-semibold">
                      Traditional African Elegance
                    </p>
                  </div>
                </div>

                {/* Countdown */}
                <div className="mt-10 p-4 rounded-2xl bg-stone-100 border border-stone-200">
                  <p className="text-sm uppercase tracking-widest text-amber-700">
                    Countdown
                  </p>
                  <div className="mt-3 flex justify-center gap-6 text-center">
                    <div>
                      <p className="text-3xl font-bold">120</p>
                      <span className="text-xs">Days</span>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">08</p>
                      <span className="text-xs">Hours</span>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">42</p>
                      <span className="text-xs">Minutes</span>
                    </div>
                  </div>
                </div>

                {/* RSVP Button */}
                <div className="mt-10">
                  <button className="px-8 py-4 rounded-full bg-amber-700 hover:bg-amber-800 transition-all text-white tracking-wide shadow-xl">
                    RSVP NOW
                  </button>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-stone-200">
                  <p className="italic text-stone-600">
                    “Love is the thread that binds two souls together.”
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm tracking-[0.3em] uppercase text-amber-200 animate-pulse">
              Click The Envelope
            </p>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .clip-path-envelope {
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
