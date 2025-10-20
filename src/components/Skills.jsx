import React from 'react';

const skills = {
  "Backend & Data": [
    "Java", "Python", "Spring Boot", "FastAPI", "gRPC", "REST APIs", 
    "Microservices", "Kafka", "RedPanda", "ClickHouse", "PostgreSQL", 
    "Playwright", "Gradle", "Git"
  ],
  "Frontend": [
    "React", "TypeScript", "Tailwind CSS", "SwiftUI", "Xcode", "UIKit", "Kingfisher"
  ],
  "DevOps & Cloud": [
    "AWS (EC2, Lambda, S3, API Gateway, CloudWatch, ECS Fargate, RDS, ECR, IAM)", 
    "Docker", "Kubernetes", "Helm", "Prometheus", "Grafana", "Terraform", 
    "CircleCI", "CI/CD", "JUnit", "Mockito", "Apache JMeter", "Gatling", 
    "Pact", "Checkmarx SAST"
  ],
  "Security": [
    "OAuth2/JWT", "PKI (X.509, PKCS#8, RSA)", "TLS/SSL & mTLS", "OWASP Top 10", 
    "Distributed Ledger (RAFT)", "Kali Linux", "IDA Pro", "IDAPython", 
    "Wireshark", "Burp Suite", "Nmap", "Metasploit"
  ]
};

const categoryIcons = {
  "Backend & Data": "⚙️",
  "Frontend": "🎨",
  "DevOps & Cloud": "☁️",
  "Security": "🔒"
};

const Skills = () => (
  <section id="skills" className="bg-gradient-to-br from-[#F5F5F5] to-[#FAFAFA] px-6 py-16 relative overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 opacity-5 racing-stripes"></div>
    
    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-4xl font-bold text-center mb-4 anime-slide">
        ⚡ Tech Stack & Skills
      </h2>
      <p className="text-center text-gray-600 mb-12 anime-slide">Tools I use to build magic ✨</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, tools], idx) => (
          <div 
            key={category} 
            className={`bg-white rounded-2xl shadow-lg p-6 anime-card drift-in stagger-${idx + 1} hover:shadow-2xl transition-all`}
          >
            <h3 className="text-2xl font-bold mb-5 text-gray-800 flex items-center gap-2">
              <span className="text-3xl squash-stretch-hover inline-block">{categoryIcons[category]}</span>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span 
                  key={i} 
                  className="bg-gradient-to-r from-blue-50 to-orange-50 text-sm px-3 py-2 rounded-lg border font-medium sparkle-hover transition-all hover:scale-110 hover:shadow-md"
                  style={{ color: '#3B82F6', borderColor: '#93C5FD' }}
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
