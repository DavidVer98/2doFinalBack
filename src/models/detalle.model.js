import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Consulta } from "./consulta.model.js";


export const Detalle = sequelize.define('Detalle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    motivo: {
       type: DataTypes.TEXT,
    },
    diagnostico: {
        type: DataTypes.TEXT,
    },
    tratamiento: {
        type: DataTypes.TEXT,
    },
    id_consulta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Consulta,
            key: 'id',
        },
    },
});