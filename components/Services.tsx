'use client';

import {Globe, Zap, TrendingUp, MessageSquare, Target, Wrench} from 'lucide-react';
import {motion} from 'framer-motion';

const services = [
  {icon: Globe, title: 'Desenvolvimento Web', description: 'Sites modernos e responsivos usando Next.js, React e TypeScript'},
  {icon: Zap, title: 'Automações Python', description: 'Scripts para automação de tarefas, web scraping e processamento de dados'},
  {icon: TrendingUp, title: 'Dashboards', description: 'Visualizações de dados interativas e análises em tempo real'},
  {icon: MessageSquare, title: 'Bots', description: 'Chatbots e integrações com WhatsApp, Telegram e outras plataformas'},
  {icon: Target, title: 'Landing Pages', description: 'Páginas de conversão otimizadas para resultados'},
  {icon: Wrench, title: 'Soluções Sob Medida', description: 'Projetos personalizados de acordo com suas necessidades'},
];

export function Services() {

  return (
    <section id="services" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Serviços
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Soluções completas para impulsionar seu negócio digital</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.1}}
                className="group p-8 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 p-4 bg-primary/20 rounded-lg w-fit group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

