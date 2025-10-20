import React from 'react';
import profilePic from '../assets/mounisha.jpg'; // Replace with your image path

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-[#D0F0C0] via-[#C8E6C9] to-[#B2EBF2] px-6 py-16 flex items-center justify-center relative overflow-hidden">
      {/* Floating Pixar-style elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-orange-400 rounded-full opacity-10 float-up"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 pixar-bounce"></div>
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 relative z-10">
        
        {/* Left: Profile Picture */}
        <div className="flex-shrink-0 race-in">
          <div className="relative pixar-glow">
            <img 
              src={profilePic}
              alt="Mounisha Makineni"
              className="rounded-2xl w-64 h-64 object-cover shadow-2xl border-4 border-white"
            />
            {/* Magic accent corner - Harry Potter themed */}
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg sparkle-hover magic-glow" style={{ backgroundColor: '#F97316' }}>
              <span className="text-white text-2xl">⚡</span>
            </div>
          </div>
        </div>

        {/* Right: Description */}
        <div className="text-gray-800 anime-slide">
          <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Hi, I'm Mounisha! 👋
          </h2>
          <p className="text-xl font-semibold mb-6" style={{ color: '#F97316' }}>
            Backend Developer 🚀 | Cybersecurity Enthusiast 🔐 | F1 Fanatic 🏎️
          </p>
      
          
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              I recently finished my Master's in Computer Science (Cybersecurity) at <strong>Florida State University</strong>. 
              I love building things that work reliably and securely — especially backend systems with <strong>Java and Spring Boot</strong>. 
              I'm all about creating APIs that don't break, designing systems that can grow, and making sure everything stays secure. ⚡
            </p>
            
            <p>
              Right now, I'm working at <strong style={{ color: '#3B82F6' }}>Sherlocks.ai</strong> as a Software Engineer Intern, 
              building tools that monitor systems in real-time and help catch issues before they become problems. 
              I get to work with cool tech like <strong>Kubernetes, RedPanda, ClickHouse, and Prometheus</strong>. 
              Before this, I spent time at <strong>ThoughtWorks</strong> (working on payment systems for millions of transactions) 
              and <strong>FSU Health</strong> (building a patient check-in app). 🎯
            </p>
            
            <p>
              When I'm not coding, I'm usually reading fiction 📚, debating anime theories with friends
              (yes, very passionately), watching entire shows through YouTube Shorts (it's an art form), 
              or rewatching Pixar movies for the 100th time 🎬. Still waiting for my Hogwarts letter, by the way 🪄. 
              Recently, I got super into <strong style={{ color: '#F97316' }}>Formula 1</strong> — 
              now I spend my weekends watching races and analyzing strategies like I'm part of the team. 🏎️✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
