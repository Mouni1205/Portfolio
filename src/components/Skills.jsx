import React from 'react';

const skills = {
  "Backend & Data": ["Java", "Python", "Spring Boot", "FastAPI", "gRPC", "REST APIs", "Microservices", "Kafka", "RedPanda", "ClickHouse", "PostgreSQL", "Playwright", "Gradle", "Git"],
  "Frontend": ["React", "TypeScript", "Tailwind CSS", "SwiftUI", "Xcode", "UIKit", "Kingfisher"],
  "DevOps & Cloud": ["AWS (EC2, Lambda, S3, API Gateway, CloudWatch, ECS Fargate, RDS, ECR, IAM)", "Docker", "Kubernetes", "Helm", "Prometheus", "Grafana", "CI/CD", "JUnit", "Mockito", "Apache JMeter", "Pact", "Checkmarx SAST"],
  "GenAI Engineering": ["LLM integration", "GenAI-assisted development workflows", "AI-driven test generation", "Prompt engineering"],
  "Security": ["OAuth2/JWT", "PKI (X.509, PKCS#8, RSA)", "TLS/SSL & mTLS", "OWASP Top 10", "Distributed Ledger (RAFT)", "Kali Linux", "IDA Pro", "IDAPython", "Wireshark", "Burp Suite", "Nmap", "Metasploit"]
};

const categoryIcons = {
  "Backend & Data": "☕",
  "Frontend": "🎨",
  "DevOps & Cloud": "☁️",
  "GenAI Engineering": "🤖",
  "Security": "🔐"
};

const Skills = () => (
  <section id="skills" className="bg-cafe-cream px-6 py-16 relative overflow-hidden border-t border-cafe-biscuit/40">
    <div className="absolute inset-0 opacity-30 racing-stripes" />

    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="font-serif text-4xl font-bold text-center mb-2 text-cafe-espresso anime-slide">
        Tech & skills
      </h2>
      <p className="text-center text-cafe-roast mb-12 anime-slide">What I use day to day.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, tools], idx) => (
          <div
            key={category}
            className="anime-card bg-white/90 border border-cafe-biscuit/50 rounded-2xl shadow-sm p-6 drift-in hover:shadow-md hover:border-cafe-roast/40 transition-all"
          >
            <h3 className="font-serif text-xl font-bold mb-5 text-cafe-espresso flex items-center gap-2">
              <span className="text-2xl">{categoryIcons[category]}</span>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-cafe-latte text-cafe-brown text-sm px-3 py-2 rounded-lg border border-cafe-biscuit/40 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
