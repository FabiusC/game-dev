const express = require("express");
const path = require("path");

const app = express();

// Configura el servidor para servir archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal para 'index.html'
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
