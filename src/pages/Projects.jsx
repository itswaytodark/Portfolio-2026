import { motion } from "framer-motion";

import { Code2, Globe, Cpu, Layers, ExternalLink } from "lucide-react";

import P1 from "../assets/P1.png";
import P2 from "../assets/p2.png";

const Projects = () => {
  const skills = [
    { name: "React", icon: <Cpu size={16} /> },
    { name: "Node.js", icon: <Layers size={16} /> },
    { name: "MongoDB", icon: <Globe size={16} /> },
    { name: "JavaScript", icon: <Code2 size={16} /> },
  ];

  const projectData = [
    {
      title: "EasyLearn",
      description: "A Blog platform for sharing Stories.",
      link: "https://yourproject1.com",
      image: P1,
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "FoodMood",
      description: "An AI-powered food recommendation app that suggests dishes based on your mood.",
      link: "https://foodmood-xoik.vercel.app/",
      image: P2, 
      tags: ["React", "AI"],
      color: "from-purple-600 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white p-6 md:p-20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Skills Section */}
        <section className="mb-24">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-8">Technical Arsenal</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -5, borderColor: '#3b82f6' }}
                className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-md transition-colors"
              >
                <span className="text-blue-400">{skill.icon}</span>
                <span className="font-medium text-slate-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-sm uppercase tracking-[0.3em] text-purple-500 font-bold mb-10">Selected Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projectData.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all shadow-2xl"
              >
                {/* 1. Thumbnal*/}
                <div className="relative h-52 md:h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60`} />
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1614332284683-51ebe9023d5a?q=80&w=1000&auto=format&fit=crop"; // Aesthetic placeholder
                    }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-slate-950/80 backdrop-blur-md p-2 rounded-full border border-white/10 group-hover:bg-blue-600 transition-colors">
                    <ExternalLink size={18} />
                  </div>
                </div>

                {/* 2. Content Area */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Highlight Line */}
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${project.color} transition-all duration-500 absolute bottom-0`} />
              </motion.a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Projects;