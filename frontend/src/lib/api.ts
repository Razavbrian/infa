// frontend/src/lib/api.ts

import axios from 'axios';

// ✅ Utiliser le préfixe /api/strapi/ pour les appels vers Strapi
const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const api = axios.create({
  baseURL: `${STRAPI_BASE_URL}/api/strapi`,  // ← Préfixe ajouté ici
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token d'authentification
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Types pour les paramètres API
export type ApiParams = Record<string, unknown>;
export type ApiData = Record<string, unknown>;

// ============================================
// FORMATIONS
// ============================================

export const fetchFormations = async (filters?: ApiParams) => {
  const params = new URLSearchParams({
    populate: '*',
    ...filters,
  });
  // ✅ Plus besoin de spécifier /api/formations car baseURL inclut déjà /api/strapi
  const response = await api.get(`/formations?${params}`);
  return response.data;
};

export const fetchFormationBySlug = async (slug: string) => {
  const response = await api.get(`/formations?filters[slug]=${slug}&populate=*`);
  return response.data.data[0];
};

// ============================================
// ACTUALITÉS
// ============================================

export const fetchActualites = async (limit = 10) => {
  const response = await api.get(`/actualites?populate=*&pagination[limit]=${limit}`);
  return response.data;
};

export const fetchActualiteBySlug = async (slug: string) => {
  const response = await api.get(`/actualites?filters[slug]=${slug}&populate=*`);
  return response.data.data[0];
};

// ============================================
// MEMBRES
// ============================================

export const fetchMembres = async () => {
  const response = await api.get(`/membres?populate=*&sort=ordre_affichage:asc`);
  return response.data;
};

// ============================================
// CONTACT
// ============================================

export const submitContactForm = async (data: ApiData) => {
  const response = await api.post('/messagecontacts', { data });
  return response.data;
};

// ============================================
// AUTHENTIFICATION STRAPI (pas NextAuth)
// ============================================

// ✅ Ces appels vont DIRECTEMENT à Strapi (pas via le proxy Next.js)
// Car l'authentification Strapi utilise /api/auth/local (pas /api/strapi/auth/local)

export const registerUser = async (data: { username: string; email: string; password: string }) => {
  const response = await axios.post(
    `${STRAPI_BASE_URL}/api/auth/local/register`,  // ← URL directe, pas de proxy
    data
  );
  return response.data;
};

export const loginUser = async (data: { identifier: string; password: string }) => {
  const response = await axios.post(
    `${STRAPI_BASE_URL}/api/auth/local`,  // ← URL directe, pas de proxy
    data
  );
  return response.data;
};

// ============================================
// UTILITAIRES
// ============================================

export const getPaginationParams = (page: number, pageSize: number) => ({
  'pagination[page]': page,
  'pagination[pageSize]': pageSize,
});

export const getSortParams = (field: string, order: 'asc' | 'desc' = 'asc') => ({
  'sort': `${field}:${order}`,
});

export const getStrapiMediaUrl = (url?: string | null): string => {
  if (!url) return '/images/placeholder.jpg';
  if (url.startsWith('http')) return url;
  return `${STRAPI_BASE_URL}${url}`;
};