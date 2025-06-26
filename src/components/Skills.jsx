import React from 'react';

const skills = {
  "Languages & Frameworks": [
    "Java", "Python", "Spring Boot", "React", "Tailwind CSS", "JUnit", "Mockito", "C++", "SwiftUI", "UIKit"
  ],
  "Cloud & Infrastructure": [
    "AWS (EC2, Lambda, S3, IAM, API Gateway)", "Docker", "Kubernetes", "TLS/SSL",
    "Linux CLI", "Load Balancing", "gRPC", "PostgreSQL", "Networking (TCP/IP, HTTP)"
  ],
  "DevOps & Tools": [
    "Git", "CI/CD", "CircleCI", "CloudWatch", "Datadog", "Apache JMeter", "Gatling",
    "Pact", "Kafka", "GraphQL", "Xcode"
  ],
  "Security & Reverse Engineering": [
    "OWASP Top 10", "Authentication/Authorization", "Secure Coding", 
    "Vulnerability Management", "Kali Linux", "Ghidra", "Metasploit",
    "IDA Pro", "Wireshark", "Burp Suite", "Nmap", "Blockchain"
  ]
};

const Skills = () => (
  <section id="skills" className="bg-[#F5F5F5] px-6 py-16">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, tools]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span key={i} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full border">
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
