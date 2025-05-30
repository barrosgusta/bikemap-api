import request from "supertest";
import { app, server } from "../index.js";

describe("GET /rotas/:bairro", () => {
  afterAll((done) => {
    server.close(done); // ✅ Fecha o servidor ao final dos testes
  });

  it("retorna rotas para o bairro Centro", async () => {
    const res = await request(app).get("/rotas/centro");
    expect(res.statusCode).toBe(200);
    expect(res.body.bairro).toBe("Centro");
  });

  it("retorna erro para bairro inexistente", async () => {
    const res = await request(app).get("/rotas/narnia");
    expect(res.statusCode).toBe(404);
  });

  it("retorna rotas para o bairro Jardim das Flores", async () => {
    const res = await request(app).get("/rotas/jardim-das-flores");
    expect(res.statusCode).toBe(200);
    expect(res.body.bairro).toBe("Jardim das Flores");
  });
});
