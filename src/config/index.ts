import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  database_Url: process.env.DATABASE_URL || 'mongodb://localhost:27017/test',
};
