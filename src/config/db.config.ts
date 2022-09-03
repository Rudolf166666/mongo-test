import { config } from 'dotenv';
config({ path: '.env' });
export const DB = {
  uri: process.env.DB_URI,
};
