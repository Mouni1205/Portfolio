import React from 'react';
import ScrollCafeIcon from './ScrollCafeIcon';

const experiences = [
  {
    company: "Sherlocks.ai",
    title: "Software Engineer",
    location: "Remote",
    period: "Jul 2025 – Present",
    tech: ["Java", "Spring Boot", "React", "TypeScript", "RedPanda", "ClickHouse", "Kubernetes", "Helm", "Python", "FastAPI", "Playwright", "Prometheus", "Grafana", "LLMs"],
    description: [
      "Engineered a full-stack endpoint monitoring platform using Java/Spring Boot and React/TypeScript, building a dashboard for endpoint configuration management with PostgreSQL and automated health monitoring across multiple authentication types.",
      "Designed a real-time streaming analytics pipeline publishing probe events to RedPanda, ingesting via RedPanda Connect into ClickHouse for OLAP queries, while maintaining low-cardinality Prometheus metrics and visualizing data through Grafana.",
      "Built an LLM-powered anomaly summarization and test-generation agent that analyzes probe failures, produces human-readable incident summaries, and auto-generates unit test scaffolding to support AI-first engineering practices.",
      "Containerized and deployed a microservices architecture on Kubernetes using Helm charts, orchestrating a Python/FastAPI session management service with Playwright for automated browser authentication across 50+ endpoints."
    ]
  },
  {
    company: "FSU Health and Wellness Center",
    title: "Software Developer – Cloud + Backend",
    location: "Tallahassee, FL",
    period: "Sep 2024 – May 2025",
    tech: ["Java", "Spring Boot", "AWS", "S3", "Lambda", "EC2", "API Gateway", "CloudWatch", "OAuth2"],
    description: [
      "Developed an online patient check-in system to replace manual processes, reducing average patient waiting time by 40% and eliminating 95% of paper-based workflows for 250+ daily student visits.",
      "Automated document handling with S3, Lambda, and expiration tracking for HIPAA forms, significantly reducing manual processing.",
      "Deployed secure OAuth2-based APIs with API Gateway and EC2, and integrated CloudWatch for real-time health monitoring of backend services."
    ]
  },
  {
    company: "Thoughtworks · National Payments Corporation of India",
    title: "Software Developer",
    location: "Hyderabad, India",
    period: "Jul 2022 – Aug 2023",
    tech: ["Java", "gRPC", "Spring Boot", "RAFT", "DLT", "Kubernetes", "PKI", "X.509", "PKCS#8", "RSA", "Apache JMeter", "Checkmarx"],
    description: [
      "Engineered Java gRPC services for a large-scale payments platform on a RAFT-based DLT, processing 355M+ monthly IMPS transactions while ensuring ordering guarantees, idempotency, and fault tolerance across distributed systems.",
      "Designed secure transaction validation workflows using PKI (X.509, PKCS#8) and RSA-based digital signatures, ensuring end-to-end authenticity and integrity of financial messages exchanged between NPCI and 50+ banks.",
      "Ran Checkmarx static analysis and resolved OWASP Top 10 critical findings across the codebase.",
      "Validated system reliability through reconciliation-focused load testing using Apache JMeter, simulating 10,000+ concurrent transactions and verifying stability during peak payment periods."
    ]
  },
  {
    company: "Thoughtworks · Standard Chartered Bank",
    title: "Graduate Software Developer",
    location: "Hyderabad, India",
    period: "May 2021 – Jun 2022",
    tech: ["Java", "Spring Boot", "GraphQL", "PostgreSQL", "Kafka", "Prometheus", "Pact", "SwiftUI", "Xcode", "UIKit", "Kingfisher"],
    description: [
      "Developed Java/Spring Boot microservices with GraphQL APIs for a large-scale banking platform, designing GraphQL schemas to serve web and mobile clients with PostgreSQL for data persistence.",
      "Implemented contract testing using Pact to define and validate service contracts between microservices, ensuring backward compatibility in an event-driven Kafka architecture.",
      "Integrated Prometheus metrics collection and monitoring for microservices, collaborating with backend developers using Bitbucket, Jira for story management, and Confluence for technical documentation.",
      "Rotated to the mobile development team and developed SwiftUI components consuming GraphQL APIs for a mobile banking app used by 1M+ users, collaborating with designers using Figma to implement user-facing features.",
      "Optimized profile upload workflows using Kingfisher and shimmer effect, reducing image latency by 24% and enhancing user experience in the mobile banking application.",
      "Resolved 10+ UI bugs and refined credit card page layouts, integrating GraphQL queries in SwiftUI and adding quick links to simplify navigation and improve engagement."
    ]
  }
];

const Experience = () => (
  <section id="experience" className="bg-cafe-cream px-6 py-16 relative overflow-hidden border-t border-cafe-biscuit/40">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-serif text-4xl font-bold text-center mb-2 text-cafe-espresso anime-slide">
        Work
      </h2>
      <p className="text-center text-cafe-roast mb-10 anime-slide">
        Where I’ve been building and learning.
      </p>

      <div className="relative border-l-4 pl-10 space-y-14 border-cafe-roast/60">
        <ScrollCafeIcon />
        {experiences.map((exp, index) => (
          <div key={index} className="relative drift-in">
            <div className="absolute -left-[3.2rem] top-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg pit-stop-hover border-4 border-cafe-cream bg-cafe-roast text-cafe-cream font-bold text-lg">
              {index + 1}
            </div>

            <div className="anime-card bg-white/90 border border-cafe-biscuit/50 rounded-xl shadow-sm p-6 hover:shadow-md hover:border-cafe-roast/40 transition-all duration-300 md:flex md:justify-between md:items-start gap-10">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h3 className="font-serif text-xl font-bold text-cafe-espresso mb-1">{exp.title}</h3>
                <p className="text-sm font-semibold text-cafe-roast mb-1">{exp.company}</p>
                <p className="text-xs text-cafe-roast/80 mb-3">📍 {exp.location} · {exp.period}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cafe-latte text-cafe-brown text-xs px-3 py-1 rounded-full border border-cafe-biscuit/40 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="md:w-1/2 list-none text-cafe-brown space-y-3">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start group">
                    <span className="mr-2 text-cafe-roast">·</span>
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
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
