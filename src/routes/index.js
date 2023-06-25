import express from 'express';
import pacienteRoutes from './paciente.routes.js';


const router = express.Router();

router.use('/paciente', pacienteRoutes);

export default router;