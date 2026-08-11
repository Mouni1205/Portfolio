import React from 'react';
import profilePic from '../assets/mounisha.jpg';

const About = () => {
  const techStack = [
    { category: 'Backend', skills: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'gRPC'], icon: '☕' },
    { category: 'Data & systems', skills: ['Microservices', 'Kafka', 'RedPanda', 'ClickHouse'], icon: '📊' },
    { category: 'Cloud & DevOps', skills: ['AWS', 'Kubernetes', 'Docker', 'Helm'], icon: '☁️' },
    { category: 'Security & monitoring', skills: ['PKI / X.509', 'Prometheus', 'Grafana', 'Checkmarx'], icon: '🔐' },
  ];

  const interests = [
    { name: 'Anime', icon: '🎌' },
    { name: 'Disney & Pixar', icon: '🎬' },
    { name: 'Thrillers', icon: '🕵️' },
    { name: 'Reading', icon: '📖' },
    { name: 'F1', icon: '🏎️' },
    { name: 'McLaren', icon: '🏁' },
    { name: 'Harry Potter', icon: '⚡' },
    { name: 'Cafes', icon: '☕' },
    { name: 'Music', icon: '🎵' },
    { name: 'EDM', icon: '🎧' },
    { name: 'Country music', icon: '🎸' },
  ];

  const milestones = [
    { year: '2025 – Present', role: 'Software Engineer', company: 'Sherlocks.ai', highlight: 'Endpoint monitoring & real-time analytics' },
    { year: 'Sep 2024 – May 2025', role: 'Software Developer – Cloud + Backend', company: 'FSU Health and Wellness Center', highlight: 'Patient check-in system, AWS, OAuth2' },
    { year: '2023 – 2025', role: 'M.S. Computer Science, Cybersecurity', company: 'Florida State University', highlight: 'Security & distributed systems' },
    { year: '2022 – 2023', role: 'Software Developer', company: 'Thoughtworks · NPCI', highlight: '355M+ IMPS transactions on RAFT-based DLT' },
    { year: '2020 – 2022', role: 'Graduate Software Developer', company: 'Thoughtworks · Standard Chartered', highlight: 'GraphQL + SwiftUI banking' },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-cafe-cream via-cafe-latte to-cafe-sand px-6 py-20 flex items-center justify-center relative overflow-hidden">
      {/* Soft cafe background accents */}
      <div className="absolute top-20 right-10 text-6xl opacity-10 float-up">📚</div>
      <div className="absolute bottom-32 left-10 text-5xl opacity-10 pixar-bounce">☕</div>
      <div className="absolute top-1/2 right-1/4 text-5xl opacity-10">🪴</div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cafe-biscuit via-cafe-roast to-cafe-espresso" />

      <div className="max-w-7xl w-full relative z-10">
        {/* Header: casual intro */}
        <div className="text-center mb-16 race-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-cafe-espresso">
            Mounisha Makineni
          </h1>
          <p className="text-xl font-semibold text-cafe-roast mb-6">
            Backend engineer who likes building things that scale
          </p>
          <div className="max-w-2xl mx-auto text-left space-y-4 text-cafe-brown leading-relaxed">
            <p>
              Hi, I'm Mounisha, a Backend Engineer who spends her days building distributed systems, real time data pipelines, and GenAI powered tools, and her nights obsessing over anime plot twists, Disney Pixar emotional damage, and thriller endings where I'm always guessing everything and rarely get them right.
            </p>
            <p>
              I love designing microservices, streaming architectures, and AI driven automation, but I'm equally passionate about stories, the kind that make you pause, think, or immediately text a friend a 3 paragraph rant. I read a lot, I overanalyze a lot, and I post my thoughts on Instagram like it's my personal review column.
            </p>
            <p>
              When I'm not engineering or storytelling, you'll probably find me exploring cafés (always up for grabbing one), cheering for McLaren during F1 weekends, or shamelessly waiting for my Hogwarts letter so I can finally stroll through Diagon Alley, pick out my wand, and try every chocolate in sight. I love engineering systems that are reliable and elegant, and I love the worlds built in fiction, animation, and sport. That mix of logic and imagination shapes the way I think, create, and build.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-cafe-roast mt-8">
            <span>📍 Nashville, TN</span>
            <span>📧 mmounisha1220@gmail.com</span>
            <span>📱 (615) 669-8662</span>
          </div>
        </div>

        {/* Profile + interest bubbles */}
        <div className="flex flex-col items-center mb-16 drift-in">
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-cafe-biscuit/50 rounded-3xl blur" />
            <img
              src={profilePic}
              alt="Mounisha Makineni"
              className="relative rounded-3xl w-72 h-72 object-cover shadow-xl border-2 border-cafe-biscuit"
            />
          </div>
          <p className="text-sm font-semibold text-cafe-roast mb-3">Things I’m into</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-xl">
            {interests.map((interest, i) => (
              <span
                key={i}
                className="bg-cafe-latte/90 border border-cafe-biscuit/50 text-cafe-brown text-sm px-3 py-1.5 rounded-full hover:border-cafe-roast/50 transition-all flex items-center gap-1.5"
              >
                <span>{interest.icon}</span>
                <span>{interest.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-16">
          <h3 className="font-serif text-3xl font-bold mb-8 text-center text-cafe-espresso">
            What I use
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <div className="relative bg-white/80 border border-cafe-biscuit/60 rounded-xl p-6 h-full hover:border-cafe-roast/50 hover:shadow-md transition-all">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h4 className="font-serif text-lg font-bold text-cafe-espresso mb-3">{tech.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-cafe-latte text-cafe-brown px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="font-serif text-3xl font-bold mb-8 text-center text-cafe-espresso">
            So far
          </h3>
          <div className="relative space-y-6">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cafe-biscuit via-cafe-roast to-cafe-espresso rounded-full" />

            {milestones.map((milestone, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="md:w-1/2" />
                <div className="relative z-10 flex justify-center">
                  <div className="w-4 h-4 bg-cafe-roast rounded-full border-2 border-cafe-cream shadow" />
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white/80 border border-cafe-biscuit/60 rounded-xl p-6 hover:border-cafe-roast/50 transition-all shadow-sm">
                    <div className="text-cafe-roast font-semibold text-sm mb-1">{milestone.year}</div>
                    <h4 className="font-serif font-bold text-cafe-espresso mb-1">{milestone.role}</h4>
                    <p className="text-cafe-roast text-sm mb-1">{milestone.company}</p>
                    <p className="text-cafe-brown/80 text-sm">{milestone.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
