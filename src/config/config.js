import dotenv from 'dotenv';
dotenv.config();

export const UPLOAD_FOLDER = 'uploads';
export const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'video/mp4'];
export const MAX_FILE_SIZE = 10 * 1024 * 1024;
const DBConnection = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  dbURL: 'postgresql://herogramtest_owner:sQAhju1dU2LG@ep-frosty-mountain-a2xufzdd.eu-central-1.aws.neon.tech/herogramtest?sslmode=require',
};

export default DBConnection;
