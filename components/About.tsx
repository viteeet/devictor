'use client';

import {Code, Database, Bot, Workflow, Globe, BarChart3} from 'lucide-react';
import {motion} from 'framer-motion';

const skills = [
  {icon: Code, title: ' '},
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
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
  Sou Desenvolvedor Full Stack com foco em entregar soluções digitais completas — desde a criação de sites modernos até automações inteligentes em Python. 
  Trabalho com <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Next.js</span> e <span className="text-white font-medium">SQL</span> para desenvolver aplicações eficientes, integradas e de alta performance.
</p>

<p className="text-gray-400 max-w-3xl mx-auto leading-relaxed mt-4">
  Meu objetivo é transformar necessidades em soluções práticas, utilizando tecnologia para automatizar processos, otimizar rotinas e gerar resultados reais. 
  Cada projeto é planejado para unir estética, funcionalidade e impacto concreto no negócio.
</p>
        </motion.div>

      </div>
    </section>
  );
}

