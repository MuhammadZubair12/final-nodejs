const development = {
  database: 'daok5s3mq2qivs',
  username: 'otgrnegltiqonb',
  password: '0eb759d3c69f5b9da3f7c4a825cc97c7b2889e790bb8329aa8ca9ad54d4deed6',
  host: 'ec2-44-199-83-229.compute-1.amazonaws.com',
  dialect: 'postgres',
};

const testing = {
  database: 'daok5s3mq2qivs',
  username: 'otgrnegltiqonb',
  password: '0eb759d3c69f5b9da3f7c4a825cc97c7b2889e790bb8329aa8ca9ad54d4deed6',
  host: 'ec2-44-199-83-229.compute-1.amazonaws.com',
  dialect: 'postgres',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect:'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
