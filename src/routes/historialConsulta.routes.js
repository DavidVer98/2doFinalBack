import { Router } from 'express';
import { listaHistorial  } from '../controllers/historialConsulta.controller.js';

const router = Router();
router.get("/", listaHistorial);

export default router;