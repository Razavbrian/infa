// frontend/src/lib/auth.ts

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  // ✅ IMPORTANT : Changer le basePath pour éviter conflit avec Strapi  
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Appel à l'API Strapi pour authentification
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              identifier: credentials.email,
              password: credentials.password,
            }),
          });

          const user = await res.json();

          if (res.ok && user?.jwt && user?.user) {
            return {
              id: user.user.id.toString(),
              email: user.user.email,
              name: user.user.nom || user.user.username || user.user.email,
              role: user.user.role,
              token: user.jwt,
            };
          }
          return null;
        } catch (error) {
          console.error('Erreur d\'authentification:', error);
          return null;
        }
      },
    }),
  ],
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.accessToken = user.token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  
  pages: {
    signIn: '/login',
  },
  
  secret: process.env.NEXTAUTH_SECRET,
  
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  
  // Debug en développement
  debug: process.env.NODE_ENV === 'development',
};