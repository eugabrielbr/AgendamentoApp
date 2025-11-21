// src/pages/Welcome.tsx
import React from "react";
import { Button } from "../../components/Button/ButtonWelcome";
import { SectionWelcome } from "../../components/Section/SectionWelcome/SectionWelcome";

import { useNavigate } from "react-router-dom";

export function Welcome() {
  const navigate = useNavigate()
  
  const handleStart = () => {
    
    navigate("/home");
  
  };

  // Cores do tema lilás aprimorado (escuras para contraste no card branco)
  const primaryColor = "#000000ff"; // Roxo vibrante (Título)
  const secondaryColor = "#5a3b88ff"; // Roxo escuro (Parágrafo)

  const pageStyle: React.CSSProperties = {
    // A cor de fundo da página é definida no CSS global como #aba7c0ff
    minHeight: "100vh",
    width: "100%", 
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto", 
    
   
  };

  const headerStyle: React.CSSProperties = {
    color: primaryColor, // Título em roxo vibrante
    fontSize: "2.8rem",
    marginBottom: "20px",
    fontWeight: "700",
    textAlign: "center",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "1.15rem",
    color: secondaryColor, // Parágrafo em roxo escuro
    marginBottom: "50px", 
    lineHeight: "1.6",
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto 50px auto",
  };

  const styleGroup: React.CSSProperties = {
  marginTop: '-60px',
};

  
  return (
    <div style={pageStyle}>
      {/* O Section continua branco para o contraste */}
      <SectionWelcome> 
        <div className="textos" style={styleGroup}>
          <h1 style={headerStyle}>
              <strong>Bem-vindo ao AgendamentoApp</strong>
          </h1>
          <p style={paragraphStyle}>
            O <strong>AgendamentoApp</strong> é um sistema simples e eficiente para gerenciar compromissos. Organize seu tempo, agende reuniões e nunca perca nenhum compromisso importante.
          </p>
          {/* O Button agora usa a classe glow-on-hover, que tem fundo #111 (quase preto) */}
          <Button label="Comece já!" onClick={handleStart} />
        </div>
      </SectionWelcome>
    </div>
  );
}