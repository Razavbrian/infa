// backend/src/index.ts

import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    // Code à exécuter avant l'initialisation
    // Ex: enregistrer des hooks, des services personnalisés
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Code à exécuter au démarrage
    // Ex: vérifier des données, lancer des tâches planifiées
    console.log('✅ Strapi is starting...');
  },
};