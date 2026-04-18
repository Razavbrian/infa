// ============================================
// TYPES STRAPI / API
// ============================================

/**
 * Réponse standard de l'API Strapi
 */
export interface StrapiResponse<T> {
    data: T | T[];
    meta?: {
      pagination?: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  
  /**
   * Attributs communs à tous les contenus Strapi
   */
  export interface StrapiAttributes {
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  }
  
  /**
   * Format d'une image Strapi
   */
  export interface StrapiImage {
    data?: {
      id: number;
      attributes: {
        name: string;
        alternativeText?: string;
        caption?: string;
        width: number;
        height: number;
        formats?: {
          thumbnail?: ImageFormat;
          small?: ImageFormat;
          medium?: ImageFormat;
          large?: ImageFormat;
        };
        url: string;
      };
    };
  }
  
  export interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    url: string;
  }
  
  // ============================================
  // FORMATIONS
  // ============================================
  
  export interface FormationAttributes extends StrapiAttributes {
    titre: string;
    slug: string;
    description: string;
    filiere: 'Administration' | 'Finance' | 'Ressources Humaines' | 'Technologie' | 'Juridique';
    type: 'Diplomante' | 'Certifiante' | 'Continue';
    duree: string;
    niveau: string;
    programme?: string;
    conditions_admission?: string;
    frais_inscription?: number;
    statut: boolean;
    image?: StrapiImage;
  }
  
  export interface Formation {
    id: number;
    attributes: FormationAttributes;
  }
  
  // ============================================
  // ACTUALITÉS
  // ============================================
  
  export interface ActualiteAttributes extends StrapiAttributes {
    titre: string;
    slug: string;
    resume: string;
    contenu?: string;
    categorie: 'Conférence' | 'Séminaire' | 'Annonce' | 'Événement';
    image?: StrapiImage;
  }
  
  export interface Actualite {
    id: number;
    attributes: ActualiteAttributes;
  }
  
  // ============================================
  // MEMBRES / ÉQUIPE
  // ============================================
  
  export interface MembreAttributes extends StrapiAttributes {
    nom: string;
    prenom: string;
    poste: string;
    biographie?: string;
    email?: string;
    telephone?: string;
    ordre_affichage: number;
    statut: boolean;
    photo?: StrapiImage;
  }
  
  export interface Membre {
    id: number;
    attributes: MembreAttributes;
  }
  
  // ============================================
  // CONTACT & AUTH
  // ============================================
  
  export interface ContactFormData {
    nom: string;
    email: string;
    telephone?: string;
    sujet: string;
    message: string;
  }
  
  export interface RegisterFormData {
    username: string;
    email: string;
    password: string;
    nom?: string;
    prenom?: string;
    telephone?: string;
  }
  
  export interface LoginFormData {
    identifier: string;
    password: string;
  }
  
  export interface AuthResponse {
    jwt: string;
    user: {
      id: number;
      username: string;
      email: string;
      nom?: string;
      prenom?: string;
      role?: string;
    };
  }