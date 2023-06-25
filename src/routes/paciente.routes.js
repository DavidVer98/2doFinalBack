import { Router } from "express";
import {
    createPaciente,
    getPaciente,
    getOnePaciente,
    deletePaciente,
    updatePaciente,
    getPacienteByCedula
} from "../controllers/paciente.controller.js";

const router = Router();
router.get("/", getPaciente);
router.get("/:id", getOnePaciente);
router.post("/", createPaciente);
router.put("/:id", updatePaciente);
router.delete("/:id", deletePaciente);
router.get("/cedula/:cedula", getPacienteByCedula);


export default router;