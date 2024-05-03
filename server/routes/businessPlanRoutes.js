import express from 'express';
import { generateBusinessPlan } from '../controllers/businessPlanController.js';

const router = express.Router();

// Route to generate a business plan
router.post('/generate-business-plan', generateBusinessPlan);

export default router;
