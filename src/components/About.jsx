import React from 'react';
import profilePic from '../assets/mounisha.jpg'; // Replace with your image path

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#D0F0C0] px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Profile Picture */}
        <div className="flex-shrink-0">
          <img 
            src={profilePic}
            alt="Mounisha Makineni"
            className="rounded-2xl w-64 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Right: Description */}
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Mounisha Makineni</h2>
          <p className="text-lg leading-relaxed mb-4">
            I recently completed my Master's in Computer Science (Cybersecurity) from Florida State University. My passion lies in building robust backend systems with 
            Java and Spring Boot, designing secure RESTful APIs, and architecting scalable cloud-native applications on AWS. I'm currently deepening my knowledge of 
            microservices, exploring frontend development, and deploying full-stack applications end-to-end.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            During my time at ThoughtWorks and FSU, I worked on projects involving distributed systems, PKI-based authentication, and secure data handling in cloud 
            environments. Those experiences taught me a lot about designing practical systems, collaborating with cross-functional teams, and balancing performance 
            with security.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of tech, you’ll find me reading fiction, passionately debating anime theories with friends, binge-watching entire shows through YouTube Shorts, 
            and rewatching animated classics from Disney and Pixar while waiting for my Hogwarts letter. ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
