// frontend/src/app/formations/[slug]/page.tsx

'use client';

import { useParams } from 'next/navigation';
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
  conditions?: string;
  icone?: string;
}

interface StrapiResponse {
  data : Formation[];
  meta?: unknown;
}

export default function FormationDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [formation, setFormation] = useState<Formation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormation = async () => {
      try {
        const response = await axios.get<StrapiResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/formations?filters[slug]=${slug}&populate=*`
        );
        
        // ✅ Strapi v5 : premier élément du tableau data
        setFormation(response.data.data[0] || null);
      } catch (error) {
        console.error('Erreur chargement formation:', error);
        setFormation(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFormation();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-infa-fond">
        <div className="text-center">
          <div className="loading-spinner w-16 h-16 border-4 border-infa-vert mx-auto mb-4" />
          <p className="text-gray-600">Chargement des détails...</p>
        </div>
      </div>
    );
  }

  if (!formation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-infa-fond">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Formation non trouvée</h1>
          <p className="text-gray-600 mb-8">Cette formation n&apos;existe pas ou a été supprimée.</p>
          <Link href="/formations" className="btn-primary">
            Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  // ✅ Strapi v5 : accès direct aux propriétés (pas de .attributes)
  const isInitiale = formation.type === 'initiale';
  const couleur = isInitiale ? 'from-infa-vert to-infa-vertDark' : 'from-purple-600 to-purple-700';

  return (
    <div className="min-h-screen bg-infa-fond">
      {/* Header */}
      <section className={`bg-gradient-to-r ${couleur} text-white py-20 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container-custom relative z-10">
          <Link href="/formations" className="text-white/80 hover:text-white mb-6 inline-block">
            ← Retour aux formations
          </Link>
          
          <div className="flex items-start gap-6">
            <div className="text-7xl">{formation.icone || '🎓'}</div>
            <div>
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-3">
                {isInitiale ? 'Formation Initiale' : 'Formation Continue'}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
                {formation.titre}
              </h1>
              <div className="flex flex-wrap gap-6 text-lg">
                <span>📅 {formation.duree}</span>
                <span>🎯 {formation.niveau}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-card p-8"
              >
                <h2 className="text-2xl font-bold text-infa-vert mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {formation.description}
                </p>
              </motion.div>

              {/* Conditions d'admission */}
              {formation.conditions && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-card p-8"
                >
                  <h2 className="text-2xl font-bold text-infa-vert mb-4">
                    📋 Conditions d&apos;Admission
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {formation.conditions}
                  </p>
                </motion.div>
              )}

              {/* Informations complémentaires */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-infa-vert/5 to-infa-vertDark/5 rounded-2xl p-8 border border-infa-vert/20"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ℹ️ Informations Complémentaires
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pour plus d&apos;informations sur cette formation, les modalités d&apos;inscription 
                  et les tarifs, veuillez contacter notre équipe pédagogique.
                </p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-card p-8 sticky top-24"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">Informations</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-semibold text-gray-800">
                      {isInitiale ? 'Formation Initiale' : 'Formation Continue'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Durée</p>
                    <p className="font-semibold text-gray-800">{formation.duree}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Niveau</p>
                    <p className="font-semibold text-gray-800">{formation.niveau}</p>
                  </div>
                </div>

                <Link 
                  href={`/contact?sujet=inscription&formation=${encodeURIComponent(formation.titre)}`}
                  className="btn-primary w-full block text-center mb-4"
                >
                  S&apos;inscrire maintenant
                </Link>
                <Link 
                  href={`/contact?sujet=info-formation&formation=${encodeURIComponent(formation.titre)}`}
                  className="btn-outline w-full block text-center"
                >
                  Demander plus d&apos;infos
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}