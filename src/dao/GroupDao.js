const { DbConnectionFactory } = require("../db/index");

class GroupDao {
  #db = DbConnectionFactory.get();

  getGroups = async () => {
    return new Promise((resolve, reject) =>
      this.#db.all("SELECT * from Groups", (err, groups) => {
        if (err) return reject(err);
        return resolve(groups);
      })
    );
  };

  getGroupsOfUser = async (user) => {
    return new Promise((resolve, reject) =>
      this.#db.get(
        "SELECT group_id from Group_Members where user_id = ?",
        [user.id],
        async (err, rows) => {
          if (err) return reject(err);
          try {
            const groups = await new Promise((resolve, reject) => {
              this.#db.get(
                "SELECT * from Groups where id in ?",
                [rows.join(",")],
                (err, rows) => {
                  if (err) return reject(err);
                  return resolve(rows);
                }
              );
            });
            resolve(groups);
          } catch (err) {
            reject(err);
          }
        }
      )
    );
  };

  getGroupExpenses = async (group) => {
    return new Promise((resolve, reject) =>
      this.#db.all("SELECT * from Group_Expenses", (err, groupExpenses) => {
        if (err) return reject(err);
        return resolve(groupExpenses);
      })
    );
  };

  addOrUpdateGroupExpense = (group, expense) => {
    const statement = this.#db.prepare(`
        INSERT INTO Group_Expenses (group_id, paid_by, owed_by, amount) VALUES (?, ?, ?, ?);
      `);
    statement.run(group.id, group.paidBy, group.owedBy, group.amount);
    statement.finalize();
  };

  addGroup = (group) => {
    const statement = this.#db.prepare(`
      INSERT INTO Groups (groupname) VALUES (?);
    `);
    statement.run(group.groupname);
    statement.finalize();
  };

  getGroupMembers = async () => {
    return new Promise((resolve, reject) =>
      this.#db.all("SELECT * from Group_Members", (err, groupMembers) => {
        if (err) return reject(err);
        return resolve(groupMembers);
      })
    );
  };

  addGroupMembers = (groupMember) => {
    const statement = this.#db.prepare(`
        INSERT INTO Group_Members (group_id, member_id) VALUES (?, ?);
      `);
    statement.run(groupMember.group_id, groupMember.member_id);
    statement.finalize();
  };
}

module.exports = {
  GroupDao,
};
