import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Bebas+Neue&display=swap');
        .nav-mono { font-family: 'Space Mono', monospace; }
        .nav-bebas { font-family: 'Bebas Neue', sans-serif; }
        @keyframes nav-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .nav-scan-line { animation: nav-scan 3.5s linear infinite; }
      `}</style>

      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mx-5 my-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      >
        <div
          className={`
            relative rounded-2xl border overflow-hidden
            transition-all duration-300
            ${scrolled
              ? "bg-white/5 border-white/10 backdrop-blur-xl"
              : "bg-white/[0.03] border-white/[0.07] backdrop-blur-md"
            }
          `}
        >
          {/* Subtle scan shimmer on the top border */}
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <div className="nav-scan-line absolute top-0 w-1/4 h-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
          </div>

          <div className="px-5 py-3 flex items-center justify-between">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group select-none">
              <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Corner brackets as logo mark */}
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-cyan-400 group-hover:border-cyan-300 transition-colors duration-200" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-cyan-400 group-hover:border-cyan-300 transition-colors duration-200" />
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-cyan-400 group-hover:border-cyan-300 transition-colors duration-200" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-cyan-400 group-hover:border-cyan-300 transition-colors duration-200" />
                <span className="nav-bebas text-white text-sm leading-none">A</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="nav-bebas text-white text-lg tracking-widest leading-none">ARYAN GOHIL</span>
                <span className="nav-mono text-cyan-500 text-[9px] tracking-[0.25em] leading-none mt-0.5">DEV.PORTFOLIO</span>
              </div>
            </a>

            {/* Links */}
            <div className="flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setActiveLink(link.href)}
                  onMouseLeave={() => setActiveLink(null)}
                  className="relative nav-mono text-xs tracking-[0.2em] uppercase px-4 py-2 text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  {/* Hover bg pill */}
                  <motion.span
                    initial={false}
                    animate={{ opacity: activeLink === link.href ? 1 : 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 rounded-lg bg-white/5"
                  />
                  {/* Left bracket */}
                  <span className="relative inline-flex items-center gap-1.5">
                    <span className="text-cyan-500/0 group-hover:text-cyan-500/70 transition-colors duration-200 text-xs">[</span>
                    {link.label}
                    <span className="text-cyan-500/0 group-hover:text-cyan-500/70 transition-colors duration-200 text-xs">]</span>
                  </span>
                  {/* Active underline */}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-cyan-400/0 group-hover:bg-cyan-400/50 transition-all duration-200" />
                </a>
              ))}

              {/* Status dot */}
              <div className="ml-3 pl-3 border-l border-white/10 flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                <span className="nav-mono text-green-500/70 text-[9px] tracking-widest hidden sm:block">SYS:ON</span>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Spacer so page content doesn't hide under fixed nav */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;