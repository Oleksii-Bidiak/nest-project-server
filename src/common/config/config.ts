export default () => ({
  port: process.env.PORT,
  postgres_port: process.env.POSTGRES_PORT,
  postgres_db: process.env.POSTGRES_DB,
  postgres_user: process.env.POSTGRES_USER,
  postgres_password: process.env.POSTGRES_PASSWORD,
  postgres_host: process.env.POSTGRES_HOST,
});
