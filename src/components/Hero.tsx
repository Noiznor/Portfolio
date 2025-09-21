import React from 'react';
import { Code, Shield, Zap, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              Penetration Tester • Network Security Engineer • Threat Research Analyst
            </p>
            <p className="text-gray-400 leading-relaxed">
              Specialized in offensive security, network infrastructure protection, and advanced threat detection. 
              Passionate about building secure systems and conducting security research to stay ahead of emerging threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group border border-green-500/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 bg-black/50">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-green-400/10 rounded-full group-hover:bg-green-400/20 transition-colors">
                  <Shield className="h-8 w-8 text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">Penetration Testing</h3>
              <p className="text-gray-400 text-sm">
                Advanced ethical hacking techniques, vulnerability assessment, and security auditing
              </p>
            </div>

            <div className="group border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 bg-black/50">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-cyan-400/10 rounded-full group-hover:bg-cyan-400/20 transition-colors">
                  <Code className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Secure Development</h3>
              <p className="text-gray-400 text-sm">
                Building secure applications, code review, and implementing security best practices
              </p>
            </div>

            <div className="group border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 bg-black/50">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-yellow-400/10 rounded-full group-hover:bg-yellow-400/20 transition-colors">
                  <Zap className="h-8 w-8 text-yellow-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Threat Research</h3>
              <p className="text-gray-400 text-sm">
                Malware analysis, threat intelligence, and emerging attack vector research
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <Terminal className="h-4 w-4" />
            <span>root@cyberportfolio:~$ ls projects/</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;