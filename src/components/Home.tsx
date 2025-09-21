import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const roles = [
    "I'm a freelance Developer",
    "a Computer Engineering Student", 
    "cybersecurity enthusiast",
    "Head Network Engineer at SPHR"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentRoleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Terminal Window */}
        <div className="bg-black/80 border border-green-500/30 rounded-lg shadow-2xl shadow-green-400/10 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-900/50 border-b border-green-500/30 px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-400 text-sm">genesis@portfolio:~$</span>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-8 md:p-12">
            <div className="space-y-6">
              {/* Greeting */}
              <div className="text-left">
                <span className="text-green-400">genesis@portfolio:~$ </span>
                <span className="text-white">whoami</span>
              </div>
              
              {/* Name Introduction */}
              <div className="text-2xl md:text-4xl font-bold">
                <span className="text-gray-400">Hi, my name is </span>
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Genesis Polotan
                </span>
              </div>
              
              {/* Animated Role */}
              <div className="text-left">
                <span className="text-green-400">genesis@portfolio:~$ </span>
                <span className="text-white">echo $ROLE</span>
              </div>
              
              <div className="h-16 flex items-center">
                <div className="text-xl md:text-2xl text-cyan-400">
                  {displayText}
                  <span className="animate-pulse text-green-400">|</span>
                </div>
              </div>
              
              {/* Skills Preview */}
              <div className="text-left space-y-2">
                <div>
                  <span className="text-green-400">genesis@portfolio:~$ </span>
                  <span className="text-white">ls skills/</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-gray-300 hover:text-green-400 transition-colors cursor-default">
                    cybersecurity/
                  </div>
                  <div className="text-gray-300 hover:text-cyan-400 transition-colors cursor-default">
                    networking/
                  </div>
                  <div className="text-gray-300 hover:text-yellow-400 transition-colors cursor-default">
                    development/
                  </div>
                  <div className="text-gray-300 hover:text-purple-400 transition-colors cursor-default">
                    engineering/
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="pt-8">
                <div className="text-left mb-4">
                  <span className="text-green-400">genesis@portfolio:~$ </span>
                  <span className="text-white">./explore_portfolio.sh</span>
                </div>
                <div className="flex justify-center">
                  <a
                    href="#about"
                    className="group flex items-center space-x-2 px-6 py-3 border border-green-500/50 rounded-lg hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 text-green-400 hover:text-green-300"
                  >
                    <span>Explore My Work</span>
                    <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
      </div>
    </section>
  );
};

export default Home;