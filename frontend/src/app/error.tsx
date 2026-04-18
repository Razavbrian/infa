'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Erreur:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-infa-fond px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-infa-vert mb-4">500</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Oups! Une erreur est survenue
        </h2>
        <p className="text-gray-600 mb-8">
          Nous sommes désolés, quelque chose s&apos;est mal passé. Veuillez réessayer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary"
          >
            Réessayer
          </button>
          <Link href="/" className="btn-outline">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}