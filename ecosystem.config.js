module.exports = {
  apps: [
    {
      name: 'strapi',
      script: 'npm',
      args: 'run start',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '1337',
        PUBLIC_URL: 'https://strapi.angelovski.top',
        DATABASE_CLIENT: 'postgres',
        DATABASE_HOST: '127.0.0.1',
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'strapi',
        DATABASE_USERNAME: 'strapi',
        // DATABASE_PASSWORD must be set in .env on VPS (never committed)
      },
    },
  ],
};
