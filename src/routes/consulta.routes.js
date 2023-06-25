import { Router } from "express";
import {
    createConsulta,
    getConsulta,
    getOneConsulta,
    deleteConsulta,
    updateConsulta
} from "../controllers/consulta.controller.js";

const router = Router();
router.get("/", getConsulta);
router.get("/:id", getOneConsulta);
router.post("/", createConsulta);
router.put("/:id", updateConsulta);
router.delete("/:id", deleteConsulta);


export default router;