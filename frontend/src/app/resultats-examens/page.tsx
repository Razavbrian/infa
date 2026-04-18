// frontend/src/app/resultats-examens/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

// ✅ Types pour Strapi v5 (données plates, pas de .attributes)
interface Resultat {
  id: number;
  titre: string;
  type: 'initiale' | 'continue';  // ← Changé de 'filiere' à 'type'
  niveau: string;
  semestre: string;
  date_publication: string;
  fichier_pdf?: {
    url?: string;
    name?: string;
  };
}

interface StrapiResponse {
  data: Resultat[];
  meta?: unknown;
}

export default function ResultatsExamensPage() {
  const [resultats, setResultats] = useState<Resultat[]>([]);
  const [loading, setLoading] = useState(true);
  // ✅ Filtre par type de formation au lieu de filière
  const [filtre, setFiltre] = useState<'toutes' | 'initiale' | 'continue'>('toutes');

  useEffect(() => {
    const fetchResultats = async () => {
      try {
        const response = await axios.get<StrapiResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/resultat-examens?populate=*&filters[publie][$eq]=true&sort=ordre_affichage:desc`
        );
        // ✅ Strapi v5 : données directement dans response.data.data
        setResultats(response.data.data || []);
      } catch (error) {
        console.error('Erreur chargement résultats:', error);
        setResultats([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResultats();
  }, []);

  // ✅ Filtres par type de formation
  const types = ['toutes', 'initiale', 'continue'];

  const resultatsFiltres = filtre === 'toutes' 
    ? resultats 
    : resultats.filter(r => r.type === filtre);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // ✅ Badge couleur selon le type
  const getTypeBadge = (type: string) => {
    if (type === 'initiale') {
      return 'bg-infa-vert text-white';
    }
    return 'bg-purple-600 text-white';
  };

  const getTypeLabel = (type: string) => {
    if (type === 'initiale') {
      return 'Formation Initiale';
    }
    return 'Formation Continue';
  };

  return (
    <div className="min-h-screen bg-infa-fond">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="container-custom">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold mb-4">📊 Résultats des Examens</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Consultez les résultats publiés par type de formation
          </p>
        </div>
      </section>

      {/* Filtres par Type de Formation */}
      <section className="section-padding-sm bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFiltre(type as typeof filtre)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filtre === type
                    ? 'bg-infa-vert text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type === 'toutes' ? 'Toutes' : getTypeLabel(type)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-12">
              <div className="loading-spinner w-16 h-16 border-4 border-infa-vert mx-auto mb-4" />
              <p className="text-gray-600">Chargement des résultats...</p>
            </div>
          ) : resultatsFiltres.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center">
              <p className="text-gray-600">
                Aucun résultat disponible pour {filtre === 'toutes' ? 'le moment' : getTypeLabel(filtre)}.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resultatsFiltres.map((resultat, index) => (
                <motion.div
                  key={resultat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-hover bg-white p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    {/* ✅ Badge avec couleur selon le type */}
                    <span className={`badge text-xs px-3 py-1 rounded-full font-semibold ${getTypeBadge(resultat.type)}`}>
                      {getTypeLabel(resultat.type)}
                    </span>
                    <span className="text-2xl">📄</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3">{resultat.titre}</h3>

                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex justify-between">
                      <span>Niveau :</span>
                      <span className="font-medium">{resultat.niveau}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Semestre :</span>
                      <span className="font-medium">{resultat.semestre}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Publié le :</span>
                      <span className="font-medium">{formatDate(resultat.date_publication)}</span>
                    </div>
                  </div>

                  {resultat.fichier_pdf?.url ? (
                    <a
                      href={`${process.env.NEXT_PUBLIC_API_URL}${resultat.fichier_pdf.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full block text-center text-sm"
                    >
                      📥 Télécharger le PDF
                    </a>
                  ) : (
                    <p className="text-sm text-gray-500 text-center">
                      Résultats consultables sur place
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}