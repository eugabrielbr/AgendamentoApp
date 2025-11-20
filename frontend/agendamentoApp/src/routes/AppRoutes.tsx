import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Welcome } from "../pages/Welcome/Welcome";
import { Home } from "../pages/Home/Home";

export function AppRoutes() {
  const location = useLocation();

  // Variantes de animação para cada página
  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -50 },
  };

  const pageTransition = { duration: 0.1};

  // Helper para envolver páginas em motion.div
  const AnimatedPage = (Component: React.ReactNode) => (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute", width: "100%" }}
    >
      {Component}
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={AnimatedPage(<Welcome />)} />
        <Route path="/home" element={AnimatedPage(<Home />)} />
      </Routes>
    </AnimatePresence>
  );
}
