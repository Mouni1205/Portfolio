import React from 'react';

const Education = () => (
  <section id="education" className="bg-cafe-latte/50 px-6 py-16 border-t border-cafe-biscuit/40">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-serif text-4xl font-bold text-center mb-2 text-cafe-espresso anime-slide">
        Education
      </h2>
      <p className="text-center text-cafe-roast mb-12 anime-slide">Where I studied.</p>

      <div className="space-y-6">
        <div className="anime-card bg-white/90 border border-cafe-biscuit/50 rounded-2xl shadow-sm p-8 text-left drift-in hover:shadow-md hover:border-cafe-roast/40 transition-all magic-glow">
          <div className="flex items-start gap-4">
            <div className="text-5xl">🎓</div>
            <div className="flex-1">
              <h3 className="font-serif text-2xl font-bold text-cafe-espresso mb-2">Florida State University</h3>
              <p className="text-lg font-semibold text-cafe-roast mb-2">M.S. in Computer Science, Cybersecurity</p>
              <div className="flex flex-wrap gap-4 text-sm text-cafe-brown">
                <span>📅 Aug 2023 – May 2025</span>
                <span>⭐ GPA: 3.8/4.0</span>
                <span>📍 Tallahassee, FL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="anime-card bg-white/90 border border-cafe-biscuit/50 rounded-2xl shadow-sm p-8 text-left drift-in stagger-2 hover:shadow-md hover:border-cafe-roast/40 transition-all magic-glow">
          <div className="flex items-start gap-4">
            <div className="text-5xl">📚</div>
            <div className="flex-1">
              <h3 className="font-serif text-2xl font-bold text-cafe-espresso mb-2">Mallareddy College of Engineering and Technology</h3>
              <p className="text-lg font-semibold text-cafe-roast mb-2">B.Tech in Information Technology</p>
              <div className="flex flex-wrap gap-4 text-sm text-cafe-brown">
                <span>📅 Jul 2017 – Jul 2021</span>
                <span>⭐ GPA: 8.96/10.0</span>
                <span>📍 Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
