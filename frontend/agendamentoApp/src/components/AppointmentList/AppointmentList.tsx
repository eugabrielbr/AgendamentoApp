// src/components/AppointmentList.tsx
import "./AppointmentList.css";
import type { Appointment } from "../../pages/Home/Home";

type Props = {
  items: Appointment[];
  loading: boolean;
  onDelete: (id: number) => void;
};

const listaStyle: React.CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  textAlign: 'left',
  maxHeight: '300px',   // ✔ ALTURA FIXA
  overflowY: 'auto',
  overflowX: 'hidden',
  paddingRight: '10px',
};


export function AppointmentList({ items, loading, onDelete }: Props) {
  if (loading) return <p className="loading">Carregando...</p>;

  if (items.length === 0) return <p className="vazio">Nenhum agendamento</p>;

  return (
    <ul style={listaStyle}>
      {items.map((item) => (
        <li key={item.id} className="item">
          <div>
            <strong>{item.nome}</strong>
            <div className="servico">{item.servico}</div>

            <div className="datahora">
              {new Date(item.dataHora).toLocaleDateString("pt-BR")} ·{" "}
              {new Date(item.dataHora).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>

          <button
            className="btn-delete"
            onClick={() => onDelete(item.id)}
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
}
