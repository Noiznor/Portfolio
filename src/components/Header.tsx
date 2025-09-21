import React from 'react';
import { Shield, Terminal, Network } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-green-500/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-green-400" />
              <div className="absolute inset-0 h-8 w-8 text-green-400 animate-pulse opacity-50">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <div>
                  <h1 className="text-xl font-bold text-green-400">
                    GenSec<span className="text-cyan-400">Portfolio</span>
                  </h1>
              <p className="text-xs text-gray-500">Security • Networking • Research</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-cyan-400 transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1">
              <Terminal className="h-4 w-4" />
              <span>About</span>
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1">
              <Network className="h-4 w-4" />
              <span>Projects</span>
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;