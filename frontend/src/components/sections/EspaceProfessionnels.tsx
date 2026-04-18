// frontend/src/components/sections/EspaceProfessionnels.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EspaceProfessionnels() {
  const avantagesPartenariat = [
    {
      icon: '🎓',
      titre: 'Accès aux talents',
      description: 'Recrutez parmi nos diplômés formés aux métiers de l\'administration publique.',
      couleur: 'from-blue-500 to-blue-600',
    },
    {
      icon: '🤝',
      titre: 'Co-construction',
      description: 'Participez à la conception de programmes adaptés à vos besoins métiers.',
      couleur: 'from-purple-500 to-purple-600',
    },
    {
      icon: '🏆',
      titre: 'Visibilité institutionnelle',
      description: 'Associez votre marque à l\'excellence de la formation publique malgache.',
      couleur: 'from-infa-vert to-infa-vertDark',
    },
    {
      icon: '💡',
      titre: 'Innovation pédagogique',
      description: 'Testez et déployez de nouvelles méthodes de formation avec notre expertise.',
      couleur: 'from-amber-500 to-amber-600',
    },
  ];

  const typesPartenariat = [
    {
      nom: 'Entreprise Privée',
      description: 'Collaboration pour la formation continue de vos équipes',
      icon: '🏢',
      benefices: ['Tarifs préférentiels', 'Programmes sur mesure', 'Suivi personnalisé'],
    },
    {
      nom: 'Institution Publique',
      description: 'Coopération avec les ministères et administrations',
      icon: '🏛️',
      benefices: ['Expertise technique', 'Projets structurants', 'Impact national'],
    },
    {
      nom: 'Organisation Internationale',
      description: 'Partenariats avec les agences de développement',
      icon: '🌍',
      benefices: ['Projets d\'envergure', 'Financements dédiés', 'Visibilité internationale'],
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-sm font-semibold mb-4 shadow-lg shadow-purple-500/30">
            🤝 Partenariats
          </span>
          <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
            Devenez Partenaire de l&apos;INFA
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Rejoignez un réseau d&apos;excellence et construisons ensemble l&apos;avenir 
            de l&apos;administration publique malgache.
          </p>
        </motion.div>

        {/* Grille des avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {avantagesPartenariat.map((avantage, index) => (
            <motion.div
              key={avantage.titre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icône avec gradient */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avantage.couleur} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {avantage.icon}
              </div>
              
              {/* Contenu */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-infa-vert transition-colors">
                {avantage.titre}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {avantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Types de partenariats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Nos Offres de Partenariat
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {typesPartenariat.map((type, index) => (
              <motion.div
                key={type.nom}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                {/* Header avec icône */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h4 className="text-xl font-bold">{type.nom}</h4>
                </div>
                
                {/* Contenu */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-6">
                    {type.description}
                  </p>
                  
                  {/* Bénéfices */}
                  <ul className="space-y-2 mb-6">
                    {type.benefices.map((benefice) => (
                      <li key={benefice} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-5 h-5 bg-infa-vert/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-infa-vert text-xs">✓</span>
                        </span>
                        {benefice}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Bouton */}
                  <Link
                    href={`/contact?sujet=partenariat-${type.nom.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn-outline w-full block text-center text-sm group-hover:bg-infa-vert group-hover:text-white transition-colors"
                  >
                    Nous contacter →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Témoignages / Logos partenaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-infa-vert/5 to-infa-vertDark/5 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Ils Nous Font Confiance
            </h3>
            <p className="text-gray-600">
              Découvrez les organisations qui collaborent avec l&apos;INFA
            </p>
          </div>
          
          {/* Grille de logos (placeholder) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {[
              { nom: 'Ministère FP', icon: '🏛️' },
              { nom: 'Banque Mondiale', icon: '🌍' },
              { nom: 'Union Européenne', icon: '🇪🇺' },
              { nom: 'PNUD', icon: '🤝' },
            ].map((partenaire) => (
              <div
                key={partenaire.nom}
                className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{partenaire.icon}</span>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {partenaire.nom}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à collaborer avec l&apos;INFA ?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Notre équipe partenariats est à votre disposition pour étudier votre projet 
              et construire une collaboration sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?sujet=partenariat"
                className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Demander un rendez-vous
              </Link>
              <Link
                href="/professionnels/partenariats"
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}