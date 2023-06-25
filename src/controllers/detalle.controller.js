import { Detalle } from "../models/index.js";
import { Consulta } from "../models/consulta.model.js";

export const createDetalle = async (req, res) => {
  const { motivo, diagnostico, tratamiento, id_consulta } = req.body;
  try {
    let newDetalle = await Detalle.create(
      {
        motivo,
        diagnostico,
        tratamiento,
        id_consulta,
      },
      {
        fields: ["motivo", "diagnostico", "tratamiento", "id_consulta"],
      }
    );
    if (newDetalle) {
      return res.json({
        message: "Detalle creado exitosamente",
        data: newDetalle,
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

export const getDetalle = async (req, res) => {
  try {
    const detalle = await Detalle.findAll();
    res.json({
      data: detalle,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneDetalle = async (req, res) => {
  const { id } = req.params;
  try {
    const detalle = await Detalle.findOne({
      where: {
        id,
      },
    });
    if (!detalle) {
      return res.status(404).json({
        message: "Detalle no encontrado",
      });
    }
    res.json({
      data: detalle,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDetalle = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Detalle.destroy({
      where: {
        id,
      },
    });
    if (deleteRowCount === 0) {
      return res.status(404).json({
        message: "Detalle no encontrado",
      });
    }
    res.json({
      message: "Detalle eliminado exitosamente",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateDetalle = async (req, res) => {
  const { id } = req.params;
  const { motivo, diagnostico, tratamiento, id_consulta  } = req.body;
  try {
    const detalle = await Detalle.findAll({
      attributes: ["motivo", "diagnostico", "tratamiento", "id_consulta"],
      where: {
        id,
      },
    });
    if (detalle.length > 0) {
      detalle.forEach(async (detalle) => {
        await detalle.update({
            motivo,
            diagnostico,
            tratamiento,
            id_consulta,
        });
      });
      return res.json({
        message: "Detalle actualizado exitosamente",
        data: detalle,
      });
    } else {
      return res.status(404).json({
        message: "Detalle no encontrado",
        data: {},
      });
    }
  } catch (error) {
    console.log(error);
  }
};

  
