'use client';

import {Code, Database, Zap, Network, Cloud, BarChart3} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';
import {useState, useEffect} from 'react';
import {X} from 'lucide-react';

interface ServiceDetail {
  icon: any;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  useCases: string[];
}

const services: ServiceDetail[] = [
  {
    icon: Code,
    title: 'Full Stack Development',
    shortDescription: 'Desenvolvimento completo de aplicações web',
    fullDescription: 'Desenvolvimento Full Stack é a criação de aplicações web completas, cobrindo tanto o lado visual (frontend) quanto o lado do servidor (backend). Imagine um site que não apenas mostra informações, mas também permite interação, armazenamento de dados e funcionalidades avançadas.',
    benefits: [
      'Solução completa em uma única pessoa',
      'Redução de custos e tempo de desenvolvimento',
      'Melhor comunicação entre frontend e backend',
      'Aplicações modernas e escaláveis'
    ],
    useCases: [
      'E-commerce completo com sistema de pagamentos',
      'Plataformas SaaS (Software as a Service)',
      'Redes sociais e aplicativos web',
      'Sistemas de gestão empresarial'
    ]
  },
  {
    icon: Database,
    title: 'Databases',
    shortDescription: 'Projeto e otimização de bancos de dados',
    fullDescription: 'Um banco de dados é onde todas as informações do seu sistema ficam armazenadas de forma organizada. Como uma biblioteca digital, permite guardar, organizar e recuperar dados de forma rápida e segura. É o coração de qualquer aplicação que precisa guardar informações.',
    benefits: [
      'Armazenamento seguro e organizado',
      'Busca e recuperação de dados rápida',
      'Backup automático e proteção contra perda',
      'Suporta milhões de dados simultaneamente'
    ],
    useCases: [
      'Cadastro de clientes e produtos',
      'Histórico de vendas e transações',
      'Perfis de usuários em plataformas',
      'Relatórios e análises de negócios'
    ]
  },
  {
    icon: Zap,
    title: 'Automation',
    shortDescription: 'Automação de processos repetitivos',
    fullDescription: 'Automação é como ter um assistente digital que trabalha 24/7 realizando tarefas repetitivas sem precisar de intervenção humana. Elimina erros, economiza tempo e reduz custos operacionais, liberando sua equipe para trabalhos mais estratégicos.',
    benefits: [
      'Economia de tempo e recursos',
      'Redução de erros humanos',
      'Atuação 24/7 sem pausas',
      'Maior produtividade da equipe'
    ],
    useCases: [
      'Envio automático de emails e relatórios',
      'Atualização de estoque em tempo real',
      'Processamento de pedidos online',
      'Coleta e organização de dados de múltiplas fontes'
    ]
  },
  {
    icon: Network,
    title: 'APIs',
    shortDescription: 'Integração de sistemas e serviços',
    fullDescription: 'API (Application Programming Interface) é uma ponte que conecta diferentes sistemas, permitindo que eles "conversem" e compartilhem informações. É como um garçom que leva seus pedidos até a cozinha e traz de volta o que você precisa.',
    benefits: [
      'Integração entre diferentes plataformas',
      'Reutilização de funcionalidades',
      'Escalabilidade e flexibilidade',
      'Desenvolvimento mais rápido'
    ],
    useCases: [
      'Conectar seu sistema com pagamentos (Stripe, PayPal)',
      'Integrar com redes sociais (Facebook, Instagram)',
      'Sincronizar dados entre múltiplas plataformas',
      'Acessar serviços externos (mapas, clima, tradução)'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud',
    shortDescription: 'Soluções em nuvem e infraestrutura',
    fullDescription: 'Cloud (nuvem) é o armazenamento e processamento de dados em servidores remotos acessíveis pela internet. Ao invés de ter servidores físicos no seu escritório, você "aluga" espaço e poder de processamento na nuvem, pagando apenas pelo que usar.',
    benefits: [
      'Custo menor que servidores próprios',
      'Escalável conforme necessidade',
      'Acesso de qualquer lugar',
      'Backup automático e segurança profissional'
    ],
    useCases: [
      'Hospedagem de sites e aplicações',
      'Armazenamento de arquivos e backups',
      'Processamento de grandes volumes de dados',
      'Serviços SaaS acessíveis globalmente'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    shortDescription: 'Análise de dados e métricas de negócio',
    fullDescription: 'Analytics é a ciência de transformar dados em insights valiosos para o seu negócio. Através de dashboards e relatórios visuais, você entende o comportamento dos clientes, identificando oportunidades de melhoria e tomando decisões baseadas em dados reais.',
    benefits: [
      'Tomada de decisão baseada em dados',
      'Identificação de tendências e oportunidades',
      'Otimização de estratégias de negócio',
      'Mensuração de ROI e performance'
    ],
    useCases: [
      'Dashboard de vendas em tempo real',
      'Análise de comportamento do usuário',
      'Relatórios de performance de marketing',
      'Monitoramento de KPIs do negócio'
    ]
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  // Fechar modal com ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedService) {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <>
      <section id="services" className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
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
                  whileHover={{scale: 1.05}}
                  className="group cursor-pointer p-8 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
                  onClick={() => setSelectedService(service)}
                >
                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12 group-hover:translate-x-[400%]"></div>
                  
                  <motion.div 
                    className="mb-4 p-4 bg-primary/20 rounded-lg w-fit group-hover:bg-primary/30 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-secondary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.shortDescription}</p>
                  <p className="text-sm text-secondary mt-3 group-hover:text-accent transition-colors">
                    Clique para saber mais →
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            
            <motion.div
              initial={{opacity: 0, scale: 0.9, y: 20}}
              animate={{opacity: 1, scale: 1, y: 0}}
              exit={{opacity: 0, scale: 0.9, y: 20}}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-dark to-darker border border-primary/30 rounded-xl shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 bg-dark/95 backdrop-blur-sm border-b border-primary/30 p-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <selectedService.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">{selectedService.title}</h3>
                    <p className="text-gray-400 text-sm">{selectedService.shortDescription}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Descrição Completa */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">O que é?</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Benefícios */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">Benefícios para o seu negócio:</h4>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Casos de Uso */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">Exemplos de uso:</h4>
                  <ul className="space-y-2">
                    {selectedService.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-accent mt-1">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-primary/20">
                  <p className="text-center text-gray-300 mb-4">
                    Pronto para implementar esta solução no seu negócio?
                  </p>
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-lg hover:from-accent hover:to-secondary transition-all duration-300"
                    onClick={() => setSelectedService(null)}
                  >
                    Entre em contato
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

