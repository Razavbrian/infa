// frontend/src/components/sections/ResultatsExamensPreview.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

interface Resultat {
  id: number;
  titre: string;
  filiere: string;
  niveau: string;
  semestre: string;
  date_publication: string;
  fichier_pdf?: {
    data?: {
      attributes?: {
        url: string;
      };
    };
  };
}

export default function ResultatsExamensPreview() {
  const [resultats, setResultats] = useState<Resultat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResultats = async () => {
      try {
        // ✅ Appel API PUBLIC (pas de token requis)
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/resultat-examens?populate=*&filters[publie][$eq]=true&sort=ordre_affichage:desc&pagination[limit]=3`
        );
        setResultats(response.data.data);
      } catch (error) {
        console.error('Erreur chargement résultats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResultats();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-infa-fond to-white">
      <div className="container-custom">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge badge-primary text-sm mb-4 inline-block" style={{ backgroundColor: '#007E5E', color: 'white' }}>
            📊 Résultats
          </span>
          <h2 className="text-4xl font-bold font-montserrat text-infa-vert mb-4">
            Résultats des Examens
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Consultez les résultats publiés par session et par filière
          </p>
        </motion.div>

        {/* Liste des résultats */}
        {loading ? (
          <div className="text-center py-12">
            <div className="loading-spinner w-12 h-12 border-4 border-infa-vert mx-auto" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {resultats.map((resultat, index) => (
              <motion.div
                key={resultat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover bg-white p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="badge badge-primary text-xs">{resultat.filiere}</span>
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

                {resultat.fichier_pdf?.data?.attributes?.url ? (
                  <a
                    href={`${process.env.NEXT_PUBLIC_API_URL}${resultat.fichier_pdf.data.attributes.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full block text-center text-sm"
                  >
                    📥 Télécharger le PDF
                  </a>
                ) : (
                  <Link
                    href="/resultats-examens"
                    className="btn-outline w-full block text-center text-sm"
                  >
                    Voir les détails →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Bouton Voir tout */}
        <div className="text-center">
          <Link href="/resultats-examens" className="btn-primary">
            Voir tous les résultats →
          </Link>
        </div>
      </div>
    </section>
  );
}