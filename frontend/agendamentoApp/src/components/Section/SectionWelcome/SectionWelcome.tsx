// src/components/Section.tsx (Mantido como Card Branco)
import React from "react";


type SectionProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const sectionCardStyle: React.CSSProperties = {
  padding: '120px 120px',
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
  maxHeight: '250px', // opcional
  backgroundColor: '#ffffff',
  borderRadius: '35px',
  boxShadow: '0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
};


export function SectionWelcome({ children }: SectionProps) {
  return (
    <section
      style={sectionCardStyle}
       // permite sobrescrever estilos se quiser
    >
      {children}
    </section>
  );
}