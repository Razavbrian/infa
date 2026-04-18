'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

interface Actualite {
  id: number;
  attributes: {
    titre: string;
    slug: string;
    resume: string;
    contenu?: string;
    categorie: string;
    publishedAt: string;
    image?: {
      data?: {
        attributes?: {
          url: string;
          alternativeText?: string;
        };
      };
    };
  };
}

export default function ActualitesPage() {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtre, setFiltre] = useState('toutes');

  useEffect(() => {
    const fetchActualites = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/actualites?populate=*&sort=publishedAt:desc&pagination[pageSize]=50`
        );
        setActualites(response.data.data);
      } catch (error) {
        console.error('Erreur lors du chargement des actualités:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActualites();
  }, []);

  const categories = ['toutes', 'Conférence', 'Séminaire', 'Annonce', 'Événement'];

  const actualitesFiltrees = filtre === 'toutes' 
    ? actualites 
    : actualites.filter(a => a.attributes.categorie === filtre);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-infa-fond">
      {/* Hero */}
      <section className="bg-gradient-to-r from-infa-vert to-infa-vertDark text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4"
          >
            Actualités & Événements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Restez informé des dernières nouvelles de l&apos;INFA
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <section className="section-padding-sm bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((categorie) => (
              <button
                key={categorie}
                onClick={() => setFiltre(categorie)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filtre === categorie
                    ? 'bg-infa-vert text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categorie === 'toutes' ? 'Toutes' : categorie}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste */}
      <section className="section-padding">
        <div className="container-custom">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-80 animate-pulse" />
              ))}
            </div>
          ) : actualitesFiltrees.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">Aucune actualité trouvée.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {actualitesFiltrees.map((actualite, index) => (
                <motion.article
                  key={actualite.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-hover"
                >
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    {actualite.attributes.image?.data?.attributes?.url ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${actualite.attributes.image.data.attributes.url}`}
                        alt={actualite.attributes.titre}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-infa-vert text-white">
                        <span className="text-4xl">📰</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-primary bg-white/90">
                        {actualite.attributes.categorie}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(actualite.attributes.publishedAt)}
                    </p>
                    <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-3 line-clamp-2">
                      {actualite.attributes.titre}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {actualite.attributes.resume}
                    </p>
                    <Link
                      href={`/actualites/${actualite.attributes.slug}`}
                      className="text-infa-vert font-semibold hover:underline"
                    >
                      Lire la suite →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}