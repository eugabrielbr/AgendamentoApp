import {Router} from "express"; 
import * as agendamentoController from "../controllers/agendamento.controller"
import {validateData} from "../middlewares/zod.validator"
import {agendamentoValid} from "../validators/zod.schema"
// aq colocar o zod como middleware

const router = Router();

router.post('/agendamentos',validateData(agendamentoValid), agendamentoController.criarAgendamento);

router.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

export default router;