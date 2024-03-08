const { DbConnectionFactory } = require("../db");

class UserDao {
  #db = DbConnectionFactory.get();
  getUsers = async () => {
    return new Promise((resolve, reject) =>
      db.all("SELECT * from Users", (err, users) => {
        if (err) return reject(err);
        return resolve(users);
      })
    );
  };
  addUser = (user) => {
    const statement = db.prepare(
      `
        INSERT INTO Users (name, contactnumber, email) VALUES (?, ?, ?);
        `
    );
    const user1 = statement.run(
      user.username,
      user.contactnumber,
      user.email,
      user.gender
    );
    const user2 = statement.finalize();
    return [user1, user2];
  };
}

module.exports = {
  UserDao,
};
