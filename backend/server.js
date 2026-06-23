'use strict';

/**
 * Strapi 5 Programmatic Startup
 * This file is used by PM2 to start the application from the compiled dist/ folder.
 */

const strapi = require('@strapi/strapi');

console.log('🚀 Starting Strapi in production mode...');

try {
  strapi.createStrapi({ distDir: './dist' }).start()
    .then(() => {
      console.log('✅ Strapi started successfully.');
    })
    .catch((error) => {
      console.error('❌ Strapi failed to start:', error);
      process.exit(1);
    });
} catch (error) {
  console.error('❌ Unexpected error during Strapi initialization:', error);
  process.exit(1);
}
