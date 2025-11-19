import express from 'express';
import cors from 'cors';
import agendamentoRoutes from "./routes/agendamento.routes"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(agendamentoRoutes);



export default app;