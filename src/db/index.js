const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

class DbConnectionFactory {
  static #db;
  constructor() {
    if (!DbConnectionFactory.#db) {
      if (!fs.existsSync("./splitewise.db")) {
        fs.writeFileSync("./splitewise.db", "", "utf-8");
      }
      DbConnectionFactory.#db = new sqlite3.Database(
        "./splitewise.db",
        sqlite3.OPEN_READWRITE
      );
    }
  }
  static get() {
    new DbConnectionFactory();
    return DbConnectionFactory.#db;
  }
}

const initDB = (db = DbConnectionFactory.get()) => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        contactnumber TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS Groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    );
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS Group_Expenses (
        group_id INTEGER,
        paid_by INTEGER,
        owed_by INTEGER,
        amount REAL NOT NULL
    );
  `);
  db.run(`
      CREATE TABLE IF NOT EXISTS Group_Members (
          group_id INTEGER,
          user_id INTEGER
      );
    `);
  db.all(
    "SELECT name FROM sqlite_master WHERE type='table';",
    (err, tables) => {
      if (err) {
        console.error("Error:", err);
      } else {
        console.log(
          "Tables:",
          tables.map((table) => table.name)
        );
      }
    }
  );
};

const connectDB = () => {
  db = DbConnectionFactory.get();
  initDB(db);
  return db;
};

module.exports = {
  DbConnectionFactory,
  connectDB,
};
