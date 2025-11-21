// src/pages/AgendamentosPage.tsx
import  { useState, useEffect } from "react";
import { SectionHome } from "../../components/Section/SectionHome/SectionHome";
import { AppointmentForm } from "../../components/AppointmentForm/AppointmentForm";
import { AppointmentList } from "../../components/AppointmentList/AppointmentList";
import { api } from "../../components/services/api"; // <-- Axios
import "./Home.css";

export type Appointment = {
  id: number;
  nome: string;
  servico: string;
  dataHora: string; // ISO 8601
};

export function Home() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);

  
  // Listar agendamentos
  async function fetchAppointments() {
  setLoading(true);

  try {
    const response = await api.get("/agendamentos");

    const lista = Array.isArray(response.data.lista)
      ? response.data.lista
      : [];

    setAppointments(lista);

  } catch (err: any) {
    if (err.response && err.response.status === 404) {
        console.error("Erro ao carregar:", err);
    } else {
        alert("Servidor indisponível")
  }
}

  setLoading(false);
}

    useEffect(() => {
        fetchAppointments();
    }, []);

  
  // Criar agendamentos

  async function createAppointment(nome: string, servico: string, dataHora: string) {
        try {
        const payload = { nome, servico, dataHora };

        await api.post("/agendamentos", payload);

        await fetchAppointments();
        } catch (err) {
        console.error("Erro ao criar:", err);
        }
}

  // Deletar agendamentos

  async function deleteAppointment(id: number) {
  try {
    await api.delete(`/agendamentos/${id}`);

    // remove imediatamente no front-end
    setAppointments((prev) => prev.filter(item => item.id !== id));

    // recarrega depois, por segurança
    fetchAppointments();

  } catch (err) {
    console.error("Erro ao deletar:", err);
  }
}
  return (
    <div className="page-wrapper">
      <SectionHome>
        <div className = "formTittle"> 
            <h1 className="titulo">Agendamentos</h1>

            <AppointmentForm onCreate={createAppointment} />
        </div>
        
        <AppointmentList
          items={appointments}
          loading={loading}
          onDelete={deleteAppointment}
        />
      </SectionHome>
    </div>

   
  );
}
