import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Divinefont from "./components/Divinefont/Divinefont.tsx";
import Offhand from "./components/Offhand/Offhand.tsx";
import Navigation from "./components/navigation/Navigation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigation />} />
        <Route path="/poe/divinefont" element={<Divinefont />} />
        <Route path="/poe/offhand" element={<Offhand />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
