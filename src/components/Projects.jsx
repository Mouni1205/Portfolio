import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Reward Calculation App',
    description: 'Spring Boot app to process JSON receipt data with PostgreSQL, containerized with Docker and deployed on AWS (ECS Fargate, RDS, ECR).',
    tech: ['Spring Boot', 'PostgreSQL', 'Docker', 'AWS ECS Fargate', 'RDS', 'ECR'],
    github: 'https://github.com/Mouni1205/receipt-processor-challenge',
  },
  {
    title: 'IDAPython Anti-RE Detector',
    description: 'Python script using the IDAPython API to detect anti-reverse engineering techniques, improving disassembly analysis accuracy to 80% and reducing manual effort by 40%.',
    tech: ['Python', 'IDAPython', 'IDA Pro', 'Reverse Engineering'],
    github: 'https://github.com/Mouni1205/Software-Reverse-Engineering',
  },
  {
    title: 'WannaCry Ransomware Analysis',
    description: 'Analyzed WannaCry using Ghidra and IDA Pro, documented tactics with MITRE ATT&CK, and recreated the attack flow in a secure lab with Kali Linux and VMWare.',
    tech: ['Ghidra', 'IDA Pro', 'MITRE ATT&CK', 'Kali Linux', 'Reverse Engineering'],
    github: 'https://github.com/your-repo/wannacry-analysis',
  },
];

const Projects = () => (
  <section id="projects" className="bg-cafe-latte/50 px-6 py-16 relative overflow-hidden border-t border-cafe-biscuit/40">
    <div className="absolute top-10 left-10 text-5xl opacity-10 float-up">📖</div>
    <div className="absolute bottom-20 right-20 text-6xl opacity-10 pixar-bounce">☕</div>

    <div className="max-w-7xl mx-auto relative z-10">
      <h2 className="font-serif text-4xl font-bold text-center mb-2 text-cafe-espresso anime-slide">
        Projects
      </h2>
      <p className="text-center text-cafe-roast mb-12 anime-slide">Things I’ve built.</p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="anime-card bg-white/90 border border-cafe-biscuit/50 rounded-2xl p-6 flex flex-col justify-between h-full hover:shadow-md hover:border-cafe-roast/40 transition-all duration-300 drift-in"
          >
            <div>
              <div className="text-4xl mb-3">{idx === 0 ? '📋' : idx === 1 ? '🔬' : '🛡️'}</div>
              <h3 className="font-serif text-2xl font-bold mb-3 text-cafe-espresso">{proj.title}</h3>
              <p className="text-cafe-brown mb-4 leading-relaxed text-sm">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cafe-latte text-cafe-brown px-3 py-1 text-xs rounded-full border border-cafe-biscuit/40 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-cafe-biscuit/40">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cafe-roast font-semibold hover:text-cafe-espresso transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">View code</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
