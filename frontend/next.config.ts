// frontend/next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.infa.mg',  // ✅ Domaine de production
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
  
  // ✅ REWRITES CORRIGÉS : Exclure les routes NextAuth et utiliser un préfixe pour Strapi
  async rewrites() {
    return [
      {
        // ✅ Strapi API : utiliser /api/strapi/* au lieu de /api/*
        source: '/api/strapi/:path*',
        destination: 'http://localhost:1337/api/:path*',
      },
      // ✅ Les routes /api/auth-next/* (NextAuth) NE SONT PAS réécrites → restent sur Next.js
    ];
  },
  
  // Headers de sécurité
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
  output: 'standalone',
};

module.exports = nextConfig;