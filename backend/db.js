const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db.sqlite", (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  }
  console.log("connected to db");

  
  const roomsq = `
  CREATE TABLE IF NOT EXISTS rooms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_name TEXT)`;

  const messagesq = `
  CREATE TABLE IF NOT EXISTS message (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    value TEXT NOT NULL,
    room TEXT NOT NULL,
    user TEXT NOT NULL,
    date TEXT)`;

  
  db.run(roomsq, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      const insertroomsq = `INSERT INTO rooms (room_name) VALUES (?)`;
     
    }
  });
  db.run(messagesq, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      const insertmsgsq = `INSERT INTO message (value, room, user, date) VALUES (?, ?, ?, ?)`;
    }
  });
});
module.exports = db;
