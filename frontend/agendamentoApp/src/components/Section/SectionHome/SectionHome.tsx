// src/components/Section.tsx (Mantido como Card Branco)
import React from "react";


type SectionProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const sectionCardStyle: React.CSSProperties = {
  padding: '150px 200px',
  maxWidth: '300px',
  margin: '0 auto',
  textAlign: 'center',
  height: '450px', // opcional
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  borderRadius: '35px',
  boxShadow: '0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
};


export function SectionHome({ children }: SectionProps) {
  return (
    <section
      style={sectionCardStyle} // permite sobrescrever estilos se quiser
    >
      {children}
    </section>
  );
}