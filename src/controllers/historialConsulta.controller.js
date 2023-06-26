import { Detalle, Consulta, Medico, Paciente } from '../models/index.js';
import { Op } from 'sequelize';

export const listaHistorial = async (req, res) => {
  try {
    const { searchText, especialidad, medico, paciente, fecha } = req.query;

    // Construir la consulta principal
    const consulta = {
      include: [
        {
          model: Detalle,
          where: {},
        },
        {
          model: Medico,
          as: 'Medico',
          where: {},
        },
        {
          model: Paciente,
          where: {},
        },
      ],
    };

    if (searchText) {
      consulta.include[0].where = {
        [Op.or]: [
          { motivo: { [Op.like]: `%${searchText}%` } },
          { diagnostico: { [Op.like]: `%${searchText}%` } },
        ],
      };
    }
    if (especialidad) {
      consulta.include[1].where = { especialidad: { [Op.like]: `%${especialidad}%` } };
    }
    if (medico) {
      consulta.include[1].where = { nombre: { [Op.like]: `%${medico}%` } };
    }
    if (paciente) {
      consulta.include[2].where = { nombre: { [Op.like]: `%${paciente}%` } };
    }
    if (fecha) {
      consulta.where = { fecha: { [Op.like]: `%${fecha}%` } };
    }

    // Realizar la consulta
    const historial = await Consulta.findAll(consulta);

    res.json(historial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el historial de consultas' });
  }
};

export default listaHistorial;
