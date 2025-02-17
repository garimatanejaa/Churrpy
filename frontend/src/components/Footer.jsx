import React from 'react';
import { Coffee, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-yellow-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-2 text-gray-600">
            <span>Made with</span>
            <Coffee className="size-4 text-yellow-500" />
            <span>by</span>
            <span className="font-semibold text-yellow-500">Garima</span>
          </div>
          
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-yellow-500 transition-colors"
          >
            <Github className="size-4" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;