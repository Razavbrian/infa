// frontend/src/types/next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';
import { JWT as DefaultJWT } from 'next-auth/jwt';

// ============================================
// EXTENSION DU TYPE USER
// ============================================
declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string;
    role?: string;
    token?: string;
    nom?: string;
    prenom?: string;
  }

  interface Session {
    user: {
      id: string;
      role?: string;
      accessToken?: string;
      nom?: string;
      prenom?: string;
    } & DefaultSession['user'];
  }
}

// ============================================
// EXTENSION DU TYPE JWT
// ============================================
declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
    accessToken?: string;
    id?: string;
  }
}