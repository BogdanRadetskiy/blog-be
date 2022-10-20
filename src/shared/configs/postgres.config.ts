// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
import { User } from '../models/user.model';
dotenv.config();
import { cleanEnv, num, str } from 'envalid';

const env = cleanEnv(process.env, {
  POSTGRES_HOST: str(),
  POSTGRES_PORT: num({ default: 5432 }),
  POSTGRES_USERNAME: str(),
  POSTGRES_PASSWORD: str(),
  POSTGRES_DATABASE: str(),
});

export const postgresConfig = {
  dialect: 'postgres' as const,

  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  username: env.POSTGRES_USERNAME,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DATABASE,
};

export const models = [User];
