const express = require("express");
const path = require("path");

const app = express();

// Configura el servidor para servir archivos estáticos desde 'public'
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

// Ruta principal para 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
