// frontend/src/app/professionnels/partenariats/page.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PartenariatsPage() {
  const raisonsPartenariat = [
    {
      numero: '01',
      titre: 'Expertise technique inégalée',
      description: 'Formation de cadres performants et immédiatement opérationnels dans tous les ministères.',
      icon: '🎓',
    },
    {
      numero: '02',
      titre: 'Innovation et modernisation',
      description: 'Infrastructures modernes et méthodes pédagogiques aux standards internationaux.',
      icon: '💡',
    },
    {
      numero: '03',
      titre: 'Solutions sur-mesure',
      description: 'Programmes flexibles, adaptés aux besoins spécifiques de chaque institution publique.',
      icon: '🎯',
    },
  ];

  const impactsInvestissement = [
    {
      icon: '📚',
      titre: 'Renforcer les compétences',
      description: 'Des agents publics et cadres moyens, piliers d\'une administration efficace.',
    },
    {
      icon: '🏗️',
      titre: 'Moderniser les infrastructures',
      description: 'Outils pédagogiques pour un apprentissage à la pointe.',
    },
    {
      icon: '🚀',
      titre: 'Développer des programmes innovants',
      description: 'Directement alignés sur les priorités et défis de l\'administration.',
    },
  ];

  // Partenaires existants (à remplir au fur et à mesure)
  const partenairesExistants: Array<{ nom: string; logo: string; description: string; annee: string }> = [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-infa-vert via-infa-vertDark to-infa-vert text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              🤝 Partenariats
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 leading-tight">
              Soutenez l&apos;excellence : faites de l&apos;INFA le moteur d&apos;une administration moderne et performante
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Depuis sa création, l&apos;Institut National de Formation Administrative (INFA) est le moteur 
              de la modernisation de la fonction publique à Madagascar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?sujet=partenariat"
                className="px-8 py-4 bg-white text-infa-vert font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Devenir partenaire
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9F9F9"/>
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              Aujourd&apos;hui, sous sa <span className="font-bold text-infa-vert">8ᵉ direction générale</span>, 
              l&apos;INFA ouvre une nouvelle ère de transformation, avec pour ambition de bâtir 
              <span className="font-bold text-infa-vert"> l&apos;administration de demain, dès aujourd&apos;hui</span>.
            </p>
          </motion.div>

          {/* Pourquoi devenir partenaire */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Pourquoi devenir partenaire de l&apos;INFA ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {raisonsPartenariat.map((raison, index) => (
                <motion.div
                  key={raison.numero}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="text-5xl font-bold text-infa-vert/20 mb-4">
                    {raison.numero}
                  </div>
                  <div className="text-4xl mb-4">{raison.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {raison.titre}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {raison.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact des investissements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-infa-vert/5 to-infa-vertDark/5 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                Vos investissements contribueront à :
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Un impact direct sur la modernisation de l&apos;administration publique malgache
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {impactsInvestissement.map((impact, index) => (
                  <motion.div
                    key={impact.titre}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl mb-4">{impact.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {impact.titre}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {impact.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Promesse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 md:p-16 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Notre promesse commune
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                Transformer l&apos;administration en une institution 
                <span className="font-bold text-yellow-300"> efficace, responsable et durable</span>, 
                prête à relever les défis du XXIᵉ siècle.
              </p>
            </div>
          </motion.div>

          {/* Partenaires existants */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
              Nos Partenaires
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Ils nous font confiance et contribuent à l&apos;excellence de l&apos;INFA
            </p>
            
            {partenairesExistants.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-100">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Rejoignez nos premiers partenaires
                </h3>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                  Soyez parmi les premiers à soutenir l&apos;excellence de la formation administrative 
                  à Madagascar et à bénéficier d&apos;un partenariat privilégié avec l&apos;INFA.
                </p>
                <Link
                  href="/contact?sujet=partenariat"
                  className="btn-primary inline-block"
                >
                  Devenir partenaire fondateur
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partenairesExistants.map((partenaire, index) => (
                  <motion.div
                    key={partenaire.nom}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                  >
                    <div className="text-4xl mb-4">{partenaire.logo}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {partenaire.nom}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{partenaire.annee}</p>
                    <p className="text-gray-600 text-sm">
                      {partenaire.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-infa-vert to-infa-vertDark rounded-3xl p-8 md:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Investissez dans l&apos;avenir !
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Ensemble, faisons de l&apos;INFA le laboratoire d&apos;une fonction publique moderne et performante.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto">
                <p className="text-2xl md:text-3xl font-bold">
                  INFA + Vous = <span className="text-yellow-300">Une fonction publique moderne, agile et durable</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?sujet=partenariat"
                  className="px-8 py-4 bg-white text-infa-vert font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Devenir partenaire
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}