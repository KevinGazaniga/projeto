import express from "express";
import { db } from "./db";

const server = express();

server.use(express.static("public"));

server.get("/", (req, res) => {
  res.sendFile(import.meta.dirname + "/index.html");
});

server.get("/usuarios", async (req, res) => {
  const usuarios = await db.usuario.findMany();
  res.json(usuarios);
});

server.listen(3000, () => console.log("rodando"));
