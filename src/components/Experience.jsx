import React from 'react';

const experiences = [
  {
    company: "FSU Health and Wellness Center",
    title: "Software Developer – Cloud + Backend",
    location: "Tallahassee, FL",
    period: "Sep 2024 – May 2025",
    tech: ["Java", "Spring Boot", "AWS", "Lambda", "OAuth2", "API Gateway", "CloudWatch"],
    description: [
      "Developed a check-in system that reduced student wait time by 40% and eliminated 95% of manual workflows for 250+ daily visits.",
      "Automated HIPAA document workflows using AWS S3 and Lambda, cutting processing time by 95%.",
      "Built secure OAuth2-based APIs with EC2, API Gateway, and monitored performance using CloudWatch with CI/CD deployments."
    ]
  },
  {
    company: "ThoughtWorks",
    title: "Software Developer – Backend",
    location: "Hyderabad, India",
    period: "Jun 2022 – Aug 2023",
    tech: ["Java", "Spring Boot", "gRPC", "RAFT", "Distributed Ledger", "Docker", "PKI", "JMeter", "Checkmarx"],
    description: [
      "Built Java SDK and APIs with Spring Boot and gRPC to reduce IMPS transaction time by 30%.",
      "Integrated 50+ banks into a RAFT-based DLT platform, reducing fraud by 25% across 355M+ transactions/month.",
      "Implemented PKI-based identity verification using X.509 and RSA, ensuring fully authenticated payloads.",
      "Achieved 99.9% uptime by load testing with JMeter (10K+ concurrent users) and eliminating OWASP Top 10 issues via Checkmarx."
    ]
  },
  {
    company: "ThoughtWorks",
    title: "Software Developer – Frontend",
    location: "Hyderabad, India",
    period: "Nov 2021 – May 2022",
    tech: ["SwiftUI", "GraphQL", "Kingfisher", "XCode"],
    description: [
      "Built SwiftUI components for a mobile banking app used by 1M+ users.",
      "Optimized image workflows with Kingfisher and shimmer effects, reducing image latency by 24%.",
      "Resolved 10+ bugs and improved credit card page UI through collaboration with designers and backend teams."
    ]
  },
  {
    company: "ThoughtWorks",
    title: "Software Developer – Intern",
    location: "Hyderabad, India",
    period: "May 2021 – Oct 2021",
    tech: ["Java", "PostgreSQL", "Docker", "Kafka", "CircleCI"],
    description: [
      "Created reusable Java SDKs and REST APIs with PostgreSQL, cutting setup time by 60% across 3 internal projects.",
      "Researched and patched Log4j (CVE-2021-44228) in distributed services, mitigating RCE vulnerabilities.",
      "Led contract testing for Kafka pipelines with Pact, and built CI pipelines with CircleCI and Gatling (1K+ users)."
    ]
  }
];

const Experience = () => (
  <section id="experience" className="bg-[#F5F5F5] px-6 py-16">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      <div className="relative border-l-2 border-gray-300 pl-10 space-y-14">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">

            <div className="md:flex md:justify-between md:items-start gap-10">
              {/* Left: Title & Tech */}
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-500">{exp.company} · {exp.period}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Description */}
              <ul className="md:w-1/2 list-disc ml-5 text-gray-700 space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
