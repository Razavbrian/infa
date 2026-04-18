// frontend/src/components/sections/FormationsPreview.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

// ✅ Types pour Strapi v5 (données plates, pas de .attributes)
interface Formation {
  id: number;
  titre: string;
  slug: string;
  type: 'initiale' | 'continue';
  description: string;
  duree: string;
  niveau: string;
  icone?: string;
  image?: {
    url?: string;
    alternativeText?: string;
  };
}

interface StrapiResponse {
  data: Formation[];
  meta?: unknown;
}

export default function FormationsPreview() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axios.get<StrapiResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/formations?populate=*&filters[publie][$eq]=true&sort=ordre_affichage:asc&pagination[limit]=3`
        );
        
        // ✅ Strapi v5 : données directement dans response.data.data
        setFormations(response.data.data || []);
      } catch (error) {
        console.error('Erreur chargement formations preview:', error);
        setFormations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFormations();
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge badge-primary text-sm mb-4 inline-block">
            🎓 Nos Formations
          </span>
          <h2 className="text-4xl font-bold font-montserrat text-infa-vert mb-4">
            Catalogue des Formations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez nos formations initiales et continues pour réussir votre carrière dans l&apos;administration publique
          </p>
        </motion.div>

        {/* Cartes de formations */}
        {loading ? (
          <div className="text-center py-12">
            <div className="loading-spinner w-12 h-12 border-4 border-infa-vert mx-auto" />
            <p className="text-gray-600 mt-4">Chargement des formations...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {formations.map((formation, index) => (
              <motion.div
                key={formation.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-hover bg-white overflow-hidden"
              >
                {/* Icône ou Image */}
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-7xl relative">
                  {formation.image?.url ? (
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${formation.image.url}`}
                      alt={formation.image.alternativeText || formation.titre}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {formation.icone || '🎓'}
                    </span>
                  )}
                  
                  {/* Badge type */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    formation.type === 'initiale'
                      ? 'bg-infa-vert text-white'
                      : 'bg-purple-600 text-white'
                  }`}>
                    {formation.type === 'initiale' ? 'Initiale' : 'Continue'}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-3 line-clamp-2">
                    {formation.titre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {formation.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <span>📅</span> {formation.duree}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>🎯</span> {formation.niveau}
                    </span>
                  </div>

                  <Link
                    href={`/formations/${formation.slug}`}
                    className="btn-outline w-full block text-center"
                  >
                    Voir le programme →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bouton Voir tout */}
        <div className="text-center">
          <Link href="/formations" className="btn-primary">
            Voir toutes les formations →
          </Link>
        </div>
      </div>
    </section>
  );
}