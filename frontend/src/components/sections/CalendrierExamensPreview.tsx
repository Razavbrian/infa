// frontend/src/components/sections/CalendrierExamensPreview.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

interface Examen {
  id: number;
  matiere: string;
  date_heure: string;
  salle: string;
  type_epreuve: string;
}

interface Calendrier {
  id: number;
  titre: string;
  periode_debut: string;
  periode_fin: string;
  statut: 'a_venir' | 'en_cours' | 'termine';
  examens: Examen[];
}

export default function CalendrierExamensPreview() {
  const [calendriers, setCalendriers] = useState<Calendrier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalendriers = async () => {
      try {
        // ✅ Appel API PUBLIC (pas de token requis)
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/calendrier-examens?populate=examens&filters[publie][$eq]=true&sort=ordre_affichage:asc&pagination[limit]=3`
        );
        setCalendriers(response.data.data);
      } catch (error) {
        console.error('Erreur chargement calendrier:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCalendriers();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'a_venir': return 'bg-blue-500';
      case 'en_cours': return 'bg-green-500';
      case 'termine': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatutLabel = (statut: string) => {
    switch (statut) {
      case 'a_venir': return 'À venir';
      case 'en_cours': return 'En cours';
      case 'termine': return 'Terminé';
      default: return statut;
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-infa-fond">
      <div className="container-custom">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge badge-primary text-sm mb-4 inline-block">
            📅 Examens
          </span>
          <h2 className="text-4xl font-bold font-montserrat text-infa-vert mb-4">
            Calendrier des Examens
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Consultez les dates et horaires de toutes les sessions d&apos;examens
          </p>
        </motion.div>

        {/* Liste des calendriers */}
        {loading ? (
          <div className="text-center py-12">
            <div className="loading-spinner w-12 h-12 border-4 border-infa-vert mx-auto" />
          </div>
        ) : (
          <div className="space-y-8 mb-12">
            {calendriers.map((calendrier, index) => (
              <motion.div
                key={calendrier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover bg-white overflow-hidden"
              >
                {/* En-tête de session */}
                <div className={`${getStatutColor(calendrier.statut)} text-white p-6`}>
                  <h3 className="text-2xl font-bold mb-2">{calendrier.titre}</h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span>
                      📆 {formatDate(calendrier.periode_debut)} - {formatDate(calendrier.periode_fin)}
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {getStatutLabel(calendrier.statut)}
                    </span>
                  </div>
                </div>

                {/* Liste des examens */}
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Matière</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Date & Heure</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Salle</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {calendrier.examens.slice(0, 5).map((examen) => (
                          <tr key={examen.id} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-800">{examen.matiere}</td>
                            <td className="py-3 px-4 text-gray-600">
                              {formatDate(examen.date_heure)}
                            </td>
                            <td className="py-3 px-4 text-gray-600">{examen.salle}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                                {examen.type_epreuve}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bouton Voir tout */}
        <div className="text-center">
          <Link href="/calendrier-examens" className="btn-primary">
            Voir tout le calendrier →
          </Link>
        </div>
      </div>
    </section>
  );
}