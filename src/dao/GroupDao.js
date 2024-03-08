const { DbConnectionFactory } = require("../db");

class GroupDao {
  #db = DbConnectionFactory.get();

  getGroups = async () => {
    return new Promise((resolve, reject) =>
      db.all("SELECT * from Groups", (err, groups) => {
        if (err) return reject(err);
        return resolve(groups);
      })
    );
  };

  addGroup = (group) => {
    const statement = db.prepare(`
      INSERT INTO Groups (groupname) VALUES (?);
    `);
    statement.run(group.groupname);
    statement.finalize();
  };
}

module.exports = {
  GroupDao,
};
