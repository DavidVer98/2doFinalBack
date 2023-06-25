import { Router } from "express";
import {
    createDetalle,
    getDetalle,
    getOneDetalle,
    deleteDetalle,
    updateDetalle
} from "../controllers/detalle.controller.js";

const router = Router();
router.get("/", getDetalle);
router.get("/:id", getOneDetalle);
router.post("/", createDetalle);
router.put("/:id", updateDetalle);
router.delete("/:id", deleteDetalle);


export default router;