// frontend/src/app/calendrier-examens/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

// ✅ Types pour Strapi v5 (données plates, pas de .attributes)
interface Examen {
  id: number;
  matiere: string;
  date_heure: string;
  salle: string;
  type_epreuve: string;
  duree_minutes: number;
}

interface Calendrier {
  id: number;
  titre: string;
  description?: string;
  periode_debut: string;
  periode_fin: string;
  statut: 'a_venir' | 'en_cours' | 'termine';
  examens: Examen[];
}

interface Candidat {
  id: number;
  nom: string;
  prenom: string;
  numero_inscription: string;
  formation: string;
  centre_examen: string;
}

// ✅ Interface générique pour les réponses Strapi v5 (sans 'any')
interface StrapiResponse<T = unknown> {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export default function CalendrierExamensPage() {
  const [calendriers, setCalendriers] = useState<Calendrier[]>([]);
  const [candidats, setCandidats] = useState<Candidat[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'calendrier' | 'candidats'>('calendrier');
  const [searchTerm, setSearchTerm] = useState('');
  const [filtreFormation, setFiltreFormation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch calendrier
        const calendrierResponse = await axios.get<StrapiResponse<Calendrier>>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/calendrier-examens?populate=examens&filters[publie][$eq]=true&sort=ordre_affichage:asc`
        );
        setCalendriers(calendrierResponse.data.data || []);

        // Fetch candidats
        const candidatsResponse = await axios.get<StrapiResponse<Candidat>>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/candidats-admis?populate=*&filters[publie][$eq]=true&sort=nom:asc`
        );
        setCandidats(candidatsResponse.data.data || []);
      } catch (error) {
        console.error('Erreur chargement données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
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

  // ✅ Filtrage des candidats
  const candidatsFiltres = candidats.filter((candidat) => {
    const matchSearch = searchTerm === '' || 
      `${candidat.nom} ${candidat.prenom}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidat.numero_inscription.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchFormation = filtreFormation === '' || candidat.formation === filtreFormation;
    
    return matchSearch && matchFormation;
  });

  return (
    <div className="min-h-screen bg-infa-fond">
      {/* Header */}
      <section className="bg-gradient-to-r from-infa-vert to-infa-vertDark text-white py-16">
        <div className="container-custom">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            📅 Calendrier des Examens
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl"
          >
            Consultez les dates d&apos;examens et la liste des candidats admis à concourir
          </motion.p>
        </div>
      </section>

      {/* Onglets de navigation */}
      <section className="section-padding-sm bg-white border-b sticky top-20 z-10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveTab('calendrier')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'calendrier'
                  ? 'bg-infa-vert text-white shadow-lg shadow-infa-vert/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📅 Calendrier des Examens
            </button>
            <button
              onClick={() => setActiveTab('candidats')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'candidats'
                  ? 'bg-infa-vert text-white shadow-lg shadow-infa-vert/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              👥 Candidats Admis ({candidats.length})
            </button>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-20">
              <div className="loading-spinner w-16 h-16 border-4 border-infa-vert mx-auto mb-4" />
              <p className="text-gray-600">Chargement des données...</p>
            </div>
          ) : (
            <>
              {/* ✅ Onglet Calendrier */}
              {activeTab === 'calendrier' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Alertes importantes */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
                    <h3 className="font-bold text-yellow-800 mb-2">⚠️ Informations Importantes</h3>
                    <ul className="text-yellow-700 space-y-1 text-sm">
                      <li>• Présentez-vous 30 minutes avant le début de chaque épreuve</li>
                      <li>• N&apos;oubliez pas votre carte d&apos;étudiant et une pièce d&apos;identité</li>
                      <li>• Les calculatrices sont autorisées sauf mention contraire</li>
                      <li>• En cas d&apos;absence, contactez immédiatement le secrétariat</li>
                    </ul>
                  </div>

                  {/* Sessions d'examens */}
                  {calendriers.length === 0 ? (
                    <div className="bg-white rounded-xl p-8 text-center">
                      <p className="text-gray-600">Aucun calendrier d&apos;examens disponible pour le moment.</p>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {calendriers.map((session, index) => (
                        <motion.div
                          key={session.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="card-hover bg-white overflow-hidden"
                        >
                          {/* En-tête */}
                          <div className={`${getStatutColor(session.statut)} text-white p-6`}>
                            <h2 className="text-2xl font-bold mb-2">{session.titre}</h2>
                            {session.description && (
                              <p className="text-white/90 mb-4">{session.description}</p>
                            )}
                            <div className="flex items-center gap-4 flex-wrap">
                              <span>
                                📆 {formatDate(session.periode_debut)} - {formatDate(session.periode_fin)}
                              </span>
                              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                                {getStatutLabel(session.statut)}
                              </span>
                            </div>
                          </div>

                          {/* Tableau des examens */}
                          <div className="p-6">
                            <div className="overflow-x-auto">
                              <table className="w-full">
                                <thead>
                                  <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Matière</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Date & Heure</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Salle</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Durée</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {session.examens.map((examen) => (
                                    <tr key={examen.id} className="border-b border-gray-100 hover:bg-gray-50">
                                      <td className="py-3 px-4 font-medium text-gray-800">{examen.matiere}</td>
                                      <td className="py-3 px-4 text-gray-600">{formatDate(examen.date_heure)}</td>
                                      <td className="py-3 px-4 text-gray-600">{examen.salle}</td>
                                      <td className="py-3 px-4">
                                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                                          {examen.type_epreuve}
                                        </span>
                                      </td>
                                      <td className="py-3 px-4 text-gray-600">{examen.duree_minutes} min</td>
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

                  {/* Téléchargements */}
                  <div className="mt-12 bg-white rounded-2xl p-8 shadow-card">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">📥 Documents à Télécharger</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { nom: 'Calendrier complet 2026', format: 'PDF', taille: '245 KB' },
                        { nom: 'Règlement des examens', format: 'PDF', taille: '180 KB' },
                        { nom: 'Guide du candidat', format: 'PDF', taille: '320 KB' },
                      ].map((doc) => (
                        <a
                          key={doc.nom}
                          href="#"
                          className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-3xl">📄</span>
                          <div>
                            <p className="font-medium text-gray-800">{doc.nom}</p>
                            <p className="text-sm text-gray-500">{doc.format} • {doc.taille}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ✅ Onglet Candidats Admis */}
              {activeTab === 'candidats' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* En-tête candidats */}
                  <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                          👥 Liste des Candidats Admis à Concourir
                        </h2>
                        <p className="text-gray-600">
                          Consultez la liste officielle des candidats autorisés à participer aux examens
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-infa-vert">{candidatsFiltres.length}</div>
                        <div className="text-sm text-gray-500">Candidats affichés</div>
                      </div>
                    </div>

                    {/* Barre de recherche et filtres */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="text"
                        placeholder="🔍 Rechercher par nom, numéro d'inscription..."
                        className="input-field flex-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <select 
                        className="select-field"
                        value={filtreFormation}
                        onChange={(e) => setFiltreFormation(e.target.value)}
                      >
                        <option value="">Toutes les formations</option>
                        <option value="Attaché d'administration">Attaché d&apos;administration</option>
                        <option value="Adjoint d'administration">Adjoint d&apos;administration</option>
                        <option value="Assistant d'administration">Assistant d&apos;administration</option>
                        <option value="Contrôleur">Contrôleur</option>
                      </select>
                    </div>
                  </div>

                  {/* Tableau des candidats */}
                  {candidatsFiltres.length === 0 ? (
                    <div className="bg-white rounded-xl p-12 text-center shadow-card">
                      <div className="text-6xl mb-4">📋</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {candidats.length === 0 ? 'Liste des candidats à venir' : 'Aucun candidat trouvé'}
                      </h3>
                      <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        {candidats.length === 0 
                          ? 'La liste des candidats admis à concourir sera publiée prochainement. Veuillez consulter régulièrement cette page pour les mises à jour.'
                          : 'Aucun candidat ne correspond à vos critères de recherche. Veuillez ajuster vos filtres.'
                        }
                      </p>
                      {candidats.length === 0 && (
                        <Link href="/contact" className="btn-primary">
                          Nous contacter pour plus d&apos;infos
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gradient-to-r from-infa-vert to-infa-vertDark text-white">
                            <tr>
                              <th className="text-left py-4 px-6 font-semibold">N°</th>
                              <th className="text-left py-4 px-6 font-semibold">Nom et Prénom</th>
                              <th className="text-left py-4 px-6 font-semibold">N° Inscription</th>
                              <th className="text-left py-4 px-6 font-semibold">Formation</th>
                              <th className="text-left py-4 px-6 font-semibold">Centre d&apos;Examen</th>
                              <th className="text-left py-4 px-6 font-semibold">Statut</th>
                            </tr>
                          </thead>
                          <tbody>
                            {candidatsFiltres.map((candidat, index) => (
                              <motion.tr
                                key={candidat.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                              >
                                <td className="py-4 px-6 text-gray-600">{index + 1}</td>
                                <td className="py-4 px-6 font-medium text-gray-800">
                                  {candidat.nom} {candidat.prenom}
                                </td>
                                <td className="py-4 px-6">
                                  <span className="px-3 py-1 bg-gray-100 rounded text-sm font-mono">
                                    {candidat.numero_inscription}
                                  </span>
                                </td>
                                <td className="py-4 px-6 text-gray-600">{candidat.formation}</td>
                                <td className="py-4 px-6 text-gray-600">{candidat.centre_examen}</td>
                                <td className="py-4 px-6">
                                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                    ✓ Admis
                                  </span>
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination (si beaucoup de candidats) */}
                      {candidatsFiltres.length > 20 && (
                        <div className="p-6 border-t border-gray-200">
                          <div className="flex justify-center gap-2">
                            {[1, 2, 3].map((page) => (
                              <button
                                key={page}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                  page === 1
                                    ? 'bg-infa-vert text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                              >
                                {page}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Informations complémentaires */}
                  <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
                    <h3 className="font-bold text-blue-800 mb-2">ℹ️ Informations Complémentaires</h3>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Les candidats doivent vérifier leur centre d&apos;affectation avant le jour J</li>
                      <li>• En cas d&apos;erreur sur la liste, contacter le secrétariat sous 48h</li>
                      <li>• La convocation individuelle sera envoyée par email</li>
                      <li>• Consulter régulièrement cette page pour les mises à jour</li>
                    </ul>
                  </div>

                  {/* Boutons d'action */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="#"
                      className="btn-primary flex items-center justify-center gap-2"
                    >
                      📥 Télécharger la liste complète (PDF)
                    </a>
                    <Link
                      href="/contact?sujet=liste-candidats"
                      className="btn-outline flex items-center justify-center gap-2"
                    >
                      📧 Signaler une erreur
                    </Link>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}