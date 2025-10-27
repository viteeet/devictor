'use client';

import {Code, Database, Bot, Workflow, Globe, BarChart3} from 'lucide-react';
import {motion} from 'framer-motion';

const skills = [
  {icon: Code, title: 'Full Stack Development'},
  {icon: Database, title: 'Databases'},
  {icon: Bot, title: 'Automation'},
  {icon: Workflow, title: 'APIs'},
  {icon: Globe, title: 'Cloud'},
  {icon: BarChart3, title: 'Analytics'},
];

export function About() {

  return (
    <section id="about" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
            Sobre Mim
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Desenvolvedor Full Stack especializado em criação de sites modernos, automações Python e soluções web sob medida</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.1}}
                whileHover={{scale: 1.05, rotateY: 3, rotateX: 3, z: 30, y: -10}}
                style={{perspective: 1000, transformStyle: 'preserve-3d'}}
                className="group p-6 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Efeito de fundo brilhante no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div 
                    className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{skill.title}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

