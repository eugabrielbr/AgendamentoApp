// src/components/AppointmentForm.tsx
import React, { useState } from "react";
import "./AppointmentForm.css";

type Props = {
  onCreate: (name: string, service: string, datetime: string) => void;
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '20px',
  textAlign: 'left',
};

const inputStyle: React.CSSProperties = {
  padding: '12px 14px',
  borderRadius: '10px',
  border: '1px solid #e1e1e1',
  fontSize: '15px',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
};

const btnCriarStyle: React.CSSProperties = {
  marginTop: '10px',
  padding: '12px 18px',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  color: 'white',
  background: '#a884f7',
  transition: '0.2s',
};

const btnCriarHoverStyle: React.CSSProperties = {
  ...btnCriarStyle,
  background: '#8253ff',
};


export function AppointmentForm({ onCreate }: Props) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !service || !date || !time) {
      alert("Preencha todos os campos!");
      return;
    }

    // Convertendo para ISO 8601
    const datetime = new Date(`${date}T${time}:00`).toISOString();

    onCreate(name, service, datetime);

    setName("");
    setService("");
    setDate("");
    setTime("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Serviço"
        value={service}
        onChange={(e) => setService(e.target.value)}
      />

      <div className="row">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>

      <button type="submit" className="btn-criar">
        Criar
      </button>
    </form>
  );
}
