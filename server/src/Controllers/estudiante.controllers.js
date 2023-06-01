import { pool } from "../db.js";


export const getlogin = async (req, res) => {

  try {
    const {Usuario, Contraseña} = req.body;
      
    const [rows] = await pool.query("CALL registro_academico.SP_LogIn(?, ?)", [
      Usuario, Contraseña
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "No se pudo iniciar sesion" });
    }
      
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }

};

export const getInserEstudiante = async (req, res) => {

  try {
    const {
    IDEstudiante, nombre1, nombre2, apellido1, apellido2, fechaNacimiento, genero, telefono, correoPersonal, correoInstitucional, passwordd, espanol, matematicas} = req.body;
 
    const [rows] = await pool.query("CALL registro_academico.SP_InsertarEstudiante (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [IDEstudiante, nombre1, nombre2, apellido1, apellido2, fechaNacimiento, genero, telefono, correoPersonal, correoInstitucional, passwordd, espanol, matematicas]
    );

    if (rows.length <= 0) {
      return res.status(404).json({ message: "No se inserte el estudiante" });
    }
    
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }

};

export const getListaEstudiantes = async (req, res) => {

  try {
    
    const [rows] = await pool.query("SELECT * FROM registro_academico.vw_estudiantexnota");

    res.json(rows);

  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }

};

export const getEstudiante = async (req, res) => {

  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM registro_academico.vw_estudiantexnota where est_id = ?", [id,]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "No se encuentra el estudiante" });
    }
  
    res.json(rows[0]);

  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }

};

export const getNotasEstudiante = async (req, res) => {
  
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM registro_academico.vw_estudiantexnota where est_id = ?", [id,]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "No se encuentran las notas" });
    }

    res.json(rows[0]);

    } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }

};

export const getNotasEstudiantes = async (req, res) => {

  try {
    
    const [rows] = await pool.query("SELECT * FROM registro_academico.vw_estudiantexnota");

    res.json(rows);

  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }

};

export const getCursos = async (req, res) => {   

  try {
    
    const [rows] = await pool.query("SELECT * FROM registro_academico.vw_fichacurso");
  
    res.json(rows);
  
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }

};

export const getCurso = async (req, res) => {  

  try {
    const { curso } = req.params;
    console.log(curso);
    const [rows] = await pool.query("SELECT * FROM registro_academico.vw_fichacurso where nombre_del_curso  = ?", [curso,]);
  
    if (rows.length <= 0) {
      return res.status(404).json({ message: "No se encuentra el curso" });
    }
    
    res.json(rows[0]);
  
    } catch (error) {
    return res.status(500).json({ message: "Algo salio mal" });
  }

};