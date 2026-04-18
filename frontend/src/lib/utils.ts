/**
 * Formate une date en français
 */
export const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  /**
   * Formate un nombre en devise (Ariary)
   */
  export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('fr-MG', {
      style: 'currency',
      currency: 'MGA',
      minimumFractionDigits: 0,
    }).format(amount);
  };
  
  /**
   * Tronque un texte avec des points de suspension
   */
  export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  
  /**
   * Génère un slug à partir d'un titre
   */
  export const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };
  
  /**
   * Valide un email
   */
  export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Valide un téléphone malgache
   */
  export const isValidPhoneMG = (phone: string): boolean => {
    const phoneRegex = /^(\+261|0)[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };
  
  /**
   * Délai pour les appels API (debounce)
   */
  export const debounce = <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };
  
  /**
   * Récupère l'URL complète d'une image Strapi
   */
  export const getStrapiMedia = (url?: string | null): string => {
    if (!url) return '/images/placeholder.jpg';
    if (url.startsWith('http')) return url;
    return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
  };