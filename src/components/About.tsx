import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      <div className="relative z-10 container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">About Me</h2>
        <div className="bg-black/80 border border-green-500/30 rounded-lg shadow-lg p-8">
          <p className="text-lg mb-4">
            Hello, I'm Genesis I. Polotan, As a CCNA-certified Network and Security Engineer, I specialize in designing, securing, and maintaining robust IT infrastructure. 
            My expertise is grounded in Cisco technologies and Windows Server (2016 & 2019) administration, ensuring reliable and secure network performance. 
            I am highly proficient with a suite of security tools, including Wireshark and Nmap for network analysis, Burp Suite for web vulnerability testing, and Snort for intrusion detection.
          </p>
          <p className="text-lg mb-4">
            What sets me apart is my ability to leverage programming to automate and fortify the network. 
            I develop custom Python scripts to create security tools and automate administrative tasks, such as managing bulk user accounts in Windows Server. 
            My background in full-stack development (React, Node.js) allows me to understand applications from the code level up, enabling a more holistic approach to security.


          </p>
          <p className="text-lg">
            Driven by a passion for the future of technology, 
            I am actively deepening my knowledge in Cybersecurity, AI/ML, Robotics, and IoT. 
            To that end, I am honing my skills with machine learning libraries like TensorFlow and PyTorch to address the next generation of network and security challenges.


          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
