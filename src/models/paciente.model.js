import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Paciente = sequelize.define('Paciente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.TEXT,
    },
    apellido: {
        type: DataTypes.TEXT,
    },
    cedula: {
        type: DataTypes.TEXT,
        unique: true,
    },
    email: {
        type: DataTypes.TEXT,
    },
    telefono: {
        type: DataTypes.TEXT,
    },
    nacimiento: {
        type: DataTypes.TEXT,
    },
});