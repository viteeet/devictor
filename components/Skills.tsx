'use client';

import {motion} from 'framer-motion';
import {Code, Database, Bot, Workflow, Globe, Terminal, Zap} from 'lucide-react';

const skillGroups = [
  {
    category: 'Frontend & UI',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend & APIs',
    skills: ['Python', 'Node.js', 'REST APIs', 'GraphQL'],
    icon: Workflow,
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Bancos de Dados',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL'],
    icon: Database,
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Automações',
    skills: ['Python Scripts', 'Bots', 'Web Scraping', 'E2E'],
    icon: Bot,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Vercel', 'Docker', 'Git', 'CI/CD'],
    icon: Globe,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    category: 'Ferramentas',
    skills: ['Framer Motion', 'i18n', 'SEO', 'Analytics'],
    icon: Zap,
    color: 'from-cyan-500 to-blue-500',
  },
];

export function Skills() {

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
            Stack & Tecnologias
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conjunto integrado de habilidades que trabalham em sinergia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.1}}
                whileHover={{scale: 1.05, y: -5}}
                className="p-6 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12 group-hover:translate-x-[400%]"></div>
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className={`p-3 bg-gradient-to-br ${group.color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-white">{group.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{opacity: 0, scale: 0.8}}
                      whileInView={{opacity: 1, scale: 1}}
                      viewport={{once: true}}
                      transition={{delay: 0.1 + skillIndex * 0.05}}
                      whileHover={{scale: 1.1}}
                      className="px-3 py-1 bg-darker border border-primary/20 rounded-full text-sm text-gray-300 hover:border-primary/50 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

