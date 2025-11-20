// src/components/Section.tsx (Mantido como Card Branco)
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export function Section({ children, style }: SectionProps) {
  const defaultSectionStyle: React.CSSProperties = {
    padding: "80px 80px",
    maxWidth: "960px",
    margin: "0 auto",
    textAlign: "center",
    
    // Estilo de Card: Fundo branco e Sombra
    backgroundColor: "#ffffffff", 
    borderRadius: "12px", 
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.04)", 
  };
  
  return (
    <section
      style={{
        ...defaultSectionStyle,
        ...style,
      }}
    >
      {children}
    </section>
  );
}