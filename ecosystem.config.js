module.exports = {
  apps: [
    {
      name: 'sites',
      script: './bin/www',
      autorestart: true,
      max_restarts: 5,
      log_date_format: 'DD-MM-YYYY HH:mm:ss Z',
      env_development: {
        NODE_ENV: 'development',
        watch: true
      },
      env_production: {
        NODE_ENV: 'production',
        watch: false,
        instances: 2
      }
    }
  ]
}
