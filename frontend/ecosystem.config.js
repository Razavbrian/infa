module.exports = {
    apps: [{
      name: 'infa-frontend',
      script: './.next/standalone/server.js',
      cwd: '.',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOST: '0.0.0.0'
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      max_memory_restart: '1000M',
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.next/cache'],
    }]
  };