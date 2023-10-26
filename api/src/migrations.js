const { database } = require('./config/config');
const mysql2 = require('mysql2');

const connection = mysql2.createConnection(database);

const createUsersTable = () => {
    return new Promise((resolve, reject) => {
        const query = "CREATE TABLE IF NOT EXISTS users (username VARCHAR(255), password VARCHAR(255))"
        connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  };

(async () => {
    await createUsersTable();

    console.log("tables created!");
    connection.end();
})()
