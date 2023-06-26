import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Medico } from "./medico.model.js";
import { Paciente } from "./paciente.model.js";

export const Consulta = sequelize.define('Consulta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_medico: {
       type: DataTypes.INTEGER,
       allowNull: false,
       references: {
            model: Medico,
            key: 'id',
       }
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Paciente ,
            key: 'id',
        }
    },
    fecha: {
        type: DataTypes.TEXT,
        onDelete: 'cascade',
        onUpdate: 'cascade',
    },
});

Consulta.belongsTo(Medico, { foreignKey: 'id_medico', as: 'Medico' });
Medico.hasMany(Consulta, { foreignKey: 'id_medico' });

Consulta.belongsTo(Paciente, { foreignKey: 'id_paciente' });
Paciente.hasMany(Consulta, { foreignKey: 'id_paciente' });