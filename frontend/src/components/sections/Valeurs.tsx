'use client';

import { motion } from 'framer-motion';

const valeurs = [
  {
    titre: "L'Excellence",
    description: "Nous visons la performance absolue à travers un enseignement de haut niveau et des infrastructures modernisées.",
    icon: "🏆",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    titre: "L'Innovation",
    description: "Nous transformons l'administration par l'adoption de nouvelles technologies et des méthodes pédagogiques agiles.",
    icon: "💡",
    color: "from-blue-400 to-blue-600"
  },
  {
    titre: "L'Intégrité",
    description: "Nous forgeons des serviteurs de l'État exemplaires, dont l'éthique et la transparence sont les garants de la confiance publique.",
    icon: "⚖️",
    color: "from-purple-400 to-purple-600"
  },
  {
    titre: "L'Efficience",
    description: "Nous cultivons le sens du résultat et l'optimisation des ressources pour un impact direct sur le développement du pays.",
    icon: "📈",
    color: "from-green-400 to-green-600"
  }
];

export default function Valeurs() {
  return (
    <section className="section-padding bg-infa-fond">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-montserrat text-infa-vert mb-4">
            Nos 4 Piliers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pour incarner ce renouveau sous l&apos;égide de la nouvelle direction générale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valeurs.map((valeur, index) => (
            <motion.div
              key={valeur.titre}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-hover p-8 bg-white border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${valeur.color} flex items-center justify-center text-3xl mb-6`}>
                {valeur.icon}
              </div>
              <h3 className="text-xl font-bold font-montserrat text-infa-vert mb-3">
                {valeur.titre}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {valeur.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}