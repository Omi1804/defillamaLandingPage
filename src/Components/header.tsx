import { ChevronRight } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="w-36 md:w-52 h-auto hover:opacity-80 transition-opacity">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex items-center gap-8">
          <button className="text-white/70 hover:text-white transition-colors hidden md:block">
            Documentation
          </button>
          <button className="text-white/70 hover:text-white transition-colors hidden md:block">
            About
          </button>
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative flex items-center gap-2 px-6 py-2 bg-black rounded-full border border-gray-400/40 text-white font-medium hover:scale-105 transition duration-200">
              Launch App
              <ChevronRight size={16} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
