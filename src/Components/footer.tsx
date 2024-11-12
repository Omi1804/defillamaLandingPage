import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-[0.5px] border-white/20">
      <div className="max-w-7xl mx-auto px-8 pt-10 pb-5">
        <div className="flex items-center justify-between">
          <div className="w-36 md:w-52 h-auto">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-1 md:gap-6">
            {[
              { icon: "/twitter.png", href: "#" },
              { icon: "/telegram.png", href: "#" },
              { icon: "/discord.png", href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/5 p-2 hover:bg-white/10 transition-colors"
              >
                <img
                  src={social.icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-5 border-t-[0.5px] border-white/40 text-gray-400 text-sm">
          <p>© 2024 StarPortal.co All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
