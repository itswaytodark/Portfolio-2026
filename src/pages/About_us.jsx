import { motion } from "framer-motion";
import { useRef } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const HUDCorners = ({ color = "border-cyan-400/50" }) => (
  <>
    <span className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${color}`} />
    <span className={`absolute top-0 right-0 w-3 h-3 border-t border-r ${color}`} />
    <span className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l ${color}`} />
    <span className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${color}`} />
  </>
);

const SectionLabel = ({ index, label }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="nav-mono text-cyan-500/50 text-xs">[ {String(index).padStart(2, "0")} ]</span>
    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
    <span className="nav-mono text-slate-500 text-xs tracking-[0.25em] uppercase">{label}</span>
  </div>
);

const skills = [
  { name: "React", level: 85, color: "from-cyan-500 to-blue-500" },
  { name: "Node.js / Express", level: 80, color: "from-blue-500 to-indigo-500" },
  { name: "MongoDB", level: 75, color: "from-indigo-500 to-violet-500" },
  { name: "SQL", level: 70, color: "from-violet-500 to-purple-500" },
  { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-teal-400" },
];

const SkillBar = ({ name, level, color, delay }) => (
  <motion.div {...fadeUp(delay)} className="group">
    <div className="flex justify-between items-center mb-1.5">
      <span className="nav-mono text-xs text-slate-400 tracking-wider">{name}</span>
      <span className="nav-mono text-xs text-slate-600">{level}%</span>
    </div>
    <div className="h-1.5 bg-slate-800/80 rounded-full overflow-hidden relative">
      <HUDCorners color="border-slate-700/0" />
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut", delay: delay + 0.2 }}
        className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
      >
        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
      </motion.div>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, delay }) => (
  <motion.div {...fadeUp(delay)} className="relative p-5 bg-white/[0.03] border border-white/[0.07] rounded-xl group hover:border-cyan-500/20 transition-colors duration-300">
    <HUDCorners />
    <div className="font-bebas text-4xl text-white tracking-wide">{value}</div>
    <div className="nav-mono text-xs text-slate-500 tracking-widest uppercase mt-1">{label}</div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .nav-mono { font-family: 'Space Mono', monospace; }

        .about-grid {
          background-image:
            linear-gradient(rgba(56,189,248,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.025) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-slow { animation: float-slow 7s ease-in-out infinite; }

        .scanlines-light::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 3px,
            rgba(0,0,0,0.04) 3px,
            rgba(0,0,0,0.04) 4px
          );
          pointer-events: none;
        }
      `}</style>

      <section
        id="about"
        className="relative min-h-screen bg-slate-950 text-white about-grid scanlines-light overflow-hidden py-24 px-6 md:px-16"
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-700/5 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* Page header */}
          <motion.div {...fadeUp(0)} className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-cyan-400/40" />
              <span className="nav-mono text-cyan-500/60 text-xs tracking-[0.35em] uppercase">System Profile</span>
            </div>
            <h2 className="font-bebas text-[4.5rem] md:text-[6rem] leading-none tracking-wide text-white">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ME</span>
            </h2>
          </motion.div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left col — bio + stats */}
            <div className="lg:col-span-3 space-y-10">

              <SectionLabel index={1} label="Who I Am" />

              <motion.div {...fadeUp(0.1)} className="space-y-4">
                <p className="text-slate-300 leading-relaxed text-[0.95rem]">
                  Hey — I'm <span className="text-white font-semibold">Aryan</span>, a 2nd-year BCA student
                  who builds things for the web. I got into coding with passion in Game Development,
                  and somewhere along the way it turned into a freelance hustle.
                </p>
                <p className="text-slate-400 leading-relaxed text-[0.95rem]">
                  I work with clients to design and ship full-stack web apps — clean frontends, solid backends, real databases.
                  No bloat. No fluff. Just products that do what they're supposed to.
                </p>
                <p className="text-slate-500 leading-relaxed text-[0.95rem]">
                  When I'm not pushing commits, I'm grinding games, tinkering with side projects, or overthinking
                  UI details that nobody else notices. That last one comes in handy, actually.
                </p>
              </motion.div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <StatCard value="2nd" label="Year CS" delay={0.2} />
                <StatCard value="12+" label="Projects" delay={0.3} />
                <StatCard value="∞" label="Coffee" delay={0.4} />
              </div>

                            {/* Education cards */}
              <motion.div {...fadeUp(0.35)}>
                <SectionLabel index={2} label="Education" />
                <div className="space-y-3">
 
                  {/* College */}
                  <div className="relative p-5 bg-white/[0.03] border border-white/[0.07] rounded-xl hover:border-cyan-500/20 transition-colors duration-300">
                    <HUDCorners />
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="font-bebas text-cyan-400 text-lg">BCA</span>
                      </div>
                      <div>
                        <div className="font-bebas text-xl text-white tracking-wider">Bachelor of Computer Applications</div>
                        <div className="nav-mono text-cyan-500/70 text-xs tracking-wider mt-0.5">2nd Year · Currently Enrolled</div>
                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                          Building the academic foundation — data structures, OS, DBMS, and everything in between.
                        </p>
                      </div>
                    </div>
                  </div>
 
                  {/* Bootcamp */}
                  <div className="relative p-5 bg-white/[0.03] border border-white/[0.07] rounded-xl hover:border-blue-500/20 transition-colors duration-300">
                    <HUDCorners color="border-blue-400/40" />
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="font-bebas text-blue-400 text-lg">&lt;/&gt;</span>
                      </div>
                      <div>
                        <div className="font-bebas text-xl text-white tracking-wider">Full-Stack Coding Bootcamp</div>
                        <div className="nav-mono text-blue-400/70 text-xs tracking-wider mt-0.5">Intensive Training · Completed</div>
                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                          Went through an intensive bootcamp built around industry practices — agile workflows,
                          git collaboration, code reviews, API design, and shipping production-ready apps under real deadlines. Less theory, more building.
                        </p>
                      </div>
                    </div>
                  </div>
 
                </div>
              </motion.div>
            </div>

            {/* Right col — skills */}
            <div className="lg:col-span-2 space-y-6">
              <SectionLabel index={3} label="Tech Stack" />

              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={0.1 + i * 0.08} />
                ))}
              </div>

              {/* Tag cloud */}
              <motion.div {...fadeUp(0.5)} className="pt-4">
                <div className="nav-mono text-slate-600 text-xs tracking-widest uppercase mb-3">Also familiar with</div>
                <div className="flex flex-wrap gap-2">
                  {["Git", "REST APIs", "JWT Auth", "Postman", "Figma", "Linux", "Vercel", "Framer"].map((tag) => (
                    <span
                      key={tag}
                      className="nav-mono text-xs text-slate-500 border border-slate-700/60 hover:border-cyan-500/30 hover:text-slate-300 px-3 py-1 rounded-full transition-all duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Availability badge */}
              <motion.div {...fadeUp(0.6)}>
                <div className="relative mt-6 p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                  <HUDCorners color="border-green-500/30" />
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    <div>
                      <div className="nav-mono text-green-400 text-xs tracking-wider">Available for freelance</div>
                      <div className="text-slate-500 text-xs mt-0.5">Open to new projects & collabs</div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Bottom divider */}
          <motion.div {...fadeUp(0.5)} className="mt-20 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
            <span className="nav-mono text-slate-700 text-xs tracking-widest">END:PROFILE</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default About;