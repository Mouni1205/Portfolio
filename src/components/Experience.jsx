import React from 'react';
import ScrollF1Car from './ScrollF1Car';

const experiences = [
  {
    company: "Sherlocks.ai",
    title: "GTM Software Engineer – Intern",
    location: "San Francisco, CA (Remote)",
    period: "Jul 2025 – Present",
    tech: ["Java", "Spring Boot", "React", "TypeScript", "TailwindCSS", "RedPanda", "ClickHouse", "Kubernetes", "Helm", "Python", "FastAPI", "Playwright", "Prometheus", "Grafana"],
    description: [
      "Engineered a full-stack endpoint monitoring platform using Java/Spring Boot and React/TypeScript with TailwindCSS, implementing REST APIs, OAuth2 authentication, and minute-level health probes across multiple SaaS applications.",
      "Designed a real-time streaming analytics pipeline publishing probe events to RedPanda, ingesting via RedPanda Connect into ClickHouse for OLAP queries, while maintaining low-cardinality Prometheus metrics and visualizing data through Grafana.",
      "Containerized and deployed microservices architecture to Kubernetes using Helm charts, while orchestrating a Python/FastAPI session management service with Playwright for automated browser authentication across 15+ endpoints."
    ]
  },
  {
    company: "FSU Health and Wellness Center",
    title: "Software Developer – Cloud + Backend",
    location: "Tallahassee, FL",
    period: "Sep 2024 – May 2025",
    tech: ["Java", "Spring Boot", "AWS", "S3", "Lambda", "EC2", "API Gateway", "CloudWatch", "OAuth2", "Terraform"],
    description: [
      "Developed an online patient check-in system to replace manual processes, reducing average patient waiting time by 40% and eliminating 95% of paper-based workflows for 250+ daily student visits while improving staff efficiency and patient experience.",
      "Automated document handling with S3, Lambda, and expiration tracking for HIPAA forms, cutting manual processing by 95%.",
      "Deployed secure OAuth2-based APIs with API Gateway and EC2, configured CI/CD pipelines with Terraform to provision and deploy microservices enhancements on AWS, and integrated CloudWatch for real-time health monitoring."
    ]
  },
  {
    company: "Thoughtworks",
    title: "Software Developer (Client: National Payments Corporation of India)",
    location: "Hyderabad, India",
    period: "Jun 2022 – Aug 2023",
    tech: ["Java", "gRPC", "Spring Boot", "RAFT", "DLT", "Kubernetes", "PKI", "X.509", "RSA", "Apache JMeter", "Checkmarx"],
    description: [
      "Engineered a Java gRPC SDK and secure APIs integrating 50+ banking systems with a RAFT-based DLT platform; cutting IMPS processing time by 30% on Kubernetes and reduced payment fraud by 25% across 355M+ monthly transactions.",
      "Established PKI security by generating PKCS8 private keys and X.509 certificates for identity verification, and implemented RSA-based payload encryption ensuring 100% digitally signed transaction authentication, protecting against potential fraud.",
      "Executed Checkmarx static analysis achieving 95% code coverage and eliminated all OWASP Top 10 critical vulnerabilities.",
      "Performed load testing with Apache JMeter simulating 10,000+ concurrent transactions, achieving 99.999% uptime during peak high-traffic periods."
    ]
  },
  {
    company: "Thoughtworks",
    title: "Software Developer (Client: Standard Chartered Bank)",
    location: "Hyderabad, India",
    period: "Nov 2021 – May 2022",
    tech: ["SwiftUI", "Kingfisher", "Xcode", "UIKit", "RESTful APIs"],
    description: [
      "Integrated and developed SwiftUI components for a mobile banking app used by 1M+ users, enhancing user satisfaction.",
      "Optimized profile upload workflows using Kingfisher and shimmer effect, reducing image latency by 24%.",
      "Resolved 10+ UI bugs and added quick links on the holdings page to simplify navigation and enhance user experience.",
      "Refined credit card page layout and interactions in collaboration with designers and backend developers, integrating RESTful APIs in SwiftUI to improve usability and engagement."
    ]
  },
  {
    company: "Thoughtworks",
    title: "Software Developer – Co-op",
    location: "Hyderabad, India",
    period: "May 2021 – Oct 2021",
    tech: ["Java", "REST APIs", "Kafka", "PostgreSQL", "Docker", "CircleCI", "Gatling", "Pact"],
    description: [
      "Built a reusable Java SDK and standardized microservice templates supporting REST APIs, Kafka event streaming, and PostgreSQL with CI/CD via CircleCI and Docker, reducing new service setup time by 60%.",
      "Architected comprehensive testing strategy using Gatling for load testing and Pact for contract testing in event-driven Kafka microservices architecture."
    ]
  }
];

const Experience = () => (
  <section id="experience" className="bg-[#F5F5F5] px-6 py-16 relative overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 anime-slide">
        💼 Professional Journey
      </h2>

      <div className="relative border-l-4 pl-10 space-y-14" style={{ borderColor: '#3B82F6' }}>
        {/* F1 Car that moves as you scroll */}
        <ScrollF1Car />
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`relative drift-in stagger-${index + 1}`}
          >
            {/* Timeline Marker */}
            <div className="absolute -left-[3.2rem] top-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg pit-stop-hover border-4 border-white magic-glow" style={{ backgroundColor: '#3B82F6' }}>
              <span className="text-white font-bold text-lg">{index + 1}</span>
            </div>

            <div className="anime-card bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 md:flex md:justify-between md:items-start gap-10">
              {/* Left: Title & Tech */}
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                <p className="text-sm font-semibold mb-1" style={{ color: '#F97316' }}>{exp.company}</p>
                <p className="text-xs text-gray-500 mb-3">📍 {exp.location} • ⏰ {exp.period}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gradient-to-r from-blue-50 to-orange-50 text-xs px-3 py-1 rounded-full border sparkle-hover font-medium"
                      style={{ color: '#3B82F6', borderColor: '#93C5FD' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Description */}
              <ul className="md:w-1/2 list-none text-gray-700 space-y-3">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start group">
                    <span className="mr-2 group-hover:scale-125 transition-transform" style={{ color: '#F97316' }}>⚡</span>
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
