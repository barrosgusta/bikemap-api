import express from "express";
import { rotas } from "./dados/rotas.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/rotas/:bairro", (req, res) => {
  const bairro = req.params.bairro.toLowerCase();
  const resultado = rotas.find(r => r.bairro.toLowerCase() === bairro);

  if (resultado) res.json(resultado);
  else res.status(404).json({ erro: "Bairro não encontrado" });
});

app.listen(PORT, () => {
  console.log(`🚴 BikeMap API rodando em http://localhost:${PORT}`);
});

export { app, server };
