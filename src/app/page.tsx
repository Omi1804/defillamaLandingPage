"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const Page = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen">
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

      <main className="pt-24 md:pt-32 overflow-hidden">
        <section className="relative mb-20 md:mb-36">
          <img
            src="/graphs.png"
            alt=""
            className="w-full h-full absolute -top-[10rem] z-[0] opacity-70"
          />
          <div className="flex items-center justify-center flex-col gap-6 px-4 ">
            <h1 className="text-white text-5xl md:text-7xl font-bold text-center max-w-3xl p-1 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Start your DeFi journey today.
            </h1>
            <p className="text-white/60 text-lg font-light max-w-2xl text-center leading-relaxed">
              All-in-one analytics to track, analyze, and visualize on-chain
              data. Empowering investors, developers, and researchers with
              real-time insights across blockchains.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity cursor-pointer z-10">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-colors cursor-pointer z-10">
                View Demo
              </button>
            </div>
          </div>

          <div className="mt-16 relative">
            <img
              src="/aura.png"
              alt=""
              className="absolute w-[70%] h-full scale-150 top-[-5rem] right-0 opacity-70 z-[0]"
            />
            <img
              src="/Protocols.png"
              alt="Protocols"
              className="w-full max-w-5xl mx-auto h-auto object-contain z-10"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 mb-20 md:mb-32 relative z-20">
          <h2 className="text-3xl md:text-5xl text-white text-center font-medium max-w-3xl mx-auto leading-tight mb-24">
            We're committed to delivering
            <span className="text-gray-400"> high-quality data </span>
            and tools to empower our users.
          </h2>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {[
              { name: "ETHEREUM", img: "/companies/ether.png" },
              { name: "TRON", img: "/companies/tron.png" },
              { name: "BASE", img: "/companies/base.png" },
              { name: "ARBITRUM", img: "/companies/arbitrium.png" },
              { name: "AVALANCHE", img: "/companies/avalance.png" },
            ].map((platform, index) => (
              <div
                key={platform.name}
                className="group hover:scale-110 transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: `translateY( ${
                    Math.sin(scrollY * 0.01 + index) * 10
                  }px)`,
                }}
              >
                <div className="relative flex flex-col items-center gap-4 p-8 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/40 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={platform.img}
                    alt={platform.name}
                    className="w-16 h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-gray-400 font-medium text-sm group-hover:text-white transition-colors relative z-10">
                    {platform.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mountain Section */}
        <section className="relative mb-20 md:mb-24 z-20 ">
          <div className="text-center w-full mx-auto flex flex-col items-center justify-center gap-16">
            <h2 className="text-3xl md:text-6xl max-w-5xl font-bold leading-tight">
              <span className="text-white">
                Making data-driven crypto decisions
              </span>
              <br />
              <span className="text-gray-400">accessible to all.</span>
            </h2>
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src="/mountain.png"
                alt="Mountain"
                className="w-full h-auto object-contain  transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        <section className="relative mb-20 md:mb-32 z-20 ">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-2xl md:text-5xl text-white text-center font-medium max-w-3xl mx-auto leading-tight mb-9 md:mb-16">
              Explore the latest trends and developments in the
              <span className="text-gray-400"> DeFi space</span>.
            </h1>
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full blur opacity-50 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative flex items-center gap-3 px-8 py-4 bg-black rounded-full border border-gray-800 text-white font-medium hover:scale-105 transition-all duration-300">
                Explore Dashboard Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </section>
      </main>
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
    </div>
  );
};

export default Page;
