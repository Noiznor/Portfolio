import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Contact</h2>
        <div className="bg-black/80 border border-green-500/30 rounded-lg shadow-lg p-8 text-center">
          <p className="text-lg mb-4">You can reach me at:</p>
          <a href="mailto:your.email@example.com" className="text-green-400 underline">gpolotan@proton.me</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
