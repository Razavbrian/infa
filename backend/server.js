'use strict';

const strapi = require('@strapi/strapi');

async function start() {
  try {
    const app = await strapi({
      distDir: './dist',
    }).load();
    
    console.log('✅ Strapi loaded successfully from dist/');
    return app;
  } catch (error) {
    console.error('❌ Failed to load Strapi:', error);
    process.exit(1);
  }
}