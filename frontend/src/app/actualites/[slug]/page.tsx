'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';


interface Actualite {
  id: number;
  attributes: {
    titre: string;
    slug: string;
    contenu?: string;
    resume: string;
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

export default function ActualiteDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [actualite, setActualite] = useState<Actualite | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActualite = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/actualites?filters[slug]=${slug}&populate=*`
        );
        setActualite(response.data.data[0] || null);
      } catch (error) {
        console.error('Erreur lors du chargement de l\'actualité:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActualite();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner w-16 h-16 border-4" />
      </div>
    );
  }

  if (!actualite) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Actualité non trouvée</h1>
          <Link href="/actualites" className="btn-primary">
            Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-infa-fond">
      <article className="max-w-4xl mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/actualites" className="text-infa-vert hover:underline mb-6 inline-block">
            ← Retour aux actualités
          </Link>

          <span className="badge badge-primary mb-4">
            {actualite.attributes.categorie}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
            {actualite.attributes.titre}
          </h1>

          <p className="text-gray-500 mb-8">
            Publié le {formatDate(actualite.attributes.publishedAt)}
          </p>

          {actualite.attributes.image?.data?.attributes?.url && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-card">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${actualite.attributes.image.data.attributes.url}`}
                alt={actualite.attributes.image.data.attributes.alternativeText || actualite.attributes.titre}
                className="w-full h-auto"
              />
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none bg-white rounded-2xl shadow-card p-8"
            dangerouslySetInnerHTML={{ __html: actualite.attributes.contenu || actualite.attributes.resume }}
          />

          <div className="mt-12 pt-8 border-t">
            <Link href="/actualites" className="btn-outline">
              ← Toutes les actualités
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
}