import express from 'express';
import pacienteRoutes from './paciente.routes.js';
import medicoRoutes from './medico.routes.js';
import consultaRoutes from './consulta.routes.js';
import detalleRoutes from './detalle.routes.js';
import historialConsulta from './historialConsulta.routes.js';

const router = express.Router();

router.use('/paciente', pacienteRoutes);
router.use('/medico', medicoRoutes);
router.use('/consulta', consultaRoutes);
router.use('/detalle', detalleRoutes);
router.use('/historialConsulta', historialConsulta);

export default router;