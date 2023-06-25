import { Router } from "express";
import {
    createMedico,
    getMedico,
    getOneMedico,
    deleteMedico,
    updateMedico,
    getMedicoByCedula
} from "../controllers/medico.controller.js";

const router = Router();
router.get("/", getMedico);
router.get("/:id", getOneMedico);
router.post("/", createMedico);
router.put("/:id", updateMedico);
router.delete("/:id", deleteMedico);
router.get("/cedula/:cedula", getMedicoByCedula);


export default router;