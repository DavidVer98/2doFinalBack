import { Paciente } from "../models/index.js";

export const createPaciente = async (req, res) => {
  const { nombre, apellido, cedula, email, telefono, nacimiento } = req.body;
  try {
    let newPaciente = await Paciente.create(
      {
        nombre,
        apellido,
        cedula,
        email,
        telefono,
        nacimiento,
      },
      {
        fields: ["nombre", "apellido", "cedula", "email", "telefono","nacimiento"],
      }
    );
    if (newPaciente) {
      return res.json({
        message: "Paciente creado exitosamente",
        data: newPaciente,
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

export const getPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findAll();
    res.json({
      data: paciente,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOnePaciente = async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await Paciente.findOne({
      where: {
        id,
      },
    });
    if (!paciente) {
      return res.status(404).json({
        message: "Paciente no encontrado",
      });
    }
    res.json({
      data: paciente,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePaciente = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Paciente.destroy({
      where: {
        id,
      },
    });
    if (deleteRowCount === 0) {
      return res.status(404).json({
        message: "Paciente no encontrado",
      });
    }
    res.json({
      message: "Paciente eliminado exitosamente",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePaciente = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, cedula, email, telefono, nacimiento  } = req.body;
  try {
    const paciente = await Paciente.findAll({
      attributes: ["id", "nombre", "apellido", "cedula", "email", "telefono","nacimiento"],
      where: {
        id,
      },
    });
    if (paciente.length > 0) {
      paciente.forEach(async (paciente) => {
        await paciente.update({
          nombre,
          apellido,
          cedula,
          email,
          telefono,
          nacimiento,
        });
      });
      return res.json({
        message: "Paciente actualizado exitosamente",
        data: paciente,
      });
    } else {
      return res.status(404).json({
        message: "Paciente no encontrado",
        data: {},
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPacienteByCedula = async (req, res) => {
    const { cedula } = req.params;
    try {
      const paciente = await Paciente.findOne({
        where: {
          cedula,
        },
      });
      if (!paciente) {
        return res.status(404).json({
          message: "Paciente no encontrado",
        });
      }
      res.json({
        data: paciente,
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  
