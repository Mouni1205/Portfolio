import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Reward Calculation App',
    description:
      'Designed a Spring Boot application to process JSON receipt data with PostgreSQL, containerized with Docker and deployed on AWS using ECS Fargate, RDS, and ECR for scalable cloud infrastructure.',
    tech: ['Spring Boot', 'PostgreSQL', 'Docker', 'AWS ECS Fargate', 'RDS', 'ECR'],
    github: 'https://github.com/Mouni1205/receipt-processor-challenge',
  },
  {
    title: 'IDAPython Anti-RE Detector',
    description:
      'Developed a Python script using the IDAPython API to detect anti-reverse engineering techniques, improving disassembly analysis accuracy to 80% and reducing manual effort by 40%.',
    tech: ['Python', 'IDAPython', 'IDA Pro', 'Reverse Engineering'],
    github: 'https://github.com/Mouni1205/Software-Reverse-Engineering',
  },
  {
    title: 'WannaCry Ransomware Analysis',
    description:
      'Analyzed WannaCry ransomware using Ghidra and IDA Pro, uncovering key payload behavior, encryption logic, and WinINet-based network activity. Used the MITRE ATT&CK framework to document tactics and techniques, and recreated the attack flow in a secure lab environment with Kali Linux and VMWare.',
    tech: ['Ghidra', 'IDA Pro', 'MITRE ATT&CK', 'Kali Linux', 'Reverse Engineering'],
    github: 'https://github.com/your-repo/wannacry-analysis',
  },
];

const Projects = () => (
  <section id="projects" className="bg-gradient-to-br from-[#D0F0C0] via-[#C8E6C9] to-[#B2DFDB] px-6 py-16 relative overflow-hidden">
    {/* Pixar-style floating elements */}
    <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 pixar-bounce">
      <span className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">🎬</span>
    </div>
    <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-20 float-up">
      <span className="text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">🪄</span>
    </div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <h2 className="text-4xl font-bold text-center mb-4 anime-slide">
        ⚡ Projects Showcase
      </h2>
      <p className="text-center text-gray-700 mb-12 anime-slide">Building cool stuff, one commit at a time ✨</p>
      
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className={`anime-card bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between h-full transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 drift-in stagger-${idx + 1}`}
          >
            <div>
              {/* Project emoji/icon based on type */}
              <div className="text-4xl mb-3 squash-stretch-hover inline-block">
                {idx === 0 ? '🎯' : idx === 1 ? '🔮' : '🧙‍♂️'}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 transition-colors" style={{ '&:hover': { color: '#FF8700' } }}>
                {proj.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 text-xs rounded-full border border-purple-200 font-medium sparkle-hover"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-800 transition-colors font-semibold group"
                style={{ '&:hover': { color: '#FF8700' } }}
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="text-sm">View Source Code</span>
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
