import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // Import dotenv for environment variables
import businessPlanRoutes from './routes/businessPlanRoutes.js';
import logger from './logger.js';

const app = express(); // Instantiate the express app first

// Use the cors middleware with default options (allow all origins)
app.use(cors());

dotenv.config();
app.use(express.json()); // Body parsing middleware

// Routes
app.use('/api', businessPlanRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`);
});
