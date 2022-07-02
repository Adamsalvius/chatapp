const db = require("../db");

function getRooms() {
  const sql = "SELECT * FROM rooms";

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve(rows);
    });
  });
}





function delRoom(id) {
  const sql = "DELETE FROM rooms WHERE id = ?";
  return new Promise((resolve, reject) => {
    db.get(sql, id, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}
function createRoom(room) {
  const sql = "INSERT INTO rooms (room_name) VALUES (?)";

  return new Promise((resolve, reject) => {
    db.run(sql, [room], (err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve();
    });
  });
}

module.exports = {
  getRooms,
  createRoom,
  delRoom,
};