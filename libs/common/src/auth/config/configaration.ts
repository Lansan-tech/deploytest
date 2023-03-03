export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 8080,
  JWT_SECRET: process.env.JWT_SECRET || 'hslkdjhfkljhsdkfjghlskdjhf',
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'mysql://root:sirLantei@{95}@localhost:3306/rentals-db',
});
