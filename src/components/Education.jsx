import React from 'react';

const Education = () => (
  <section id="education" className="bg-[#D0F0C0] px-6 py-12">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Education</h2>

    <div className="space-y-4">
      <div className="bg-white shadow-md rounded-md p-6 text-left">
        <h3 className="text-lg font-semibold">Florida State University</h3>
        <p className="text-sm text-gray-600">M.S. in Computer Science (Cybersecurity)</p>
        <p className="text-sm text-gray-600">Graduated: May 2025 · GPA: 3.89/4.0</p>
      </div>

      <div className="bg-white shadow-md rounded-md p-6 text-left">
        <h3 className="text-lg font-semibold">Jawaharlal Nehru Technological University</h3>
        <p className="text-sm text-gray-600">B.Tech in Computer Science and Engineering</p>
        <p className="text-sm text-gray-600">Graduated: May 2021 · GPA: 8.9/10</p>
      </div>
    </div>
  </div>
</section>
);

export default Education;
