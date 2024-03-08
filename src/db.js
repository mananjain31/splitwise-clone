const getGroupExpenses = async () => {
  return new Promise((resolve, reject) =>
    db.all("SELECT * from Group_Expenses", (err, groupExpenses) => {
      if (err) return reject(err);
      return resolve(groupExpenses);
    })
  );
};
const getGroupMembers = async () => {
  return new Promise((resolve, reject) =>
    db.all("SELECT * from Group_Members", (err, groupMembers) => {
      if (err) return reject(err);
      return resolve(groupMembers);
    })
  );
};

const addGroupExpense = (expense) => {
  const statement = db.prepare(`
      INSERT INTO Group_Expenses (group_id, paid_by, owed_by, amount) VALUES (?, ?, ?, ?);
    `);
  statement.run(group.group_id, group.paid_by, group.owed_by, group.amount);
  statement.finalize();
};

const addGroupMembers = (groupMember) => {
  const statement = db.prepare(`
      INSERT INTO Group_Members (group_id, member_id) VALUES (?, ?);
    `);
  statement.run(groupMember.group_id, groupMember.member_id);
  statement.finalize();
};

module.exports = {
  DbConnectionFactory,
  connectDB,
  getUsers,
  getGroups,
  getGroupMembers,
  getGroupExpenses,
  addUser,
  addGroup,
  addGroupExpense,
  addGroupMembers,
};
