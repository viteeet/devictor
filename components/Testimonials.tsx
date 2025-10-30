'use client';

import {motion} from 'framer-motion';
import {Quote} from 'lucide-react';

const testimonials = [
  {
    name: 'pessoa 1',
    company: 'xxxxx',
    text: 'Victor desenvolveu soluções personalizadas que otimizaram nossos processos internos. Profissional dedicado, código de qualidade e entregas sempre no prazo. Recomendamos!',
  },
  {
    name: 'pessoa 2',
    company: 'yyyyy',
    text: 'Contratamos o Victor para desenvolver automações em Python que reduziram significativamente o tempo de operação. Profissional excepcional com excelente comunicação.',
  },
  {
    name: 'pessoa 3',
    company: 'zzzzz',
    text: 'Victor criou dashboards e sistemas de gestão que transformaram nossa análise de dados. Metodologia clara e suporte contínuo. Profissional de confiança.',
  },
];

export function Testimonials() {

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
            Depoimentos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">O que os clientes dizem sobre o meu trabalho</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="p-6 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl border border-primary/20"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-secondary">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

