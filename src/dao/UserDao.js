const { DbConnectionFactory } = require("../db/index");

class UserDao {
  #db = DbConnectionFactory.get();
  getUsers = async () => {
    return new Promise((resolve, reject) =>
      this.#db.all("SELECT * from Users", (err, users) => {
        if (err) return reject(err);
        return resolve(users);
      })
    );
  };
  addUser = (user) => {
    const statement = this.#db.prepare(
      `
        INSERT INTO Users (name, contactnumber, email, password) VALUES (?, ?, ?, ?);
        `
    );
    console.log(user);
    const user1 = statement.run(
      user.name,
      user.contactNumber,
      user.email,
      user.password
    );
    const user2 = statement.finalize();
    return [user1, user2];
  };
}

module.exports = {
  UserDao,
};
