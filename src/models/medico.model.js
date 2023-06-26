import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Medico = sequelize.define('Medico', {
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
    especialidad: {
        type: DataTypes.TEXT,
    },
    usuario: {
        type: DataTypes.TEXT,
        unique: true,
    },
    contrasena: {
        type: DataTypes.TEXT,
    },
});

