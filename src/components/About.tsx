import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">About Me</h2>
        <div className="bg-black/80 border border-green-500/30 rounded-lg shadow-lg p-8">
          <p className="text-lg mb-4">
            Hello, I'm Genesis I. Polotan, a Network Engineer based in the Philippines with deep expertise in full-stack development. I specialize in building robust, end-to-end applications, leveraging a strong technical foundation that spans both software and network infrastructure.
          </p>
          <p className="text-lg mb-4">
            My development toolkit for Software Development includes React, TypeScript, and Vite for dynamic front-end experiences, complemented by powerful back-end services built with Node.js, Express.js, Python, and C. I am proficient in managing data with relational databases such as PostgreSQL and MSSQL.
          </p>
          <p className="text-lg">
            I am passionate about the future of technology and actively deepening my knowledge in Cybersecurity, AI/ML, Robotics, and IoT. To that end, I am honing my skills with machine learning libraries like TensorFlow and PyTorch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
