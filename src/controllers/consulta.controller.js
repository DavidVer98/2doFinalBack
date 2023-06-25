import { Consulta } from "../models/index.js";
import { Medico } from "../models/medico.model.js";
import { Paciente } from "../models/paciente.model.js";

export const createConsulta = async (req, res) => {
  const { id_medico, id_paciente, fecha } = req.body;
  try {
    let newConsulta = await Consulta.create(
      {
        id_medico,
        id_paciente,
        fecha,
      },
      {
        fields: ["id_medico", "id_paciente", "fecha"],
      }
    );
    if (newConsulta) {
      return res.json({
        message: "Consulta creada exitosamente",
        data: newConsulta,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Algo salio mal",
      error: error.parent.detail,
      data: {},
    });
  }
};

export const getConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.findAll();
    res.json({
      data: consulta,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneConsulta = async (req, res) => {
  const { id } = req.params;
  try {
    const consulta = await Consulta.findOne({
      where: {
        id,
      },
    });
    if (!consulta) {
      return res.status(404).json({
        message: "Consulta no encontrada",
      });
    }
    res.json({
      data: consulta,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteConsulta = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Consulta.destroy({
      where: {
        id,
      },
    });
    if (deleteRowCount === 0) {
      return res.status(404).json({
        message: "Consulta no encontrada",
      });
    }
    res.json({
      message: "Consulta eliminada exitosamente",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateConsulta = async (req, res) => {
  const { id } = req.params;
  const { id_medico, id_paciente, fecha} = req.body;
  try {
    const consulta = await Consulta.findAll({
      attributes: ["id_medico", "id_paciente", "fecha"],
      where: {
        id,
      },
    });
    if (consulta.length > 0) {
      consulta.forEach(async (consulta) => {
        await consulta.update({
            id_medico,
            id_paciente,
            fecha,
        });
      });
      return res.json({
        message: "Consulta actualizada exitosamente",
        data: consulta,
      });
    } else {
      return res.status(404).json({
        message: "Consulta no encontrada",
        data: {},
      });
    }
  } catch (error) {
    console.log(error);
  }
};

  
