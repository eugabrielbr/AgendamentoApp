// src/components/Button/Button.tsx
import React from "react";
import './ButtonWelcome.css'; 

type ButtonProps = {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties; // Mantido, mas não recomendado para este efeito
  className?: string; // Para classes adicionais, se necessário
};

export function Button({ label, onClick, style, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      // ⚠️ Aplica a classe CSS do efeito
      className={`glow-on-hover ${className}`}
      style={style} 
    >
      {label}
    </button>
  );
}