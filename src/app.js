import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './models/index.js';
import authRoutes from './modules/Auth';
import fileRoutes from './modules/Media';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/files', fileRoutes);

const server = app.listen(PORT, async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connected!');
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit process if the database connection fails
  }
});

// Handle server cleanup on exit
const shutdown = () => {
  console.log('\nShutting down server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown); // For Ctrl+C
process.on('SIGTERM', shutdown); // For termination signals (e.g., from Docker)
