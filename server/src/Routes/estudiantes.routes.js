import { Router } from "express"
import { getlogin, getListaEstudiantes, getEstudiante, getCurso, getCursos, getNotasEstudiante, getNotasEstudiantes, getInserEstudiante} from "../Controllers/estudiante.controllers.js"


const router = Router()

router.post('/login', getlogin)

router.get('/Curso/:curso', getCurso)

router.get('/Cursos', getCursos)

router.post('/InserEstudiante', getInserEstudiante)

router.get('/ListaEstudiantes', getListaEstudiantes)

router.get('/Estudiante/:id', getEstudiante)

router.get('/NotasEstudiante/:id', getNotasEstudiante)

router.get('/NotasEstudiantes', getNotasEstudiantes)



router.post('/notasEstudiante', (req, res) => res.send('notas estudiante'))

export default router 