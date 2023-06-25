import { Medico } from "../models/index.js";

export const createMedico = async (req, res) => {
  const { nombre, apellido, cedula, email, telefono, nacimiento, especialidad, usuario, contrasena } = req.body;
  try {
    let newMedico = await Medico.create(
      {
        nombre,
        apellido,
        cedula,
        email,
        telefono,
        nacimiento,
        especialidad,
        usuario,
        contrasena,
      },
      {
        fields: ["nombre", "apellido", "cedula", "email", "telefono","nacimiento", "especialidad", "usuario", "contrasena"],
      }
    );
    if (newMedico) {
      return res.json({
        message: "Medico creado exitosamente",
        data: newMedico,
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

export const getMedico = async (req, res) => {
  try {
    const medico = await Medico.findAll();
    res.json({
      data: medico,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneMedico = async (req, res) => {
  const { id } = req.params;
  try {
    const medico = await Medico.findOne({
      where: {
        id,
      },
    });
    if (!medico) {
      return res.status(404).json({
        message: "Medico no encontrado",
      });
    }
    res.json({
      data: medico,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMedico = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Medico.destroy({
      where: {
        id,
      },
    });
    if (deleteRowCount === 0) {
      return res.status(404).json({
        message: "Medico no encontrado",
      });
    }
    res.json({
      message: "Medico eliminado exitosamente",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateMedico = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, cedula, email, telefono, nacimiento, especialidad, usuario, contrasena } = req.body;
  try {
    const medico = await Medico.findAll({
      attributes: ["id", "nombre", "apellido", "cedula", "email", "telefono","nacimiento", "especialidad", "usuario", "contrasena"],
      where: {
        id,
      },
    });
    if (medico.length > 0) {
      medico.forEach(async (medico) => {
        await medico.update({
          nombre,
          apellido,
          cedula,
          email,
          telefono,
          nacimiento,
          especialidad,
          usuario,
          contrasena,
        });
      });
      return res.json({
        message: "Medico actualizado exitosamente",
        data: medico,
      });
    } else {
      return res.status(404).json({
        message: "Medico no encontrado",
        data: {},
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMedicoByCedula = async (req, res) => {
    const { cedula } = req.params;
    try {
      const medico = await Medico.findOne({
        where: {
          cedula,
        },
      });
      if (!medico) {
        return res.status(404).json({
          message: "Medico no encontrado",
        });
      }
      res.json({
        data: medico,
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  
