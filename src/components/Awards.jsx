import React from 'react';

const awards = [
  {
    title: "Oracle Cloud Infrastructure Certifications",
    items: [
      "Oracle Cloud Infrastructure Foundations Associate",
      "Oracle Cloud Infrastructure Developer Professional",
      "Oracle Cloud Infrastructure Generative AI Professional"
    ]
  },
  {
    title: "FSU CTF 2024 – 5th Place",
    description: "Capture The Flag: Web Exploitation, Forensics, Cryptography, Binary Exploitation, SQL Injection"
  }
];

const Awards = () => (
  <section id="awards" className="bg-cafe-cream px-6 py-16 relative overflow-hidden border-t border-cafe-biscuit/40">
    <div className="absolute top-10 right-10 text-5xl opacity-10 pixar-bounce">✨</div>
    <div className="absolute bottom-10 left-10 text-5xl opacity-10 float-up">🏆</div>

    <div className="max-w-5xl mx-auto relative z-10">
      <h2 className="font-serif text-4xl font-bold text-center mb-2 text-cafe-espresso anime-slide">
        Achievements
      </h2>
      <p className="text-center text-cafe-roast mb-12 anime-slide">A few highlights.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {awards.map((award, index) => (
          <div
            key={index}
            className="anime-card bg-white/90 border border-cafe-biscuit/50 rounded-2xl shadow-sm p-8 drift-in hover:shadow-md hover:border-cafe-roast/40 transition-all"
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-4xl">{index === 0 ? '☁️' : '🎯'}</span>
              <h3 className="font-serif text-xl font-bold text-cafe-espresso">{award.title}</h3>
            </div>

            {award.items && (
              <ul className="space-y-3">
                {award.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-cafe-brown text-sm">
                    <span className="text-cafe-roast">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {award.description && (
              <p className="text-cafe-brown text-sm leading-relaxed flex items-start gap-2">
                <span className="text-cafe-roast">·</span>
                <span>{award.description}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
