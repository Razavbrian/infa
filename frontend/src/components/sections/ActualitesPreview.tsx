'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Actualite {
  id: number;
  attributes: {
    titre: string;
    slug: string;
    resume: string;
    categorie: string;
    publishedAt: string;
    image?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
}

export default function ActualitesPreview() {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActualites = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/actualites?populate=*&pagination[limit]=3&sort=publishedAt:desc`
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
            Actualités & Événements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Restez informé des dernières nouvelles de l&apos;INFA
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl h-80 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {actualites.map((actualite, index) => (
              <motion.article
                key={actualite.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

        <div className="text-center">
          <Link href="/actualites" className="btn-outline">
            Voir toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
}