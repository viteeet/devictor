'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { 
  Monitor, 
  Cpu, 
  Unplug, 
  Database, 
  MessageSquare, 
  Briefcase, 
  Users,
  Columns,
  Kanban
} from 'lucide-react';

const SERVICE_KEYS = ['websystems', 'automation', 'integrations', 'data', 'bots', 'business', 'crm', 'consulting'] as const;

const SERVICE_UI: Record<string, { icon: any, color: string }> = {
  websystems: { icon: Monitor, color: 'text-pink-500' },
  automation: { icon: Cpu, color: 'text-amber-500' },
  integrations: { icon: Unplug, color: 'text-indigo-500' },
  data: { icon: Database, color: 'text-blue-500' },
  bots: { icon: MessageSquare, color: 'text-cyan-500' },
  business: { icon: Briefcase, color: 'text-emerald-500' },
  crm: { icon: Kanban, color: 'text-sky-400' },
  consulting: { icon: Users, color: 'text-orange-500' },
};


export function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="py-24 bg-darker relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-100 tracking-tight">
            {t('services.title')}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_KEYS.map((key, index) => {
            const title = t(`services.${key}.title`);
            const description = t(`services.${key}.description`);
            const { icon: Icon, color } = SERVICE_UI[key] || { icon: Monitor, color: 'text-primary' };
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 bg-slate-900/50 border border-slate-800 rounded-[24px] shadow-xl hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 group cursor-default backdrop-blur-sm"
              >
                {/* Icon */}
                <div className={`mb-6 ${color} opacity-90 group-hover:opacity-100 transition-opacity`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                  {title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


