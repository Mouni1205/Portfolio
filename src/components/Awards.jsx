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
    title: "FSU CTF 2024 - 5th Place",
    description: "Competed in Capture The Flag competition covering Web Exploitation, Forensics, Cryptography, Binary Exploitation, and SQL Injection"
  }
];

const Awards = () => (
  <section id="awards" className="bg-gradient-to-br from-white to-gray-50 px-6 py-16 relative overflow-hidden">
    {/* Anime sparkles background */}
    <div className="absolute top-10 right-10 text-6xl opacity-20 pixar-bounce">✨</div>
    <div className="absolute bottom-10 left-10 text-6xl opacity-20 float-up">🏆</div>
    
    <div className="max-w-5xl mx-auto relative z-10">
      <h2 className="text-4xl font-bold text-center mb-4 anime-slide">
        🏆 Achievements Unlocked
      </h2>
      <p className="text-center text-gray-600 mb-12 anime-slide">Collecting badges like Pokémon 🎯✨</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {awards.map((award, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl p-8 anime-card drift-in stagger-${index + 1} hover:shadow-2xl transition-all border-2 border-transparent hover:border-yellow-400`}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-4xl squash-stretch-hover">{index === 0 ? '☁️' : '🎯'}</span>
              <h3 className="text-2xl font-bold text-gray-800">{award.title}</h3>
            </div>
            
            {award.items && (
              <ul className="space-y-3">
                {award.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 group">
                    <span className="mt-1 group-hover:scale-125 transition-transform" style={{ color: '#F97316' }}>⚡</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {award.description && (
              <p className="text-gray-700 leading-relaxed flex items-start gap-2">
                <span className="text-lg" style={{ color: '#3B82F6' }}>🏁</span>
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

