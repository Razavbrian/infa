/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ ACTIVATION DE L'EXPORT STATIQUE
  // Cela génère des fichiers HTML/CSS/JS statiques dans le dossier 'out'
  // Idéal pour économiser de la RAM sur cPanel (0 Mo de RAM utilisé pour le frontend)
  output: 'export',

  images: {
    // ✅ Désactivation de l'optimisation d'image Next.js car elle nécessite un serveur Node.js actif
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.infa.mg',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'infa.mg',
        pathname: '/uploads/**',
      },
    ],
    domains: ['api.infa.mg', 'infa.mg'],
  },
  
  // Headers de sécurité (Note: certains seront gérés par le .htaccess sur cPanel en mode statique)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
  
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  reactStrictMode: true,
  compress: true,
};

module.exports = nextConfig;
