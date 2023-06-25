import express from 'express';
import pacienteRoutes from './paciente.routes.js';
import medicoRoutes from './medico.routes.js';

const router = express.Router();

router.use('/paciente', pacienteRoutes);
router.use('/medico', medicoRoutes);

export default router;