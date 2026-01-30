import { motion } from "framer-motion";
import { useRef } from "react";

import controllerImg from "../assets/PlayStation-Remote.png";
import monsterImg from "../assets/monster.png";


const Home = () => {
  const constraintsRef = useRef(null);

  const items = [
    { id: 1, type: 'controller', src: controllerImg, pos: "top-10 left-10", size: "h-32" },
    { id: 2, type: 'controller', src: controllerImg, pos: "bottom-10 right-10", size: "h-32" },
    { id: 3, type: 'monster', src: monsterImg, pos: "top-20 right-20", size: "h-40" },
    { id: 4, type: 'monster', src: monsterImg, pos: "bottom-20 left-20", size: "h-40" },
  ];

  return (
    <div 
      ref={constraintsRef} 
      className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex items-center justify-center"
    >
      
  
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[600px] w-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

   
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 p-10 select-none pointer-events-none">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative h-48 w-48 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 shadow-2xl overflow-hidden">
            <span className="text-8xl">👨🏻‍💻</span>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent" />
          </div>
        </div>

        <div className="text-center md:text-left pointer-events-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-400 font-mono mb-2">
            System Online
          </motion.p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">ARYAN</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-sm">
            Everything here is weightless. Toss the gear around to clear your view.
          </p>
        </div>
      </div>

      
      {items.map((item) => (
        <motion.div
          key={item.id}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0} 
          dragMomentum={true}
          whileDrag={{ scale: 1.05, zIndex: 100 }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{
            y: { duration: 4 + item.id, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 5 + item.id, repeat: Infinity, ease: "easeInOut" }
          }}
          className={`absolute ${item.pos} z-50 cursor-grab active:cursor-grabbing`}
        >
          <img 
            src={item.src} 
            alt={item.type}
            draggable={false}
            className={`${item.size} w-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter brightness-110`}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `<span class="text-6xl">${item.type === 'monster' ? '🥫' : '🎮'}</span>`;
            }}
          />
        </motion.div>
      ))}

    </div>
  );
};

export default Home;