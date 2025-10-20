import React from 'react';

const Education = () => (
  <section id="education" className="bg-gradient-to-br from-[#D0F0C0] via-[#C8E6C9] to-[#A5D6A7] px-6 py-16">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 anime-slide">
        🎓 Academic Journey
      </h2>
      <p className="text-center text-gray-700 mb-12 anime-slide">Leveling up my knowledge stats 📚⚡</p>

      <div className="space-y-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-left anime-card drift-in hover:shadow-2xl transition-all transform hover:-translate-y-1 magic-glow">
          <div className="flex items-start gap-4">
            <div className="text-5xl squash-stretch-hover">🏆</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Florida State University</h3>
              <p className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>M.S. in Computer Science, Cybersecurity</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <span className="font-semibold">📅</span> Aug 2023 – May 2025
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">⭐</span> GPA: 3.8/4.0
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">📍</span> Tallahassee, FL
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 text-left anime-card drift-in stagger-2 hover:shadow-2xl transition-all transform hover:-translate-y-1 magic-glow">
          <div className="flex items-start gap-4">
            <div className="text-5xl squash-stretch-hover">🧙‍♂️</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">JNTU Hyderabad</h3>
              <p className="text-lg font-semibold mb-2" style={{ color: '#F97316' }}>B.Tech in Information Technology</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <span className="font-semibold">📅</span> Jul 2017 – Jul 2021
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">⭐</span> GPA: 8.96/10.0
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">📍</span> Hyderabad, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
