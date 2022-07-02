const db = require("../db");


function addMessage(message, room, user, date) {
  const sql =
    "INSERT INTO message (value, room, user, date) VALUES (?, ?, ?, ?)";
  return new Promise((resolve, reject) => {
    db.run(sql, [message, room, user, date], (err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      console.log(message, room, user, date);
      resolve();
    });
  });
}

function delMessages(room) {
  const sql = "DELETE FROM message WHERE room = ?";
  return new Promise((resolve, reject) => {
    db.get(sql, room, (err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve();
    });
  });
}
function roomMessages(roomName) {
  const sql = "SELECT * FROM message WHERE room = ?";

  return new Promise((resolve, reject) => {
    db.all(sql, roomName, (err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve(rows);
    });
  });
}

module.exports = {
  addMessage,
  roomMessages,
  delMessages
};
