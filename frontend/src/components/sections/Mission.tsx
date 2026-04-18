'use client';

import { motion } from 'framer-motion';

export default function Mission() {
  const missionPoints = [
    {
      icon: '✅',
      text: 'Garantir un service public efficace, efficient et responsable',
    },
    {
      icon: '🔒',
      text: 'Promouvoir les principes d\'éthique, de transparence et de redevabilité',
    },
    {
      icon: '📈',
      text: 'Soutenir durablement la performance institutionnelle',
    },
  ];

  return (
    <section className="section-padding bg-infa-vert text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold font-montserrat mb-8 text-center">
            Notre Mission
          </h2>
          
          {/* Introduction */}
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-center text-white/90">
            « L&apos;Institut a pour vocation de former des cadres administratifs compétents, intègres et orientés performance, capables de : »
          </p>
          
          {/* ✅ Liste des points avec icônes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-3xl mb-3">{point.icon}</div>
                <p className="text-lg leading-relaxed">{point.text}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Conclusion */}
          <p className="text-xl md:text-2xl leading-relaxed text-center text-white/90 mt-8 pt-8 border-t border-white/20">
            « La qualité de l&apos;administration dépend de la qualité de ses ressources humaines. 
            <span className="font-bold text-infa-or"> L&apos;INFA en constitue l&apos;un des piliers fondamentaux.</span> »
          </p>
        </motion.div>
      </div>
    </section>
  );
}