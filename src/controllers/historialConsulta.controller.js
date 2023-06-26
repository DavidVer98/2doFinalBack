import { Detalle, Consulta, Medico, Paciente } from "../models/index.js";
import { Op } from "sequelize";

export const listaHistorial = async (req, res) => {
  try {
    const { texto, especialidad, medico, paciente, fecha } = req.query;

    console.log(req.query);

    // Construir el objeto de filtro para los detalles
    const detalleFiltro = {};
    if (texto) {
      detalleFiltro[Op.or] = [
        { motivo: { [Op.like]: `%${texto}%` } },
        { diagnostico: { [Op.like]: `%${texto}%` } },
        { tratamiento: { [Op.like]: `%${texto}%` } },
      ];
    }

    // Construir el objeto de filtro para la consulta
    const consultaFiltro = {};
    if (especialidad) {
      consultaFiltro["$Medico.especialidad$"] = { [Op.like]: `%${especialidad}%` };
    }
    if (medico) {
      consultaFiltro["$Medico.nombre$"] = { [Op.like]: `%${medico}%` };
    }
    if (paciente) {
      consultaFiltro["$Paciente.nombre$"] = { [Op.like]: `%${paciente}%` };
    }
    if (fecha) {
      consultaFiltro.fecha = { [Op.like]: `%${fecha}%` };
    }

    // Obtener el listado de detalles de la consulta
    const detalles = await Detalle.findAll({
      include: [
        {
          model: Consulta,
          attributes: ["fecha"],
          where: consultaFiltro,
          include: [
            {
              model: Medico,
              attributes: ["nombre", "especialidad"], // Agregar los atributos deseados del médico
            },
            {
              model: Paciente,
              attributes: ["nombre"], // Agregar los atributos deseados del paciente
            },
          ],
        },
      ],
      where: detalleFiltro,
      attributes: ["motivo", "diagnostico", "tratamiento"],
      raw: true,
    });

    res.json(detalles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ocurrió un error al obtener el historial de consultas." });
  }
};
