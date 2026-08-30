
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import { Alerts } from "./app/pages/Alerts.tsx";
import { RegionDetail } from "./app/pages/RegionDetail.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/region/:id" element={<RegionDetail />} />
      <Route path="/alerts" element={<Alerts />} />
    </Routes>
  </BrowserRouter>,
);
  
