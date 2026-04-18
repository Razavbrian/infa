// frontend/src/app/formations/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

// Types pour les données Strapi v5
interface Formation {
  id: number;
  titre: string;
  slug: string;
  type: 'initiale' | 'continue';
  description: string;
  duree: string;
  niveau: string;
  icone?: string;
}

interface StrapiResponse {
  data: Formation[];
  meta?: unknown;
}

export default function FormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtre, setFiltre] = useState<'toutes' | 'initiale' | 'continue'>('toutes');

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axios.get<StrapiResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/formations?filters[publie][$eq]=true&sort=ordre_affichage:asc`
        );
        
        // ✅ Strapi v5 : les données sont directement dans response.data.data
        setFormations(response.data.data || []);
      } catch (error) {
        console.error('Erreur chargement formations:', error);
        setFormations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFormations();
  }, []);

  // ✅ Filtrer directement sur les formations (pas besoin de .attributes)
  const formationsInitiales = formations.filter(f => f.type === 'initiale');
  const formationsContinues = formations.filter(f => f.type === 'continue');

  const formationsAffichees = filtre === 'toutes' 
    ? formations 
    : filtre === 'initiale' 
      ? formationsInitiales 
      : formationsContinues;

  return (
    <div className="min-h-screen bg-gradient-to-b from-infa-fond to-white">
      {/* Hero Section Moderne */}
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
              🎓 Nos Formations d&apos;Excellence
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 leading-tight">
              Formez-vous pour{' '}
              <span className="text-infa-or">transformer l&apos;État</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez nos formations initiales et continues conçues pour préparer les leaders de l&apos;administration publique de demain.
            </p>
            
            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              {[
                { value: `${formations.length}`, label: 'Formations' },
                { value: `${formationsInitiales.length}`, label: 'Initiales' },
                { value: `${formationsContinues.length}`, label: 'Continues' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-infa-or mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
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

      {/* Section Types de Formations */}
      <section className="section-padding">
        <div className="container-custom">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-montserrat text-infa-vert mb-4">
              Choisissez Votre Parcours
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Deux voies d&apos;excellence pour répondre à vos objectifs professionnels
            </p>
          </motion.div>

          {/* Cartes des 2 types */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Formation Initiale */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
              onClick={() => setFiltre('initiale')}
            >
              <div className="h-48 bg-gradient-to-br from-infa-vert to-infa-vertDark relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-6xl mb-4">🎓</div>
                  <h3 className="text-3xl font-bold text-white mb-2">Formation Initiale</h3>
                  <p className="text-white/90">Pour les étudiants en début de parcours</p>
                </div>
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-infa-or/20 rounded-full blur-3xl" />
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Formations diplômantes de 1 à 2 ans pour acquérir les compétences fondamentales 
                  de l&apos;administration publique. Accès sur concours ou sélection.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Diplômes reconnus par l\'État',
                    'Enseignement théorique et pratique',
                    'Stages en administration',
                    'Débouchés garantis',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-infa-vert/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-infa-vert text-sm">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-infa-vert">{formationsInitiales.length}</div>
                    <div className="text-xs text-gray-500">Formations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-infa-vert">1-2 ans</div>
                    <div className="text-xs text-gray-500">Durée</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-infa-vert">Bac+</div>
                    <div className="text-xs text-gray-500">Niveau</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link 
                    href="/formations?type=initiale" 
                    className="flex-1 btn-primary text-center"
                  >
                    Découvrir les formations
                  </Link>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-infa-vert/0 group-hover:border-infa-vert/30 rounded-3xl transition-colors pointer-events-none" />
            </motion.div>

            {/* Formation Continue */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
              onClick={() => setFiltre('continue')}
            >
              <div className="h-48 bg-gradient-to-br from-purple-600 to-purple-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-6xl mb-4">💼</div>
                  <h3 className="text-3xl font-bold text-white mb-2">Formation Continue</h3>
                  <p className="text-white/90">Pour les professionnels en activité</p>
                </div>
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl" />
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Formations courtes ou longues pour perfectionner vos compétences ou évoluer 
                  vers de nouvelles responsabilités. Flexibilité et adaptation à vos besoins.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Cycle court (à la carte)',
                    'Cycle long (Administration Générale)',
                    'Horaires flexibles',
                    'Certifications professionnelles',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-purple-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 text-sm">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{formationsContinues.length}</div>
                    <div className="text-xs text-gray-500">Formations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">1 sem - 6 mois</div>
                    <div className="text-xs text-gray-500">Durée</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">Pro</div>
                    <div className="text-xs text-gray-500">Niveau</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link 
                    href="/formations?type=continue" 
                    className="flex-1 px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all text-center"
                  >
                    Découvrir les formations
                  </Link>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-purple-600/0 group-hover:border-purple-600/30 rounded-3xl transition-colors pointer-events-none" />
            </motion.div>
          </div>

          {/* Filtres */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              { key: 'toutes', label: 'Toutes les formations', count: formations.length },
              { key: 'initiale', label: 'Formation Initiale', count: formationsInitiales.length },
              { key: 'continue', label: 'Formation Continue', count: formationsContinues.length },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setFiltre(filter.key as typeof filtre)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filtre === filter.key
                    ? 'bg-infa-vert text-white shadow-lg shadow-infa-vert/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </motion.div>

          {/* Grille des formations */}
          {loading ? (
            <div className="text-center py-20">
              <div className="loading-spinner w-16 h-16 border-4 border-infa-vert mx-auto mb-4" />
              <p className="text-gray-600">Chargement des formations...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {formationsAffichees.map((formation, index) => (
                <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="card-hover bg-white overflow-hidden group"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-7xl relative">
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {formation.icone || '🎓'}
                    </span>
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      formation.type === 'initiale'
                        ? 'bg-infa-vert text-white'
                        : 'bg-purple-600 text-white'
                    }`}>
                      {formation.type === 'initiale' ? 'Initiale' : 'Continue'}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-3 line-clamp-2">
                      {formation.titre}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {formation.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <span>📅</span> {formation.duree}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>🎯</span> {formation.niveau}
                      </span>
                    </div>

                    <Link
                      href={`/formations/${formation.slug}`}
                      className="btn-outline w-full block text-center group-hover:bg-infa-vert group-hover:text-white transition-colors"
                    >
                      Voir le programme →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-infa-vert to-infa-vertDark rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Une question sur nos formations ?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Notre équipe pédagogique est à votre disposition pour vous accompagner 
                dans votre choix de formation.
              </p>
              <Link href="/contact?sujet=formation" className="btn-secondary">
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}