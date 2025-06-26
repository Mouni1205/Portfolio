import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Receipt Processor',
    description:
      'Spring Boot app that processes retail receipts, calculates reward points, and logs metrics using Datadog. Deployed with Docker, ECS Fargate, and RDS.',
    tech: ['Spring Boot', 'AWS', 'Docker', 'Datadog', 'PostgreSQL'],
    github: 'https://github.com/your-repo/receipt-processor',
  },
  {
    title: 'IDAPython Anti-RE Detector',
    description:
      'A Python script that detects anti-disassembly and anti-debugging techniques using IDAPython API to aid reverse engineering.',
    tech: ['Python', 'IDAPython', 'Ghidra'],
    github: 'https://github.com/your-repo/idapython-detector',
  },
  {
    title: 'WannaCry Ransomware Analysis',
    description:
      'Analyzed WannaCry ransomware using Ghidra and IDA Pro, uncovering key payload behavior, encryption logic, and WinINet-based network activity. Used the MITRE ATT&CK framework to document tactics and techniques, and recreated the attack flow in a secure lab environment with Kali Linux and VMWare.',
    tech: ['Ghidra', 'MITRE ATT&CK', 'Kali Linux'],
    github: 'https://github.com/your-repo/wannacry-analysis',
  },
];

const Projects = () => (
  <section id="projects" className="bg-[#D0F0C0] px-6 py-16">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{proj.title}</h3>
              <p className="text-gray-600 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 px-2 py-1 text-sm rounded-full border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-800 hover:text-black"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">View Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
