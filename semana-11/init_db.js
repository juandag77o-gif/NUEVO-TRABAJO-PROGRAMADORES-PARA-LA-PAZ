const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./comunidad.db', (err) => {
    if (err) return console.error("Error:", err.message);
    console.log("¡Base de datos creada con éxito!");
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, correo TEXT UNIQUE
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS causas (
        id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, descripcion TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS apoyos (
        id INTEGER PRIMARY KEY AUTOINCREMENT, causa_id INTEGER, usuario_id INTEGER
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS alertas (
        id INTEGER PRIMARY KEY AUTOINCREMENT, causa_id INTEGER, tipo TEXT, contenido TEXT
    )`);
    console.log("Tablas del modelo listas.");
});
db.close();
